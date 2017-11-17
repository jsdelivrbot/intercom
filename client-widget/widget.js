import io from '../node_modules/socket.io-client/dist/socket.io.js';

let socket = io('http://localhost:8888');

console.log(socket)

const submitButton = document.getElementById('submit');
const input = document.getElementById('input');


input.addEventListener('keypress', (val) => {
  if (event.keyCode === 13) {
    socket.emit('new message', input.value)
  }

});

socket.on('reply', (msg) => {
  console.log(msg)
});
