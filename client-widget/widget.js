import io from '../node_modules/socket.io-client/dist/socket.io.js';

import './style.css';

let socket = io('http://localhost:8888');

const input = document.getElementById('input');
const chatBox = document.getElementById('chat-container');


input.addEventListener('keypress', (val) => {
  if (event.keyCode === 13) {
    socket.emit('visitor message', input.value);
    createLineOfText(input.value, 'right');
    input.value = '';
  }

});

function createLineOfText(val, alignment) {
  const line = document.createElement('div');
  line.innerHTML = val;
  line.style.textAlign = alignment;
  chatBox.parentNode.insertBefore(line, chatBox);
}

socket.on('reply', (msg) => {
  createLineOfText(msg, 'left');
});
