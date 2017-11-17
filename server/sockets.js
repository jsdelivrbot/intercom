const socketio = require('socket.io');

let appId;

module.exports = function(server) {
  const io = socketio(server);

  io.on('connection', (socket) => {
    if (!appId) {
      appId = socket.id;
    }
    console.log(socket.id, 'connected');

    socket.on('new message', (msg) => {
      console.log(socket.id, msg);
      io.to(socket.id).emit('reply', 'received your message')
    });

    socket.on('disconnect', () => {
      console.log(socket.id, 'disconnected');
    });
  });

};