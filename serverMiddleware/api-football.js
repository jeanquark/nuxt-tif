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
        firebase.database().ref('/events_live/lausanne_sport_vs_neuchatel_xamax').once('value').then(function(snapshot) {
            console.log(snapshot.val());
            live_events = snapshot.val();
            console.log(live_events);
            const payload = {
                localteam_name: 'Lausanne-Sport',
                localteam_score: randomNumber > 6 ? live_events.localteam_score + 1 : live_events.localteam_score,
                visitorteam_name: 'Neuchâtel Xamax',
                visitorteam_score: randomNumber <= 6 ? live_events.visitorteam_score + 1 : live_events.visitorteam_score
            }
            console.log(payload);
            updates = {};
            updates['/events_live/lausanne_sport_vs_neuchatel_xamax'] = payload;
            firebase.database().ref().update(updates);
        });
        res.send('GET request succeeded!');
    } catch(error) {
        console.log(error);
        res.send('GET request failed...');
    }
});