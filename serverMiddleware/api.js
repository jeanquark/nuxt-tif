const app = require('express')()
const axios = require('axios');
module.exports = { path: '/api', handler: app }

app.get('/say/:word', (req, res) => {
	// console.log(req)
	console.log('say ' + req.params.word)
  	res.json(req.params)
})


// app.get('/api-football', (req, res) => {
// 	console.log('api-football called')
// 	// res.end();
// 	// getData()
// 	app.get('https://www.google.com', (req, res) => {
// 		console.log('GET request sent')
// 		// res.end()
// 	}).then({
// 		res.end()
// 	})
// })

app.get('/api-football', (req, res) => {
	console.log('api-football called')
}).then() => ({
	app.get('https://www.google.com', (req, res) => {
		console.log('GET request sent')
		res.end()
	})
});

function getData() {
	// https://apifootball.com/api/?action=get_events&from=2018-04-23&to=2018-04-23&league_id=62&APIkey=78ed30d650d0a2b6c6286ac6ac9707ea2e6fe7bd07341cff1a447017700ad90e
	console.log('getData called')
	axios.get('http://google.com', (req, res) => {
		console.log('GET request sent')
		res.end()
	})
}
