// const connect = require('connect'), 
const express = require('express'),
    // http = require('http'),
    // https = require('https'),
    // url = require('url');
    // bodyParser = require('body-parser');
    // axios = require('axios');
    request = require('request'),
    firebase = require('firebase');
    // require('firebase/auth'),
    // require('firebase/database');

const app = express();

// Initialize Firebase for the application
var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID
};

firebase.initializeApp(config); 

module.exports = app.use(function (req, res, next) {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    const randomNumber = getRandomInt(10);
    console.log(randomNumber);
    let live_events = '';
    try {
        firebase.database().ref('/events_new/').orderByChild('status').equalTo('live').once('value', function (snapshot) {
            const eventsArray = [];
            for (const key in snapshot.val()) {
                eventsArray.push({ ...snapshot.val()[key]});
            }
            console.log(eventsArray);
            eventsArray.forEach((event) => {
                console.log(event);
                const eventData = {
                    id: event.id,
                    localteam_name: event.localteam_name,
                    localteam_score: randomNumber > 6 ? event.localteam_score + 1 : event.localteam_score,
                    visitorteam_name: event.visitorteam_name,
                    visitorteam_score: randomNumber <= 6 ? event.visitorteam_score + 1 : event.visitorteam_score,
                    status: 'live'
                }
                console.log(eventData);
                updates = {};
                updates['/events_new/' + event.id] = eventData;
                firebase.database().ref().update(updates);
            })
        });
        res.send('GET request succeeded!');
    } catch(error) {
        console.log(error);
        res.send('GET request failed...');
    }
});