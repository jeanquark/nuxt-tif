const admin = require('firebase-admin');
// const bodyParser = require('body-parser');

// module.exports = function (req, res, next) {
//   console.log('services/setUserCustomClaims');
//   next();
// }

// const connect = require('connect');
// const http = require('http');

// const app = connect();

// // gzip/deflate outgoing responses
// const compression = require('compression');
// app.use(compression());

// // parse urlencoded request bodies into req.body
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended: false}));


// module.exports = function (req, res, next) {
//     // Get the ID token passed.
//     console.log('SETUSERCUSTOMCLAIMS');
//     // console.log(req.headers);
//     // console.log(req.path);
//     // console.log(req.end);
//     // console.log(res);
//     // next();
//     // const userEmail = req.body.userEmail;
//     const userEmail = "test3@test.com";
//     console.log(userEmail);

//     admin.auth().getUserByEmail(userEmail).then((user) => {
// 	    // Add custom claims for additional privileges.
// 	    // This will be picked up by the user on token refresh or next sign in on new device.
// 	    // return admin.auth().setCustomUserClaims(user.uid, {
// 	    //   admin: true
// 	    // });
//     	return admin.auth().setCustomUserClaims(user.uid, null);
// 	}).catch((error) => {
// 	  	console.log(error);
// 	});
//     // // Verify the ID token and decode its payload.
//     // // admin.auth().verifyIdToken(idToken).then((claims) => {
//     // // admin.auth().getUserByEmail(userEmail).then((claims) => {
//     // admin.auth().getUserByEmail(userEmail).then((claims) => {
//     //     console.log(claims);
//     //     // Verify user is eligible for additional privileges.
//     //     // if (typeof claims.email !== 'undefined' &&
//     //     //     typeof claims.email_verified !== 'undefined' &&
//     //     //     claims.email_verified &&
//     //     //     claims.email.indexOf('@admin.example.com') != -1) {
//     //     // if (typeof claims.email !== 'undefined') {
//     //         // Add custom claims for additional privileges.
//     //         // admin.auth().setCustomUserClaims(claims.sub, {admin: true}).then(function() {
//     //     return admin.auth().setCustomUserClaims(claims.sub, {admin: true});
//     //     // return admin.auth().setCustomUserClaims(user.uid, null);
//     //     // } else {
//     //     //     // Return nothing.
//     //     //     res.end(JSON.stringify({status: 'ineligible'}));
//     //     //     next();
//     //     // }

//     // });
//     // admin.auth().getUserByEmail('test3@test.com').then((user2) => {
//     //     admin.auth().setCustomUserClaims(user2.uid, { admin: true});
//     // });
//     // next();
// }



// axios.post('/setCustomClaims', (req, res) => {
//   // Get the ID token passed.
//   const idToken = req.body.idToken;
//   // Verify the ID token and decode its payload.
//   admin.auth().verifyIdToken(idToken).then((claims) => {
//     // Verify user is eligible for additional privileges.
//     if (typeof claims.email !== 'undefined' &&
//         typeof claims.email_verified !== 'undefined' &&
//         claims.email_verified &&
//         claims.email.indexOf('@admin.example.com') != -1) {
//       // Add custom claims for additional privileges.
//       admin.auth().setCustomUserClaims(claims.sub, {
//         admin: true
//       }).then(function() {
//         // Tell client to refresh token on user.
//         res.end(JSON.stringify({
//           status: 'success'
//         });
//       });
//     } else {
//       // Return nothing.
//       res.end(JSON.stringify({status: 'ineligible'});
//     }
//   });
// });
// global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// const connect = require('connect');
// const app = connect();

// const express = require('express');
// const app = express();

// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended: false}));

// module.exports = function (req, res, next) {
//     console.log('SETCUSTOMCLAIMS');
//     // console.log(req.body);
//     // return 'abc';
//     // res.json({ it: 'works!' });
//     console.log(req.path);
//     // res.redirect("/");
//     // return;
//     next();
// }





// module.exports = function (req, res, next) {
//     console.log('SETCUSTOMCLAIMS');
//   	// getIdTokenFromRequest(req, res).then(idToken => {
//    //  	next();
//   	// });
// 	app.post('/setCustomClaims', (req, res) => {
// 		console.log(req);
// 	});

// 	app.get('/setCustomClaims', (req, res) => {
// 		console.log('abc');
// 		next();
// 	});
// 	// app.use('/setCustomClaims', function (req, res, next) {
// 	// 	// res.end('abc');
// 	// 	console.log('abc');
// 	// 	console.log(req);
// 	// 	// req is the Node.js http request object
// 	// 	// res is the Node.js http response object
// 	// 	// next is a function to call to invoke the next middleware
// 	// 	next();
// 	// })
// 	// next();
	
// }

// function getIdTokenFromRequest(req, res) {
// 	console.log('getIdTokenFromRequest');
// 	return new Promise(function(resolve) {
// 	   	resolve();  
// 	});  	
// }

// app.post('/setCustomClaims', function (req, res) {
//   	res.send('Hello World!');
// })

// app.use('/setCustomClaims', function (req, res, next) {
// 	// res.end('abc');
// 	console.log('abc');
// 	console.log(req);
// 	// req is the Node.js http request object
// 	// res is the Node.js http response object
// 	// next is a function to call to invoke the next middleware
// 	// next();
// });

const connect = require('connect'),
      express = require('express'),
      http = require('http'),
      url = require('url'),
      bodyParser = require('body-parser');

// const app = connect();
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

module.exports = app.use(function (req, res, next) {
    console.log('SETCUSTOMCLAIMS');
    // const query = url.parse(req.url,true).query;
    // console.log(query);
    console.log(req.body);
    // console.log(req.body.userEmail);
    const action = req.body.action;
    const userEmail = req.body.userEmail;
    // const uid = req.body.uid;
    // console.log(action);
    console.log('userEmail: ', userEmail);
    // console.log(uid);
    // res.send('user');

    if (action == 'userToAdmin') {
        console.log(action);
        // res.end('Hello from Connect!\n');
        admin.auth().getUserByEmail(userEmail).then((user) => {
        // admin.auth().getUser(uid).then((user) => {
            console.log(user);
            return admin.auth().setCustomUserClaims(user.uid, {
                admin: true
            }).then(() => {
                console.log('user: ', user);
                // res.send('user');
                console.log('USERTOADMIN');
                res.send(user);
                // res.end();
                // res.end();
            });
            // res.end();
            // next();
            // res.end('Hello from Connect!\n');
            // return user;
            // next();
            // res.end(user);
            // return user;
            // res.send({user: 'abc'});
            
        }).catch((error) => {
            console.log(error);
            // res.end({user2: 'user'})
            res.end();
        });
    }

    if (action == 'adminToUser') {
        console.log(action);
        return admin.auth().getUserByEmail(userEmail).then((user) => {
        // admin.auth().getUser(uid).then((user) => {
            console.log('user: ', user);
            return admin.auth().setCustomUserClaims(user.uid, null)
                .then(() => {
                    // res.send({'user': 'abc'});
                    console.log('ADMINTOUSER');
                    res.send(user);
                    // console.log(user);
                    // res.end();
                }).catch((error) => {
                    console.log(error);
                });
        }).catch((error) => {
            console.log(error);
        });
    }
    
    // res.end('Hello from Connect!\n');
});

// module.exports = {
//     abc: abc
// };


// module.exports = function(req, res, next) {
//     console.log('SETCUSTOMCLAIMS');
//     const query = url.parse(req.url,true).query;
//     console.log(query);
//     res.end('Hello from Connect!\n');
// }
