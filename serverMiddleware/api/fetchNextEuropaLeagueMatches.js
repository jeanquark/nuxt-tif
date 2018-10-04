const express = require('express'),
      moment = require('moment'),
      axios = require('axios'),
      admin = require('firebase-admin'),
      slugifyFunction = require('../../helpers/slugify'),
      getRoundData = require('../../helpers/api/rounds'),
      getLeagueData = require('../../helpers/api/leagues'),
      getTeamData = require('../../helpers/api/teams'),
      env = require('dotenv').config();

const app = express();
const api_key = process.env.LIVESCORE_API_KEY
const api_secret = process.env.LIVESCORE_API_SECRET

function getEuropaLeagueGroupAMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=' + api_key + '&secret=' + api_secret + '&league=236'
    return axios.get(url)
}

function getEuropaLeagueGroupBMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=' + api_key + '&secret=' + api_secret + '&league=237'
    return axios.get(url)
}

function getEuropaLeagueGroupCMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=' + api_key + '&secret=' + api_secret + '&league=238'
    return axios.get(url)
}

function getEuropaLeagueGroupDMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=' + api_key + '&secret=' +api_secret + '&league=239'
    return axios.get(url)
}

function getEuropaLeagueGroupEMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=' + api_key + '&secret=' +api_secret + '&league=240'
    return axios.get(url)
}

function getEuropaLeagueGroupFMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=' + api_key + '&secret=' +api_secret + '&league=241'
    return axios.get(url)
}

function getEuropaLeagueGroupGMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=' + api_key + '&secret=' +api_secret + '&league=242'
    return axios.get(url)
}

function getEuropaLeagueGroupHMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=' + api_key + '&secret=' +api_secret + '&league=243'
    return axios.get(url)
}

function getEuropaLeagueGroupIMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=' + api_key + '&secret=' +api_secret + '&league=244'
    return axios.get(url)
}

function getEuropaLeagueGroupJMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=' + api_key + '&secret=' +api_secret + '&league=245'
    return axios.get(url)
}

function getEuropaLeagueGroupKMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=' + api_key + '&secret=' + api_secret + '&league=246'
    return axios.get(url)
}

function getEuropaLeagueGroupLMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=' + api_key + '&secret=' + api_secret + '&league=247'
    return axios.get(url)
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
                const date_time = match.date + ' ' + match.time
                const leagueData = getLeagueData.league(parseInt(match.league_id)) ? getLeagueData.league(parseInt(match.league_id)) : {id: match.league_id}
                const homeTeamData = getTeamData.team(parseInt(match.home_id)) ? getTeamData.team(parseInt(match.home_id)) : {id: match.home_id, name: match.home_name, slug: slugifyFunction.slugify(match.home_name)}
                const visitorTeamData = getTeamData.team(parseInt(match.away_id)) ? getTeamData.team(parseInt(match.away_id)) : {id: match.away_id, name: match.away_name, slug: slugifyFunction.slugify(match.away_name)}
                const roundData = getRoundData.round(match.round) ? getRoundData.round(match.round) : match.round

                const id = match.date + '_' + match.home_id + '_vs_' + match.away_id

                updates['/events_new2/' + id + '/id'] = id
                updates['/events_new2/' + id + '/livescore_api_id'] = match.id
                updates['/events_new2/' + id + '/date'] = match.date
                updates['/events_new2/' + id + '/time'] = match.time
                updates['/events_new2/' + id + '/timestamp'] = moment(date_time).utc().format('X')
                updates['/events_new2/' + id + '/competition'] = leagueData
                updates['/events_new2/' + id + '/location'] = match.location
                updates['/events_new2/' + id + '/round'] = roundData
                updates['/events_new2/' + id + '/home_team'] = homeTeamData
                updates['/events_new2/' + id + '/visitor_team'] = visitorTeamData
            }

            admin.database().ref().update(updates).then((snapshot) => {
                console.log('Successfully updated firebase database with new events')
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