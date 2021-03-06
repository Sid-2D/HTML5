var app = require('express')(),
	http = require('http').Server(app),
	io = require('socket.io')(http);

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', socket => {
	console.log('A user connected.');
	socket.on('disconnect', function(){
	    console.log('user disconnected');
	});
	socket.on('chat message', function(msg){
	    io.emit('chat message', msg);
    });
});

http.listen(3000, () => {
	console.log('Listening on port: 3000');
});