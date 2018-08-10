const connect = require('connect'),
      express = require('express'),
      http = require('http'),
      url = require('url'),
      bodyParser = require('body-parser'),
      moment = require('moment'),
      admin = require('firebase-admin');

// const app = connect();
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

function buildUserObject (payload) {
    let user = {}
    user.id = payload.id,
    user.email = payload.email,
    user.username = payload.username ? payload.username : '',
    user.country = {
        name: payload.country.name ? payload.country.name : '',
        slug: payload.country.slug ? payload.country.slug : ''
    },
    user.language = {
        name: payload.language.name ? payload.language.name : '',
        slug: payload.language.slug ? payload.language.slug : ''
    },
    user.level = {
        value: 1,
        updated_at: moment().unix()
    },
    user.tokens = {
        value: 10,
        udpated_at: moment().unix()
    },
    user.status = {
        value: 'user',
        updated_at: moment().unix()
    },
    user._created_at = moment().unix(),
    user._updated_at = moment().unix()
    return user
}

function buildUserObjectOAuth (payload) {
    let user = {}
    user.id = payload.uid,
    user.email = payload.email,
    user.username = '',
    user.country = {
        name: '',
        slug: ''
    },
    user.language = {
        name: '',
        slug: ''
    },
    user.level = {
        value: 1,
        updated_at: moment().unix()
    },
    user.tokens = {
        value: 10,
        udpated_at: moment().unix()
    },
    user.status = {
        value: 'user',
        updated_at: moment().unix()
    },
    user._created_at = moment().unix(),
    user._updated_at = moment().unix()
    return user
}

module.exports = app.use(function (req, res, next) {
    try {
        console.log('REGISTER NEW USER');
        console.log('req.body.type: ', req.body.type);
        console.log('req.body.data: ', req.body.data);

        let newUser = {};
        if (req.body && req.body.data && req.body.type === 'oauth') {
            newUser = buildUserObjectOAuth(req.body.data);
        } else if (req.body && req.body.data && req.body.type === 'form') {
            newUser = buildUserObject(req.body.data);
        }
        console.log('newUser: ', newUser);
        const userId = newUser.id;
        console.log('newUserId: ', userId);

        var db = admin.database();
        var ref = db.ref('users');
        var usersRef = ref.child(userId);

        usersRef.set(newUser, function(error) {
            if (error) {
                console.log('User could not be registered.' + error);
            } else {
                console.log('User was registered successfully.');
            }
        });
        
        // res.end('Hello from RegisterNewUser!\n');
        // res.end('Successfully registered new user');
        res.send(newUser);
        // next();
    } 
    catch (error) {
        // res.end('Server error');
        res.status(500).send('Server error, user could not be registered. ' + error);
    }
});