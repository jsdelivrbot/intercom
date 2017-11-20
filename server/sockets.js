const socketio = require('socket.io');

const Message = require('./Message');

let adminId;

module.exports = function(server) {
  const io = socketio(server);

  io.on('connection', (socket) => {
    console.log(socket.id, 'connected');

    socket.on('admin-init', () => {
      adminId = socket.id;
      io.to(adminId).emit('admin-id-set', adminId);
    });

    socket.on('visitor-message', (msg) => {
      console.log(socket.id, msg);
      const message = new Message(socket.id, msg);
      io.to(adminId).emit('visitor-message', message)
    });

    socket.on('reply', (data) => {
      io.to(data.userId).emit('reply', data.text)
    });

    socket.on('disconnect', () => {
      io.to(adminId).emit('visitor-disconnected', socket.id)
    });
  });

};