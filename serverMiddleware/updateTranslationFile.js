const connect = require('connect'), 
	  express = require('express'),
      http = require('http'),
      url = require('url'),
      bodyParser = require('body-parser'),
      path = require('path'),
	  fs = require('fs'),
	  jsonfile = require('jsonfile');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

module.exports = app.use(function (req, res, next) {
	var file = './lang/essai.json'
	// var file = './lang/fr-FR.json'
	console.log(req.body.file)
	// var file = './lang/' + req.body.file

	// var obj = 'module.exports = ' + {"welcome" : "Herzlich Willkommen zu","and" : "und"}
	// var obj1 = 'module.exports = '
	var obj = req.body.json
	
	jsonfile.writeFile(file, obj, {spaces: 2, EOL: '\r\n'}, function (err) {
		console.error(err)
	})

	// jsonfile.writeFile(file, obj2, {flag: 'a'}, function (err) {
	// 	console.error(err)
	// })

	let data = req.body.json;

	res.send(obj);
});
