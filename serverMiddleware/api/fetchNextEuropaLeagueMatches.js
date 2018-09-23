const express = require('express'),
      moment = require('moment'),
      axios = require('axios'),
      admin = require('firebase-admin')
      // slugify1 = require('../helpers/slugify')
      slugifyFunction = require('../../helpers/slugify');

const app = express();


function getEuropaLeagueGroupAMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=OcregGOthrL9mbll&secret=QypmqmYAOLUmrWrf8SuoziSQKDZ6PksF&league=236'
    return axios.get(url)
}

function getEuropaLeagueGroupBMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=OcregGOthrL9mbll&secret=QypmqmYAOLUmrWrf8SuoziSQKDZ6PksF&league=237'
    return axios.get(url)
}

function getEuropaLeagueGroupCMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=OcregGOthrL9mbll&secret=QypmqmYAOLUmrWrf8SuoziSQKDZ6PksF&league=238'
    return axios.get(url)
}

function getEuropaLeagueGroupDMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=OcregGOthrL9mbll&secret=QypmqmYAOLUmrWrf8SuoziSQKDZ6PksF&league=239'
    return axios.get(url)
}

function getEuropaLeagueGroupEMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=OcregGOthrL9mbll&secret=QypmqmYAOLUmrWrf8SuoziSQKDZ6PksF&league=240'
    return axios.get(url)
}

function getEuropaLeagueGroupFMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=OcregGOthrL9mbll&secret=QypmqmYAOLUmrWrf8SuoziSQKDZ6PksF&league=241'
    return axios.get(url)
}

function getEuropaLeagueGroupGMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=OcregGOthrL9mbll&secret=QypmqmYAOLUmrWrf8SuoziSQKDZ6PksF&league=242'
    return axios.get(url)
}

function getEuropaLeagueGroupHMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=OcregGOthrL9mbll&secret=QypmqmYAOLUmrWrf8SuoziSQKDZ6PksF&league=243'
    return axios.get(url)
}

function getEuropaLeagueGroupIMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=OcregGOthrL9mbll&secret=QypmqmYAOLUmrWrf8SuoziSQKDZ6PksF&league=244'
    return axios.get(url)
}


function getEuropaLeagueGroupJMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=OcregGOthrL9mbll&secret=QypmqmYAOLUmrWrf8SuoziSQKDZ6PksF&league=245'
    return axios.get(url)
}


function getEuropaLeagueGroupKMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=hPPVj3bOcU4MTC6a&secret=EUl5JwsFuxpgkjnB9dwshHgtClgwXnHB&league=246'
    return axios.get(url)
}


function getEuropaLeagueGroupLMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=hPPVj3bOcU4MTC6a&secret=EUl5JwsFuxpgkjnB9dwshHgtClgwXnHB&league=247'
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
        axios.all([getEuropaLeagueGroupAMatches(), getEuropaLeagueGroupBMatches(), getEuropaLeagueGroupCMatches(), getEuropaLeagueGroupDMatches(), getEuropaLeagueGroupEMatches(), getEuropaLeagueGroupFMatches(), getEuropaLeagueGroupGMatches(), getEuropaLeagueGroupHMatches(), getEuropaLeagueGroupIMatches(), getEuropaLeagueGroupJMatches(), getEuropaLeagueGroupKMatches(), getEuropaLeagueGroupLMatches()]).then(axios.spread(function (groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH, groupI, groupJ, groupK, groupL) {

            let matches = groupA.data.data.fixtures.concat(groupB.data.data.fixtures).concat(groupC.data.data.fixtures).concat(groupD.data.data.fixtures).concat(groupE.data.data.fixtures).concat(groupF.data.data.fixtures).concat(groupG.data.data.fixtures).concat(groupH.data.data.fixtures).concat(groupI.data.data.fixtures).concat(groupJ.data.data.fixtures).concat(groupK.data.data.fixtures).concat(groupL.data.data.fixtures)
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
                match.timestamp = moment(date_time).format('X')

                match.competition = {
                    id: match.league_id,
                    name: 'Europa League',
                    slug: 'europa_league'
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