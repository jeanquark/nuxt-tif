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
// const startTime = '1537610400'
const endTime = moment().add(24, 'hours').unix();
// const endTime = '1537696800'
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
        // admin.database().ref('/events_new2').orderByChild('date').equalTo(today).once('value').then((snapshot) => {
        // const liveMatches = await admin.database().ref('/events_new2').orderByChild('timestamp').startAt(startTime).endAt(endTime).once('value').then((snapshot) => {
        //     console.log('snapshot.val(): ', snapshot.val());
        //     const matchesArray = []
        //     for (const key in snapshot.val()) {
        //         console.log('key: ', key)
        //         // matchesArray.push({...snapshot.val()[key]})
        //         matchesArray.push(key)
        //     }
        //     console.log('matchesArray: ', matchesArray)

        //     return matchesArray
        // })
        // console.log('liveMatches: ', liveMatches)
        // for (match of liveMatches) {
        //     console.log('match1: ', match)
        // }
        const leaguesArray = ['25', '74', '114', '73', '46', '12', '139', '86', '9']

        const url = 'http://livescore-api.com/api-client/scores/live.json?key=OcregGOthrL9mbll&secret=QypmqmYAOLUmrWrf8SuoziSQKDZ6PksF'
        axios.get(url).then((response) => {
            // console.log('response: ', response)
            const matches = response.data.data.match
            // console.log('events: ', events)
            console.log('today: ', today)
            let updates = {}

            for (let match of matches) {
                // console.log('match: ', match)
                // 
                // console.log
                // console.log('liveMatches2: ', liveMatches)
                if (leaguesArray.includes(match.league_id)) {
                    const home_slug = slugifyFunction.slugify(match.home_name)
                    const visitor_slug = slugifyFunction.slugify(match.away_name)
                    const id = today + '_' + match.home_id + '_vs_' + match.away_id

                    updates['/events_new2/' + id + '/id'] = match.id
                    updates['/events_new2/' + id + '/score'] = match.score
                    updates['/events_new2/' + id + '/ht_score'] = match.ht_score
                    updates['/events_new2/' + id + '/ft_score'] = match.ft_score
                    updates['/events_new2/' + id + '/et_score'] = match.et_score
                    updates['/events_new2/' + id + '/time'] = match.time
                    updates['/events_new2/' + id + '/status'] = match.status
                    updates['/events_new2/' + id + '/last_changed'] = match.last_changed
                }
            }
            console.log('updates: ', updates)
            admin.database().ref().update(updates).then((snapshot) => {
                console.log('Successfully updated firebase database with new events')
            }).catch((error) => {
                console.log('Firebase error', error)
            })
        }).catch(error => {
            console.log('Livescore error: ', error)
        })

        res.send('GET request succeeded!')
    } catch(error) {
        console.log(error)
        res.send('GET request failed...')
    }
})