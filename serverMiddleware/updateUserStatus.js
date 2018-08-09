const connect = require('connect'),
      express = require('express'),
      http = require('http'),
      url = require('url'),
      bodyParser = require('body-parser'),
      admin = require('firebase-admin');

// const app = connect();
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

module.exports = app.use(function (req, res, next) {
    console.log('UPDATE USER STATUS');
    const userId = req.body.userId;
    const status = req.body.status;

    console.log('userId: ', userId);
    console.log('status: ', status);
    // const userEmail = req.body.userEmail;
    var db = admin.database();
    var ref = db.ref('users');
    var usersRef = ref.child(userId + '/status');
    usersRef.update({status}, function(error) {
        if (error) {
            console.log("User status could not be updated." + error);
        } else {
            console.log("User status successfully updated.");
        }
    });
    
    res.end('Hello from Connect!\n');
});