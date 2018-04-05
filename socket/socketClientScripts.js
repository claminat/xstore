// app.js
var express = require('express');
var app = express();
var debug = require('debug');
var server = require('http').createServer(app);
var io = require('socket.io')(server);


app.use(express.static(__dirname + '/node_modules'));
app.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/index.html');
});
var port = normalizePort(process.env.PORT || '4200');
app.set('port', port);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);


function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
    console.info('Socket client ==> 🌎  Go to http://localhost:%s', app.get('port'))
}
function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}