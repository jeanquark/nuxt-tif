const express = require('express'),
      admin = require('firebase-admin'),
      cookieParser = require('cookie-parser')();

const app = express();
global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

// module.exports = function (req, res, next) {
module.exports = app.use(function (req, res, next) {
    console.log('AUTH ADMIN');
    getIdTokenFromRequest(req, res).then(idToken => {
        console.log('idToken:');
        console.log(idToken);
        if (idToken) {
            admin.auth().verifyIdToken(idToken).then(decodedIdToken => {
                if (decodedIdToken.admin != true) {
                    console.log('User 2 does not have admin privileges');
                    res.redirect('/');
                    // res.end('Unauthorized');
                    // res.end();
                } else {
                    console.log('User 2 has admin privileges');
                    next();
                }
            }).catch(error => {
                console.log('Error while verifying Firebase ID token:', error)
            })
        } else {
            res.redirect('/');
            // res.end();
        }
    });
// }
});

function getIdTokenFromRequest(req, res) {
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
        console.log('Found "Authorization" header');
        // Read the ID Token from the Authorization header.
        return Promise.resolve(req.headers.authorization.split('Bearer ')[1]);
    } else {
        console.log('No Authorization header found');
    }
    return new Promise(function(resolve) {
        cookieParser(req, res, () => {
            if (req.cookies && req.cookies.__session) {
                console.log('Found "__session" cookie');
                // Read the ID Token from cookie.
                resolve(req.cookies.__session);
            } else {
                resolve();
            }
        });
    });
}