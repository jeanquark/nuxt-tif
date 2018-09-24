const express = require('express'),
      moment = require('moment'),
      axios = require('axios'),
      admin = require('firebase-admin');

const app = express();

module.exports = app.use(function (req, res, next) {
    try {
        const url = 'http://livescore-api.com/api-client/scores/live.json?key=hPPVj3bOcU4MTC6a&secret=EUl5JwsFuxpgkjnB9dwshHgtClgwXnHB'
        console.log('url: ', url)

        axios.get(url).then((response) => {
            // console.log('response: ', response)
            // console.log('response.data: ', response.data)
            // console.log('response.data.data: ', response.data.data)
            console.log('response.data.data.match: ', response.data.data.match)

            let events = {}

            for (let match of response.data.data.match) {
                console.log('Match: ', match)
                const date = moment(match.added).format('YYYY-MM-DD')
                const id = match.home_id + '_vs_' + match.away_id + '_on_' + date
                events[id] = match
            }

            let updates = {}
            updates['/events_new2/'] = events

            admin.database().ref().update(updates).then((snapshot) => {
                this.loading = false
                console.log('snapshot', snapshot)
                console.log('Successfully updated firebase database with new events')
            }).catch((error) => {
                console.log(error)
            })
        }).catch(error => {
            console.log(error)
        })
        res.send('GET request succeeded!');
    } catch(error) {
        console.log(error);
        res.send('GET request failed...');
    }
});