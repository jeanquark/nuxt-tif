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
    console.log('UPDATE USER LEVEL');
    const userId = req.body.userId;
    const level = req.body.level;

    console.log('userId: ', userId);
    console.log('level: ', level);
    // const userEmail = req.body.userEmail;
    var db = admin.database();
    var ref = db.ref('users');
    var usersRef = ref.child(userId + '/level');
    usersRef.update({"value": level}, function(error) {
        if (error) {
            console.log("User level could not be updated." + error);
        } else {
            console.log("User level successfully updated.");
        }
    });
    
    res.end('Hello from Connect!\n');
});