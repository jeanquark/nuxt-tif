const express = require('express'),
      moment = require('moment'),
      axios = require('axios'),
      admin = require('firebase-admin')
      slugify = require('../helpers/slugify2');

const app = express();


function getEuropaLeagueGroupAMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=hPPVj3bOcU4MTC6a&secret=EUl5JwsFuxpgkjnB9dwshHgtClgwXnHB&league=236'
    return axios.get(url)
}

function getEuropaLeagueGroupBMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=hPPVj3bOcU4MTC6a&secret=EUl5JwsFuxpgkjnB9dwshHgtClgwXnHB&league=237'
    return axios.get(url)
}

function getEuropaLeagueGroupCMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=hPPVj3bOcU4MTC6a&secret=EUl5JwsFuxpgkjnB9dwshHgtClgwXnHB&league=238'
    return axios.get(url)
}

function getEuropaLeagueGroupDMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=hPPVj3bOcU4MTC6a&secret=EUl5JwsFuxpgkjnB9dwshHgtClgwXnHB&league=239'
    return axios.get(url)
}

function getEuropaLeagueGroupEMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=hPPVj3bOcU4MTC6a&secret=EUl5JwsFuxpgkjnB9dwshHgtClgwXnHB&league=240'
    return axios.get(url)
}

function getEuropaLeagueGroupFMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=hPPVj3bOcU4MTC6a&secret=EUl5JwsFuxpgkjnB9dwshHgtClgwXnHB&league=241'
    return axios.get(url)
}

function getEuropaLeagueGroupGMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=hPPVj3bOcU4MTC6a&secret=EUl5JwsFuxpgkjnB9dwshHgtClgwXnHB&league=242'
    return axios.get(url)
}

function getEuropaLeagueGroupHMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=hPPVj3bOcU4MTC6a&secret=EUl5JwsFuxpgkjnB9dwshHgtClgwXnHB&league=243'
    return axios.get(url)
}

function getEuropaLeagueGroupIMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=hPPVj3bOcU4MTC6a&secret=EUl5JwsFuxpgkjnB9dwshHgtClgwXnHB&league=244'
    return axios.get(url)
}

function getEuropaLeagueGroupJMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=hPPVj3bOcU4MTC6a&secret=EUl5JwsFuxpgkjnB9dwshHgtClgwXnHB&league=245'
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

module.exports = app.use(function (req, res, next) {
    try {
        axios.all([getEuropaLeagueGroupAMatches(), getEuropaLeagueGroupBMatches(), getEuropaLeagueGroupCMatches(), getEuropaLeagueGroupDMatches(), getEuropaLeagueGroupEMatches(), getEuropaLeagueGroupFMatches(), getEuropaLeagueGroupGMatches(), getEuropaLeagueGroupHMatches(), getEuropaLeagueGroupIMatches(), getEuropaLeagueGroupJMatches(), getEuropaLeagueGroupKMatches(), getEuropaLeagueGroupLMatches()]).then(axios.spread(function (groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH, groupI, groupJ, groupK, groupL) {

            let matches = groupA.data.data.fixtures.concat(groupB.data.data.fixtures).concat(groupC.data.data.fixtures).concat(groupD.data.data.fixtures).concat(groupE.data.data.fixtures).concat(groupF.data.data.fixtures).concat(groupG.data.data.fixtures).concat(groupH.data.data.fixtures.concat(groupI.data.data.fixtures).concat(groupJ.data.data.fixtures).concat(groupK.data.data.fixtures).concat(groupL.data.data.fixtures))
            let events = {}
            let updates = {}
            for (let match of matches) {
                // console.log('Match: ', match)
                const home_slug = slugify.slugify2(match.home_name)
                const visitor_slug = slugify.slugify2(match.away_name)
                const id = match.date + '_' + home_slug + '_vs_' + visitor_slug
                const date_time = match.date + ' ' + match.time
                match.timestamp = moment(date_time).format('X')

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
            }).catch((error) => {
                console.log(error)
            })
        }))
        res.send('GET request succeeded!')
    } catch(error) {
        console.log(error)
        res.send('GET request failed...')
    }
})