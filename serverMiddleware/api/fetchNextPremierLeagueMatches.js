const express = require('express'),
      moment = require('moment'),
      axios = require('axios'),
      admin = require('firebase-admin')
      slugifyFunction = require('../../helpers/slugify');

const app = express();


function getPremierLeagueMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=OcregGOthrL9mbll&secret=QypmqmYAOLUmrWrf8SuoziSQKDZ6PksF&league=25'
    return axios.get(url)
}

function getLaLigaMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=OcregGOthrL9mbll&secret=QypmqmYAOLUmrWrf8SuoziSQKDZ6PksF&league=74'
    return axios.get(url)
}

function getBundesligaMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=OcregGOthrL9mbll&secret=QypmqmYAOLUmrWrf8SuoziSQKDZ6PksF&league=114'
    return axios.get(url)
}

function getSerieAMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=OcregGOthrL9mbll&secret=QypmqmYAOLUmrWrf8SuoziSQKDZ6PksF&league=73'
    return axios.get(url)
}

function getLigue1Matches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=OcregGOthrL9mbll&secret=QypmqmYAOLUmrWrf8SuoziSQKDZ6PksF&league=46'
    return axios.get(url)
}

function getSuperLeagueMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=OcregGOthrL9mbll&secret=QypmqmYAOLUmrWrf8SuoziSQKDZ6PksF&league=12'
    return axios.get(url)
}

function getGreekSuperLeagueMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=OcregGOthrL9mbll&secret=QypmqmYAOLUmrWrf8SuoziSQKDZ6PksF&league=139'
    return axios.get(url)
}

function getIsraelianLeagueMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=OcregGOthrL9mbll&secret=QypmqmYAOLUmrWrf8SuoziSQKDZ6PksF&league=86'
    return axios.get(url)
}

function getSwedishLeagueMatches () {
    const url = 'http://livescore-api.com/api-client/fixtures/matches.json?key=OcregGOthrL9mbll&secret=QypmqmYAOLUmrWrf8SuoziSQKDZ6PksF&league=9'
    return axios.get(url)
}

module.exports = app.use(function (req, res, next) {
    try {
        axios.all([getPremierLeagueMatches(), getLaLigaMatches(), getBundesligaMatches(), getSerieAMatches(), getLigue1Matches(), getSuperLeagueMatches(), getGreekSuperLeagueMatches(), getIsraelianLeagueMatches()]).then(axios.spread(function (premierLeague, laLiga, bundesliga, seriea, ligue1, superLeague, greekSuperLeague, israelianLeague) {
            // console.log('premierLeague: ', premierLeague.data.data.fixtures)
            // console.log('superLeague: ', superLeague.data.data.fixtures)
            let matches = premierLeague.data.data.fixtures.concat(laLiga.data.data.fixtures).concat(bundesliga.data.data.fixtures).concat(seriea.data.data.fixtures).concat(ligue1.data.data.fixtures).concat(superLeague.data.data.fixtures).concat(greekSuperLeague.data.data.fixtures).concat(israelianLeague.data.data.fixtures)
            console.log('matches: ', matches)
            let events = {}
            let updates = {}
            for (let match of matches) {
                const home_slug = slugifyFunction.slugify(match.home_name)
                const visitor_slug = slugifyFunction.slugify(match.away_name)
                const date_time = match.date + ' ' + match.time
                const id = match.date + '_' + match.home_id + '_vs_' + match.away_id

                updates['/events_new2/' + id + '/id'] = id
                updates['/events_new2/' + id + '/livescore_api_id'] = match.id
                updates['/events_new2/' + id + '/date'] = match.date
                updates['/events_new2/' + id + '/time'] = match.time
                updates['/events_new2/' + id + '/timestamp'] = moment(date_time).utc().format('X')
                updates['/events_new2/' + id + '/league_id'] = match.league_id
                updates['/events_new2/' + id + '/location'] = match.location
                updates['/events_new2/' + id + '/round'] = match.round
                updates['/events_new2/' + id + '/home_team'] = {
                    id: match.home_id,
                    name: match.home_name,
                    slug: home_slug,
                }
                updates['/events_new2/' + id + '/visitor_team'] = {
                    id: match.away_id,
                    name: match.away_name,
                    slug: visitor_slug,
                }


                // // console.log('Match: ', match)
                // const home_slug = slugifyFunction.slugify(match.home_name)
                // // console.log('home_slug: ', home_slug)
                // const visitor_slug = slugifyFunction.slugify(match.away_name)
                // const id = match.date + '_' + home_slug + '_vs_' + visitor_slug
                // const date_time = match.date + ' ' + match.time
                // match.timestamp = moment(date_time).format('X')
                // match.livescore_api_id = match.id
                // match.id = id

                // match.home_team = {
                //     id: match.home_id,
                //     name: match.home_name,
                //     slug: home_slug,
                // }
                // match.visitor_team = {
                //     id: match.away_id,
                //     name: match.away_name,
                //     slug: visitor_slug,
                // }
                // // events[id] = match
                // updates['/events_new2/' + id] = match
            }

            admin.database().ref().update(updates).then((snapshot) => {
                // console.log('slugify: ', slugify.slugify2('Liverpool F.C'))
                // console.log('slugify: ', slugify.slugify2('F.C Zurich'))
                console.log('Successfully updated firebase database with new events')
            }).catch((error) => {
                console.log('Firebase error: ', error)
            })
        })).catch(error => {
            console.log('Livescore error: ', error)
        })
        res.send('GET request succeeded!')
    } catch(error) {
        console.log(error);
        res.send('GET request failed...')
    }
})