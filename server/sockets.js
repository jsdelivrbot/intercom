const socketio = require('socket.io');

let adminId;

module.exports = function(server) {
  const io = socketio(server);

  io.on('connection', (socket) => {
    // console.log(socket)
    console.log(socket.id, 'connected');

    socket.on('admin-init', () => {
      adminId = socket.id;
      console.log('got admin id', socket.id)
    });

    socket.on('visitor message', (msg) => {
      console.log(socket.id, msg);
      io.to(adminId).emit('visitor message', {msg, visitor: socket.id})
    });

    socket.on('reply', (data) => {
      io.to(data.visitor).emit('reply', data.msg)
    });

    socket.on('disconnect', () => {
      console.log(socket.id, 'disconnected');
    });
  });

};