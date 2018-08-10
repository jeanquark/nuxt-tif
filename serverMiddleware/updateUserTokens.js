const connect = require('connect'),
      express = require('express'),
      http = require('http'),
      url = require('url'),
      bodyParser = require('body-parser'),
      moment = require('moment'),
      admin = require('firebase-admin');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

module.exports = app.use(function (req, res, next) {
    try {
        console.log('UPDATE USER TOKENS');
        const userId = req.body.userId;
        const user_tokens = req.body.user_tokens;
        const operation = req.body.operation;
        const amount = req.body.amount;
        const conversion_rate = req.body.conversion_rate;
        console.log('userId: ', userId);
        console.log('user_tokens: ', user_tokens);
        console.log('operation: ', operation);
        console.log('amount: ', amount);
        console.log('conversion_rate: ', conversion_rate);

        // const snapshot = admin.database().ref('game_parameters/tokens_to_money_conversion_rate').once('value');
        // admin.database().ref('game_parameters/tokens_to_money_conversion_rate').once('value', function(snapshot) {
        // admin.database().ref('game_parameters/tokens_to_money_conversion_rate').once('value').then(function(snapshot) {
        //     const conversion_rate = snapshot.val().value;
        //     console.log('conversion_rate: ', conversion_rate);
        // }).then(function(conversion_rate) {
            // console.log('amount: ', amount);
            // console.log('user_tokens: ', user_tokens);
            // console.log('operation: ', operation);
            // console.log('conversion_rate: ', conversion_rate);
            let new_tokens_amount = user_tokens;
            let tokens_diff = 0;
            if (operation === 'buy_tokens') {
                const total_user_payment = amount;
                console.log('total_user_payment: ', total_user_payment);
                tokens_diff = total_user_payment * conversion_rate;
                new_tokens_amount = user_tokens + tokens_diff;
                console.log('new_tokens_amount: ', new_tokens_amount);
            }

            if (operation === 'update_user_teams') {
                const total_cost = amount;
                console.log('total_cost: ', total_cost);
                new_tokens_amount = user_tokens + total_cost;
            }
            // res.end('Successfully updated user tokens from server');
            
            // console.log('total_cost: ', total_cost);
            // console.log('total_user_payment: ', total_user_payment);

            var db = admin.database();
            var ref = db.ref('users');
            var usersRef = ref.child(userId + '/tokens/');
            usersRef.update({
                updated_at: moment().unix(), 
                value: new_tokens_amount
            }, function(error) {
                if (error) {
                    console.log("User tokens could not be updated." + error);
                } else {
                    console.log("User tokens successfully updated.");
                }
            });
            
            // res.end('Successfully updated user tokens from server');
            res.send({tokens_diff, new_tokens_amount});
        // }, function(error) {
        //     console.error(error);
        //     res.status(500).send('Could not update user tokens from server.' + error);
        // });
    }
    catch (error) {
        res.status(500).send('Could not update user tokens from server.' + error);
    }
});