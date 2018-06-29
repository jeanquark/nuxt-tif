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
	// console.log(req.body);
	// console.log(req.body.image);

	let data = req.body.image;

	// let data = 'data:image/png;base64,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';

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

	var imageBuffer = decodeBase64Image(data);
	// console.log(imageBuffer);

    console.log('response from server 1');
    let imageName = req.body.name;

	fs.writeFile('./static/images/teams/' + imageName + '.' + imageBuffer.type, imageBuffer.data, function(err) {
		console.log('The image was successfully saved on relative path!');
	});

	// Change the content of the file as you want
	// or either set fileContent to null to create an empty file
	// var fileContent = "Hello World!";

	// fs.writeFile('./static/images/mynewfile.txt', fileContent, (err) => {
	//     if (err) throw err;
	//     console.log("The file was successfully saved on relative path!");
	// }); 

	// app.use('upload-image', (req, res) => {
	//   	console.log(req.body);
	// });
	let imagePath = imageName + '.' + imageBuffer.type;

	// res.send('POST request to upload-image succeeded!');
	res.send(imagePath);
	// next();
});
