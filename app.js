var express = require('express'),
    app     = express(),
    server  = require('http').createServer(app),
    io      = require('socket.io').listen(server, { log: false }),
    jade    = require('jade');

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

io.sockets.on('connection', function (socket) {
	socket.on('sendCord', function(data) {
  		console.log(data);
  		io.sockets.emit('changePos', data);
	});
});

server.listen(800);