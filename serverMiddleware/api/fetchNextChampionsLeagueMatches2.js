const express = require('express'),
      moment = require('moment'),
      axios = require('axios'),
      admin = require('firebase-admin')
      slugifyFunction = require('../../helpers/slugify');

const app = express();

// Fetch all events that are about to start
const today = moment().format('YYYY-MM-DD');
console.log('today: ', today);
const startTime = moment().unix();
const endTime = moment().add(3, 'hours').unix();
console.log('startTime: ', startTime)
console.log('endTime: ', endTime)

const rounds = {
    'GS': {
        'id': 'GS',
        'name': 'Group stage',
        'slug': 'group_stage'
    },
    'QF': {
        'id': 'QF',
        'name': 'Quarter Final',
        'slug': 'quarter_final'
    },
    'SF': {
        'id': 'SF',
        'name': 'Semi Final',
        'slug': 'semi_final'
    },
    'F': {
        'id': 'F',
        'name': 'Final',
        'slug': 'final'
    }
}

// To be run every hour
module.exports = app.use(async function (req, res, next) {
    try {
        const leagues = await admin.database().ref('/competitions').once('value').then((snapshot) => {
            const leaguesArray = []
            for (const key in snapshot.val()) {
                if (snapshot.val()[key].name === 'Champions League') {
                    leaguesArray.push({...snapshot.val()[key], id: key})
                }
            }
            // console.log('leaguesArray: ', leaguesArray)
            // return leaguesArray.slice(0, 3)
            return leaguesArray
        })
        console.log('done!')
        // console.log('leagues: ', leagues)
        // console.log('leaguesArray: ', leaguesArray)

        // const urls = []
        // for (league of leaguesArray) {
        //     urls.push('http://livescore-api.com/api-client/fixtures/matches.json?key=hPPVj3bOcU4MTC6a&secret=EUl5JwsFuxpgkjnB9dwshHgtClgwXnHB&league=' + league)
        // }
        // console.log('urls: ', urls)

        
        let urls = []
        // let updates = {}

        for (const league of leagues) {
            // console.log('league: ', league)
            const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=hPPVj3bOcU4MTC6a&secret=EUl5JwsFuxpgkjnB9dwshHgtClgwXnHB&league=' + league.livescore_api_league_id
            urls.push(url)
            axios.get(url).then((response) => {
                let updates = {}
                const matches = response.data.data.fixtures
                // console.log('response: ', response)
                // console.log('fixtures: ', response.data.data.fixtures)
                for (let match of matches) {
                    const home_slug = slugifyFunction.slugify(match.home_name)
                    const visitor_slug = slugifyFunction.slugify(match.away_name)
                    // console.log('home_slug: ', home_slug)
                    // console.log('visitor_slug: ', visitor_slug)
                    const id = match.date + '_' + home_slug + '_vs_' + visitor_slug
                    const date_time = match.date + ' ' + match.time
                    match.timestamp = moment(date_time).unix()
                    match.round = rounds[match.round] ? rounds[match.round] : match.round

                    // match.competition = {
                    //     id: match.league_id,
                    //     name: league.name,
                    //     slug: league.slug
                    // }
                    match.home_team = {
                        id: match.home_id,
                        name: match.home_name,
                        slug: home_slug
                    }
                    match.visitor_team = {
                        id: match.away_id,
                        name: match.away_name,
                        slug: visitor_slug
                    }
                    // events[id] = match
                    updates['/events_new2/' + id] = match
                }
                // console.log('updates: ', updates)
                admin.database().ref().update(updates).then((snapshot) => {
                    console.log('Successfully updated firebase database with new events')
                    // console.log(slugify1.slugify('F.C Zurich'))
                }).catch((error) => {
                    console.log(error)
                })
            }).catch((error) => {
                console.log(error)
            })
        }
        // console.log('urls: ', urls)
        // console.log('updates: ', updates)
        // admin.database().ref().update(updates).then((snapshot) => {
        //     console.log('Successfully updated firebase database with new events')
        //     // console.log(slugify1.slugify('F.C Zurich'))
        // }).catch((error) => {
        //     console.log(error)
        // })
        
        res.send('GET request succeeded!')
    } catch(error) {
        console.log(error)
        res.send('GET request failed...')
    }
})