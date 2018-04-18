//server/server.js
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var cors = require('cors');

app.set('view engine', 'ejs');

// //client
// app.set('views', path.join(__dirname, '../client'));
// app.use(express.static(path.join(__dirname, '../client')));

//test
app.set('views', path.join(__dirname, '../test'));
app.use(express.static(path.join(__dirname, '../test')));


app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));

// Mongoose connection with mongodb
mongoose.Promise = require('bluebird');

//mongoose.connect('mongodb://localhost:27017/nodeweb')//localhost
mongoose.connect('mongodb://202.143.111.30:27017/nodeweb')//202.143.111.30
    .then(() => { // if all is ok we will be here
        console.log('Start');
    })
    .catch(err => { // if error we will be here
        console.error('App starting error:', err.stack);
        process.exit(1);
    });
// Required application specific custom router module
var router = require('./routes/routes.js');
var itemRouter = require('./routes/itemRouter.js');
var userRouter = require('./routes/userRouter.js');
var photoRouter = require('./routes/photoRouter.js');
var testRouter = require('./routes/testRouter.js');


// Use middlewares to set view engine and post json data to the server
app.use(cors());

app.use('/', router);
app.use('/item', itemRouter);
app.use('/user', userRouter);
app.use('/test', testRouter);
app.use('/photo', photoRouter);

module.exports = app;