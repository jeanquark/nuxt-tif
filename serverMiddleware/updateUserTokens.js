const connect = require('connect'),
      express = require('express'),
      http = require('http'),
      url = require('url'),
      bodyParser = require('body-parser'),
      admin = require('firebase-admin');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

module.exports = app.use(function (req, res, next) {
    console.log('UPDATE USER TOKENS');
    const userId = req.body.userId;
    const user_tokens = req.body.user_tokens;
    const total_cost = req.body.total_cost;
    const new_tokens_amount = user_tokens - total_cost;

    console.log('userId: ', userId);
    console.log('user_tokens: ', user_tokens);
    console.log('total_cost: ', total_cost);
    console.log('new_tokens_amount: ', new_tokens_amount)

    var db = admin.database();
    var ref = db.ref('users');
    var usersRef = ref.child(userId + '/tokens');
    usersRef.update({'value': new_tokens_amount}, function(error) {
        if (error) {
            console.log("User tokens could not be updated." + error);
        } else {
            console.log("User tokens successfully updated.");
        }
    });
    
    res.end('Hello from Connect!\n');
});