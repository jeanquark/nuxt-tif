const express = require('express'),
      moment = require('moment'),
      axios = require('axios'),
      admin = require('firebase-admin')
      // slugify1 = require('../helpers/slugify')
      slugifyFunction = require('../../helpers/slugify');

const app = express();


function getChampionsLeagueGroupAMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=OcregGOthrL9mbll&secret=QypmqmYAOLUmrWrf8SuoziSQKDZ6PksF&league=174'
    return axios.get(url)
}

function getChampionsLeagueGroupBMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=OcregGOthrL9mbll&secret=QypmqmYAOLUmrWrf8SuoziSQKDZ6PksF&league=175'
    return axios.get(url)
}

function getChampionsLeagueGroupCMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=OcregGOthrL9mbll&secret=QypmqmYAOLUmrWrf8SuoziSQKDZ6PksF&league=176'
    return axios.get(url)
}

function getChampionsLeagueGroupDMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=OcregGOthrL9mbll&secret=QypmqmYAOLUmrWrf8SuoziSQKDZ6PksF&league=177'
    return axios.get(url)
}

function getChampionsLeagueGroupEMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=OcregGOthrL9mbll&secret=QypmqmYAOLUmrWrf8SuoziSQKDZ6PksF&league=232'
    return axios.get(url)
}

function getChampionsLeagueGroupFMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=OcregGOthrL9mbll&secret=QypmqmYAOLUmrWrf8SuoziSQKDZ6PksF&league=233'
    return axios.get(url)
}

function getChampionsLeagueGroupGMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=OcregGOthrL9mbll&secret=QypmqmYAOLUmrWrf8SuoziSQKDZ6PksF&league=234'
    return axios.get(url)
}

function getChampionsLeagueGroupHMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=OcregGOthrL9mbll&secret=QypmqmYAOLUmrWrf8SuoziSQKDZ6PksF&league=235'
    return axios.get(url)
}

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

// To be run once a day
module.exports = app.use(function (req, res, next) {
    try {
        axios.all([getChampionsLeagueGroupAMatches(), getChampionsLeagueGroupBMatches(), getChampionsLeagueGroupCMatches(), getChampionsLeagueGroupDMatches(), getChampionsLeagueGroupEMatches(), getChampionsLeagueGroupFMatches(), getChampionsLeagueGroupGMatches(), getChampionsLeagueGroupHMatches()]).then(axios.spread(function (groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH) {

            let matches = groupA.data.data.fixtures.concat(groupB.data.data.fixtures).concat(groupC.data.data.fixtures).concat(groupD.data.data.fixtures).concat(groupE.data.data.fixtures).concat(groupF.data.data.fixtures).concat(groupG.data.data.fixtures).concat(groupH.data.data.fixtures)
            console.log('matches: ', matches)
            let events = {}
            let updates = {}
            for (let match of matches) {
                // console.log('Match: ', match)
                const home_slug = slugifyFunction.slugify(match.home_name)
                const visitor_slug = slugifyFunction.slugify(match.away_name)
                // console.log('home_slug: ', home_slug)
                // console.log('visitor_slug: ', visitor_slug)
                const id = match.date + '_' + home_slug + '_vs_' + visitor_slug
                const date_time = match.date + ' ' + match.time
                match.livescore_api_id = match.id
                match.timestamp = moment(date_time).format('X')

                match.competition = {
                    id: match.league_id,
                    name: 'Champion\'s League',
                    slug: 'champions_league'
                }
                match.round = rounds[match.round] ? rounds[match.round] : match.round

                match.home_team = {
                    id: match.home_id,
                    name: match.home_name,
                    slug: home_slug,
                }
                match.visitor_team = {
                    id: match.away_id,
                    name: match.away_name,
                    slug: visitor_slug,
                }
                // events[id] = match
                updates['/events_new2/' + id] = match
            }

            admin.database().ref().update(updates).then((snapshot) => {
                console.log('Successfully updated firebase database with new events')
                // console.log(slugify1.slugify('F.C Zurich'))
            }).catch((error) => {
                console.log('Firebase error: ', error)
            })
        })).catch(error => {
            console.log('Livescore error: ', error)
        })
        res.send('GET request succeeded!')
    } catch(error) {
        console.log(error)
        res.send('GET request failed...')
    }
})