var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var app = express();
var comments = require('./comments');
var messages = require('./messages');

// Mongoose //
var mongoUri = "mongodb://localhost:27017/Portfolio";

// Express Middleware //
app.use(bodyParser.json());
app.use(cors());

//Endpoints // Comments
app.get('/api/comments', comments.findComment);
app.post('/api/comments', comments.addComment);
app.delete('/api/comments/:id',comments.deleteComment);

// Messages
app.get('/api/messages', messages.findMessage);
app.post('/api/messages', messages.findMessage);
app.delete('/api/messages/:id', messages.deleteMessage);

// Connetions //
mongoose.connect(mongoUri);
mongoose.connection.once('open', function () {
	console.log("Successsfully connected to mongodb");
});

app.use(express.static(__dirname + './../.'));

// PORT //
app.listen(3000, function () {
	console.log('listening on port: 3000');
});
