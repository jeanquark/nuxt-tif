const connect = require('connect'), 
	  express = require('express'),
      http = require('http'),
      url = require('url'),
      bodyParser = require('body-parser'),
      path = require('path'),
	  fs = require('fs');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

module.exports = app.use(function (req, res, next) {
	let data = req.body.image;

	function decodeBase64Image(dataString) {
	  	var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
	    response = {};

	  	if (matches.length !== 3) {
	    	return new Error('Invalid input string');
	  	}

	  	response.type = matches[1].split('/')[1];
	  	response.data = new Buffer(matches[2], 'base64');

	  	return response;
	}

	let imageBuffer = decodeBase64Image(data);
	// console.log(imageBuffer);

    console.log('response from server 1');
    let imageFolder = req.body.folder;
    let imageName = req.body.name;

	fs.writeFile('./static/images/' + imageFolder + '/' + imageName + '.' + imageBuffer.type, imageBuffer.data, function(err) {
		console.log('The image was successfully saved on the relative path!');
	});

	let imagePath = imageName + '.' + imageBuffer.type;

	res.send(imagePath);
});
