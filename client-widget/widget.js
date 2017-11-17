// client-side socket.io
import io from './lib/socket.io.js';
// styles
import './style.css';

console.log(io);

const socket = io('http://localhost:8888');

const chatContainer = document.createElement('div');
chatContainer.id = 'chat-container';
document.body.appendChild(chatContainer);

const chatBox = document.createElement('div');
chatBox.id = 'chat-box';
chatContainer.appendChild(chatBox);

const input = document.createElement('input');
input.id = 'input';
chatContainer.appendChild(input);


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
  line.style.margin = '0px 5px';
  line.style.textAlign = alignment;
  chatBox.appendChild(line)
}

socket.on('reply', (msg) => {
  createLineOfText(msg, 'left');
});
