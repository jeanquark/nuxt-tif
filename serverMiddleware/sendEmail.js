const express = require('express'),
	  nodemailer = require('nodemailer')
	  bodyParser = require('body-parser')
	  env = require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

module.exports = app.use(function (req, res, next) {
	console.log('Send Email with nodemailer');
	// console.log(req.body);

	// Generate test SMTP service account from ethereal.email
	// Only needed if you don't have a real mail account for testing
	// nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_ADDRESS, // generated ethereal user
            pass: process.env.EMAIL_PASSWORD // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: req.body.data.name + ' ' + '<' + req.body.data.email + '>', // sender address
        to: 'jeanquark84@gmail.com', // list of receivers
        subject: 'Message from the contact form of www.thisisfan.com', // Subject line
        html: '<b>' + req.body.data.message + '</b><br /><br />Sent by: ' + req.body.data.name + ' ' + req.body.data.email // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
    	let success = true;
        if (error) {
        	let success = false;
            // return console.log(error);
        }
        res.send(success);
    });
});
