var express = require('express');
var router = express.Router();
var request = require('./scraper')
// console.log(request, '<---- this is req')

/* This is where the post req is being made in the React App*/
router.post('/', function(req, response, next) {
	// console.log(res)
	console.log(req.body.link, '<------ this is req.body in index')
	console.log(response.body, '<------- this is response.body in index')
	request(req.body.link, response)

	// res.send('hi')

  // res.render('index', { title: 'Express' });
});

module.exports = router;
