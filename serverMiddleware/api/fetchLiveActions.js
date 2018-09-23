const express = require('express'),
      moment = require('moment'),
      axios = require('axios'),
      admin = require('firebase-admin')
      slugifyFunction = require('../../helpers/slugify');

const app = express();

// Fetch all events that are about to start
// const today = moment().subtract(1, 'day').format('YYYY-MM-DD');
const today = moment().format('YYYY-MM-DD');
console.log('today: ', today);
// const startTime = moment().utc().unix();
// const endTime = moment().add(3, 'hours').unix();
// console.log('startTime: ', startTime)
// console.log('endTime: ', endTime)

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
        const todayMatches = await admin.database().ref('/events_new2').orderByChild('date').equalTo(today).once('value').then((snapshot) => {
            const matchesArray = []
            for (const key in snapshot.val()) {
                console.log('snapshot.val()[key]: ', snapshot.val()[key])
                if (snapshot.val()[key].status === 'IN PLAY') {
                    matchesArray.push({...snapshot.val()[key]})
                }
            }
            return matchesArray
        })
        console.log('todayMatches: ', todayMatches)
        console.log('todayMatches length: ', todayMatches.length)

        for (match of todayMatches) {
            console.log('match id: ', match.id)
            console.log('match livescore_api_id: ', match.livescore_api_id)
            const id = today + '_' + match.home_team.id + '_vs_' + match.visitor_team.id
            console.log('id: ', id)

            let url = 'http://livescore-api.com/api-client/scores/events.json?key=OcregGOthrL9mbll&secret=QypmqmYAOLUmrWrf8SuoziSQKDZ6PksF&id=' + match.id

            axios.get(url).then((response) => {
                // console.log('response: ', response)
                const events = response.data.data.event
                // console.log('events: ', events)
                let updates = {}

                for (let event of events) {
                    // console.log('event: ', event)
                    updates['/events_new2/' + id + '/events/' + event.id + '/player'] = event.player
                    updates['/events_new2/' + id + '/events/' + event.id + '/time'] = event.time
                    updates['/events_new2/' + id + '/events/' + event.id + '/event'] = event.event
                    updates['/events_new2/' + id + '/events/' + event.id + '/sort'] = event.sort
                    updates['/events_new2/' + id + '/events/' + event.id + '/home_away'] = event.home_away
                }
                console.log('updates: ', updates)
                admin.database().ref().update(updates).then((snapshot) => {
                    console.log('Successfully updated firebase database with new events')
                }).catch((error) => {
                    console.log(error)
                })
            })
        }
        res.send('GET request succeeded!')
    } catch(error) {
        console.log(error)
        res.send('GET request failed...')
    }
})