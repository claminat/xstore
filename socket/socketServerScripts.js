//https://github.com/socketio/socket.io'


const { log, debug } = require('../javascripts/log');
const { facebookMain, facebookStart } = require('../javascripts/socical/facebookScripts');
var express = require('express');
var app = express();
// Socket connection
/* Creates new HTTP server for socket */
var http = require('http');
var socketServer = require('http').createServer(app);
var io = require('socket.io')(socketServer);
/* Listen for socket connection on port 3002 */
socketServer.listen(3002, function () {
  console.log('Socket server listening on : 3002');
});


io.on('connection', function (client) {
  console.log('✅  Client connected...');

  client.on('join', function (data) {
    log(['Server recieved: ', data]);
    client.emit('broad', 'Hello from server');

  });

  client.on('messages', function (data) {
    var facebookObject = JSON.stringify(data);
    log(["on('messages')", facebookObject]);
    client.emit('broad', facebookObject);
    //client.broadcast.emit('broad', data);
  });

  client.on('facebook', function (data) {
    if (debug) {
      log(["data", data]);
      var facebookObject = JSON.stringify(data);
      log(["on('facebook')", facebookObject]);
    }

    // facebookMain(data)
    //   .then(postId => {
    //     if (postId) {
    //       log(["facebookMain(postId)", postId]);
    //       client.emit('notification', postId);
    //     }
    //   })
    if (debug) {
      data.forEach(element => {
        log([JSON.stringify(element)], 'y')
      });
    }
    facebookStart(data)
      .then(postId => {

      })
  });

  client.on('disconnect', function () {
    io.emit('[io]: Client disconnected');
    log('Client disconnected.');
  });

});

/* Create HTTP server for node application */
var server = http.createServer(app);
/* Node application will be running on 3000 port */
server.listen(3000);
