const express = require('express'),
      moment = require('moment'),
      axios = require('axios'),
      admin = require('firebase-admin')

const app = express();

// Fetch all events that are about to start
const today = moment().format('YYYY-MM-DD');
const yesterday = moment().subtract(1, 'days').unix().toString();
console.log('today: ', today);
console.log('yesterday: ', yesterday);

// To be run every day
module.exports = app.use(async function (req, res, next) {
    try {
        // 1) Fetch all events that are older than 2 days
        // const snapshot = await admin.database().ref('events_new2').orderByChild('timestamp').startAt('1').endAt('1538231400').once('value');
        const snapshot = await admin.database().ref('events_new2').orderByChild('timestamp').startAt('1').endAt(yesterday.toString()).once('value');
        // console.log('snapshot: ', snapshot);
        const response = Object.assign({}, snapshot.val());
        // console.log('response: ', response);


        // 2) Add those events to the events_old node
        let updates = {};
        for (let event in response) {
            console.log('event: ', event);
            // console.log(response[event]);
            updates['/events_old/' + event] = response[event];
            // Remove those events from events node:
            updates['/events_new2/' + event] = null;
        }
        
        admin.database().ref().update(updates).then((snapshot) => {
            console.log('Successfully remove old events from database');
        }).catch((error) => {
            console.log('Firebase error: ', error);
        })
        res.send('GET request succeeded!');
    } catch(error) {
        console.log(error);
        res.send('GET request failed...');
    }
})