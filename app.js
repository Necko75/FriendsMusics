
const KEY = 'express.sid', SECRET = "1234567890QWERTY";

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var fs = require('fs');
var app = express();
var server = http.createServer(app);
var cookie = express.cookieParser(SECRET);
var store = new express.session.MemoryStore();
var session = express.session({
	secret : SECRET,
	key : KEY,
	store : store
});

module.exports = { app: app, server: server };

/** Configuration */
app.configure(function() {
	this.set('views', path.join(__dirname, 'views'));
	this.set('view engine', 'jade');
	this.use(express.static(path.join(__dirname, '/public')));
	this.use(cookie);
	this.use(session);
	this.use(express.bodyParser());
	this.use(express.logger('dev'));
	this.use(express.json());
	this.use(express.urlencoded());
	this.use(express.methodOverride());
	this.use(app.router);
	this.use(express.bodyParser());
	this.set('port', process.env.PORT || 3000);
	this.use(express.static(path.join(__dirname, 'public')));
});

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


fs.readdirSync('./controllers').forEach(function(file) {
		route = require('./controllers/' + file);
		route.controller(app);
});

app.get('/', routes.index);

var io = require('socket.io').listen(server);
var S = require('models/sockets/sockets.js');
S.init(io, cookie, KEY, store, session);

server.listen(3000, function() {});

















