const app = require('express')()
module.exports = { path: '/api', handler: app }

app.get('/say/:word', (req, res) => {
	console.log('say word')
  	res.json(req.params)
})