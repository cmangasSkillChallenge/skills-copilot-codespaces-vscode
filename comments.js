// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var comments = require('./comments.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/comments', function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify(comments));
});

app.post('/comments', function(req, res) {
	var comment = req.body;
	comments.push(comment);
	fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(err) {
		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify(comments));
	});
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000);