var express = require('express');
var path = require('path');
var engine = require('ejs-locals');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// Database
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/nodeweb');



var index = require('./routes/index');
var user = require('./routes/user');
var about = require('./routes/about');
var fake = require('./routes/fake');
var dashboard = require('./routes/dashboard');
var tables = require('./routes/tables');
var formelements = require('./routes/form-elements');
var formelements2 = require('./routes/form-elements-2');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.engine('ejs', engine);
app.set('view engine', 'ejs');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './public')));

// Make our db accessible to our router
app.use(function(req,res,next){
  req.db = db;
  next();
});

app.use('/', index);
app.use('/user', user);
app.use('/about', about);
app.use('/fake', fake);
app.use('/dashboard',dashboard)
app.use('/tables',tables)
app.use('/form-elements',formelements)
app.use('/form-elements-2',formelements2)


// app.get('/foo.js', function(req,res,next){	res.sendfile('foo.js');})
 //app.get('/javascripts/global.js', function(req,res,next){	res.sendfile('global.js');})
// app.get('/foo.css', function(req,res,next){	res.sendfile('foo.css');})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error',{message:err});
});

module.exports = app;
