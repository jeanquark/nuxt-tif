const express = require('express'),
      moment = require('moment'),
      axios = require('axios'),
      admin = require('firebase-admin')
      slugifyFunction = require('../../helpers/slugify'),
      env = require('dotenv').config();

const app = express();

// console.log('Livescore API key: ', process.env.API_LIVESCORE_KEY)

// To be run every hour
module.exports = app.use(async function (req, res, next) {
    try {
        const leaguesArray = ['25', '74', '114', '73', '46', '12', '139', '86', '9', '174', '175', '176', '177', '232', '233', '234', '235']

        const url = 'http://livescore-api.com/api-client/scores/live.json?key=OcregGOthrL9mbll&secret=QypmqmYAOLUmrWrf8SuoziSQKDZ6PksF'
        axios.get(url).then((response) => {
            // console.log('response: ', response)
            const today = moment().format('YYYY-MM-DD')
            const matches = response.data.data.match
            // console.log('events: ', events)
            // console.log('today: ', today)
            let updates = {}

            for (let match of matches) {
                // console.log('match: ', match)
                if (leaguesArray.includes(match.league_id)) {
                    const id = today + '_' + match.home_id + '_vs_' + match.away_id

                    updates['/events_new2/' + id + '/livescore_api_id'] = match.id
                    updates['/events_new2/' + id + '/score'] = match.score
                    updates['/events_new2/' + id + '/ht_score'] = match.ht_score
                    updates['/events_new2/' + id + '/ft_score'] = match.ft_score
                    updates['/events_new2/' + id + '/et_score'] = match.et_score
                    updates['/events_new2/' + id + '/time'] = match.time
                    updates['/events_new2/' + id + '/status'] = match.status
                    updates['/events_new2/' + id + '/last_changed'] = match.last_changed
                }
            }
            // console.log('updates: ', updates)
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