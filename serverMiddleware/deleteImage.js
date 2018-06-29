const express = require('express'),
      http = require('http'),
      url = require('url'),
      bodyParser = require('body-parser'),
      path = require('path'),
	  fs = require('fs');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

module.exports = app.use(function (req, res, next) {
	let imageFolder = req.body.folder;
    let imageName = req.body.name;
	let imagePath = './static/images/' + imageFolder + '/' + imageName;

	fs.unlink(imagePath, function(error) {
	    if (error) {
	        console.log('Could not delete image');
	        // res.send('error');
	 		success = false;
			res.send(success);
	    } else {
	    	success = true;
	    	console.log('Deleted competition image successfully!');
			res.send(success);
	    }
	});
});
