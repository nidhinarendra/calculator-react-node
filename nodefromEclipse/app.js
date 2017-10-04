/**
 * Module dependencies.
 */

var express = require('express'),
  routes = require('./routes'),
  user = require('./routes/user'),
  http = require('http'),
  path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3030);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//app.get('/', routes.index);
app.get('/users', user.list);
app.get('/', function(req, res) {
  res.sendfile('routes/index.html');
});

app.get('/addition*', function(req, res) {
  var num1 = req.param('num1');
  var num2 = req.param('num2');
  var result = +num1 + +num2;
  res.send('' + result);
});

app.get('/subtraction*', function(req, res) {
  var num1 = req.param('num1');
  var num2 = req.param('num2');
  var result = +num1 - +num2;
  res.send('' + result);
});

app.get('/multiplication*', function(req, res) {
  var num1 = req.param('num1');
  var num2 = req.param('num2');
  var result = +num1 * +num2;
  res.send('' + result);
});

app.get('/division*', function(req, res) {
  var num1 = req.param('num1');
  var num2 = req.param('num2');
  var result = +num1 / +num2;
  res.send('' + result);
});

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
