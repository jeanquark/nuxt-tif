const express = require('express'),
      moment = require('moment'),
      axios = require('axios'),
      admin = require('firebase-admin');

const app = express();

// Initialize Firebase for the application

module.exports = app.use(function (req, res, next) {
    try {
        const startDate = moment().subtract(3, 'days').format('YYYY-MM-DD')
        console.log('startDate: ', startDate)
        const endDate = moment().add(7, 'days').format('YYYY-MM-DD')
        console.log('endDate: ', endDate)
        const url = 'https://api.football-data.org/v2/matches?dateFrom=' + startDate + '&&dateTo=' + endDate
        console.log('url: ', url)
        // return

        axios.get(url, {
            headers: {'X-Auth-Token': '3b3cd98fb2c441c9a9dff5a212a9e5f3'}
        }).then((response) => {
            // console.log('response: ', response)
            // let orderedEvents = response.data.matches.sort(function(a, b) { return moment(b.utcDate).format('X') - moment(a.utcDate).format('X') })
            // console.log('ordered events: ', orderedEvents)

            let events = {}
            let unOrderedEvents = []

            for (let match of response.data.matches) {
                // console.log('Match: ', match)
                const date = moment(match.utcDate).format('YYYY-MM-DD')
                // const date = moment(match.utcDate).format('X')
                match['date'] = moment(match.utcDate).format('X')
                const id = match.homeTeam.id + '_vs_' + match.awayTeam.id + '_on_' + date
                // const id = date + '_' + match.homeTeam.id + '_vs_' + match.awayTeam.id
                // events[id] = match
                match['api_id'] = match.id
                match['tif_id'] = id
                // events.push(match)
                // unOrderedEvents.push(match)
                events[id] = match
            }

            // let orderedEvents = unOrderedEvents.sort(function(a, b) { return b.date - a.date })
            // console.log('events: ', events)

            // const events = orderedEvents.reduce((ac, p) => ({...ac, [p.tif_id]: p }), {} )
            // console.log('events: ', events)

            // let events = {}
            // for ( let i = 0; i < orderedEvents.length; i++ ) {
            //     const p = orderedEvents[i]
            //     events[ p.tif_id ] = p
            // }
            
            // let events = {}
            // let obj = {}
            // for (let match2 of orderedEvents) {
            //     const id = match2['tif_id']
            //     let abc = {}
            //     abc[id] = match2
            //     // match2['id'] = id
            //     // obj[id] = match2
            //     events.push(abc)
            // }
            // events.push(obj)
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