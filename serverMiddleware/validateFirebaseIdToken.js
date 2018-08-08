const moment = require('moment');
const admin = require('../services/firebase-admin-init.js');
const cookieParser = require('cookie-parser')();
global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

module.exports = function (req, res, next) {

    getIdTokenFromRequest(req, res).then(idToken => {
        if (idToken) {
            addDecodedIdTokenToRequest(idToken, req).then(() => {
                next();
            });
        } else {
            next();
        }
    });
}

function getIdTokenFromRequest(req, res) {
    console.log('CALL TO getIdTokenFromRequest METHOD', moment().format("DD-MM-YYYY HH:mm:ss"));
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
        console.log('Found "Authorization" header');
        // Read the ID Token from the Authorization header.
        return Promise.resolve(req.headers.authorization.split('Bearer ')[1]);
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

/**
 * Returns a Promise with the Decoded ID Token and adds it to req.user.
 */
function addDecodedIdTokenToRequest(idToken, req) {
    console.log('CALL TO addDecodedIdTokenToRequest METHOD', moment().format("DD-MM-YYYY HH:mm:ss"));
    return admin.auth().verifyIdToken(idToken).then(decodedIdToken => {
        
        if (decodedIdToken.admin != true) {
            console.log('User does not have admin privileges');
        } else {
            console.log('User has admin privileges');
        }
        // console.log('abc');

        // var uid = decodedIdToken.uid;
        // console.log('uid: ' + uid);

        // admin.auth().setCustomUserClaims(uid, {admin: true}).then(() => {
        // // The new custom claims will propagate to the user's ID token the
        // // next time a new one is issued.
        //     // Tell client to refresh token on user.
        //     res.end(JSON.stringify({
        //       status: 'success'
        //     });
        // });
        // console.log(process.env.PROJECT_ID);
        // console.log(process.env.ADMIN_EMAILS);

        // admin.auth().getUserByEmail('jm.kleger@gmail.com').then((user) => {
        //     // console.log(user);
        //     console.log('User is verified ?: ' + user.emailVerified);
        //     // Add custom claims for additional privileges.
        //     // This will be picked up by the user on token refresh or next sign in on new device.
        //     // return admin.auth().setCustomUserClaims(user.uid, null);
        //     return admin.auth().setCustomUserClaims(user.uid, {admin: true});
        // }).catch((error) => {
        //     console.log(error);
        // });


        console.log('ID Token correctly decoded', decodedIdToken);
        req.user = decodedIdToken;


        // admin.database().ref('/users/' + 'EaCQBRrmLYV6QPPS3JVY1jMMtV62').on('value', function (snapshot) {
        // // await admin.database().ref('/users/' + userId).on('value', function (snapshot) {
        //     commit('users/setLoadedUser', snapshot.val(), { root: true })
        // })
    }).catch(error => {
        console.error('Error while verifying Firebase ID token:', error);
    });
}