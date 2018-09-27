const express = require('express'),
      moment = require('moment'),
      axios = require('axios'),
      admin = require('firebase-admin');

const app = express();


function getPremierLeagueMatches () {
    const url = 'http://livescore-api.com/api-client/scores/live.json?key=hPPVj3bOcU4MTC6a&secret=EUl5JwsFuxpgkjnB9dwshHgtClgwXnHB&league=25'
    return axios.get(url)
}

function getLaLigaMatches () {
    const url = 'http://livescore-api.com/api-client/scores/live.json?key=hPPVj3bOcU4MTC6a&secret=EUl5JwsFuxpgkjnB9dwshHgtClgwXnHB&league=74'
    return axios.get(url)
}

function getBundesligaMatches () {
    const url = 'http://livescore-api.com/api-client/scores/live.json?key=hPPVj3bOcU4MTC6a&secret=EUl5JwsFuxpgkjnB9dwshHgtClgwXnHB&league=114'
    return axios.get(url)
}

function getSerieAMatches () {
    const url = 'http://livescore-api.com/api-client/scores/live.json?key=hPPVj3bOcU4MTC6a&secret=EUl5JwsFuxpgkjnB9dwshHgtClgwXnHB&league=73'
    return axios.get(url)
}

function getLigue1Matches () {
    const url = 'http://livescore-api.com/api-client/scores/live.json?key=hPPVj3bOcU4MTC6a&secret=EUl5JwsFuxpgkjnB9dwshHgtClgwXnHB&league=46'
    return axios.get(url)
}

function getSuperLeagueMatches () {
    const url = 'http://livescore-api.com/api-client/scores/live.json?key=hPPVj3bOcU4MTC6a&secret=EUl5JwsFuxpgkjnB9dwshHgtClgwXnHB&league=12'
    return axios.get(url)
}


module.exports = app.use(function (req, res, next) {
    try {
        axios.all([getPremierLeagueMatches(), getLaLigaMatches(), getBundesligaMatches(), getSerieAMatches(), getLigue1Matches() getSuperLeagueMatches()]).then(axios.spread(function (premierLeague, laLiga, bundesliga, seriea, ligue1, superLeague) {
            // console.log('premierLeague: ', premierLeague.data.data.match)
            // console.log('superLeague: ', superLeague.data.data.match)

            let matches = premierLeague.data.data.match.concat(laLiga.data.data.match).concat(bundesliga.data.data.match).concat(seriea.data.data.match).concat(ligue1.data.data.match).concat(superLeague.data.data.match)
            let events = {}
            let updates = {}
            let abc = {}
            const date = moment().format('YYYY-MM-DD')

            for (let match of matches) {
                // console.log('Match: ', match)
                const id = date + '_' + match.home_id + '_vs_' + match.away_id
                // abc.score = match.score
                // abc.ht_score = match.ht_score
                // abc.ft_score = match.ft_score
                // abc.et_score = match.et_score
                // abc.time = match.time
                // abc.status = match.status
                // abc.last_changed = match.last_changed

                updates['/events_new2/' + id + '/score'] = match.score
                updates['/events_new2/' + id + '/ht_score'] = match.ht_score
                updates['/events_new2/' + id + '/ft_score'] = match.ft_score
                updates['/events_new2/' + id + '/et_score'] = match.et_score
                updates['/events_new2/' + id + '/time'] = match.time
                updates['/events_new2/' + id + '/status'] = match.status
                updates['/events_new2/' + id + '/last_changed'] = match.last_changed
            }

            // let events = {
            //     '2018-09-16_20_vs_14/abc': 'abc',
            //     '2018-09-16_497_vs_8/abc': 'abc'
            // }
            // let updates = {}
            console.log('updates: ', updates)
            // updates['/events_new2/'] = events

            admin.database().ref().update(updates).then((snapshot) => {
                console.log('Successfully updated firebase database with new events')
            }).catch((error) => {
                console.log(error)
            })
        }))
        res.send('GET request succeeded!')
    } catch(error) {
        console.log(error);
        res.send('GET request failed...')
    }
})