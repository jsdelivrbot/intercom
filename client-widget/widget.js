// client-side socket.io
import io from './lib/socket.io.js';
import './style.css';

const socket = io('http://localhost:8888');

const chatWidget = createDomElement('div', document.body);
chatWidget.id = 'chat-widget';

const header = createDomElement('div', chatWidget);
header.id = 'header';
header.innerHTML = 'Let\'s Chat';

const chatBox = createDomElement('div', chatWidget);
chatBox.id = 'chat-box';

const input = createDomElement('input', chatWidget);

input.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    socket.emit('visitor message', input.value);
    createLineOfText(input.value, 'right');
    input.value = '';
  }
});

function createLineOfText(val, alignment) {
  const line = createDomElement('div', chatBox);
  line.innerHTML = val;
  line.classList.add('message');
  line.style.textAlign = alignment;
  chatBox.appendChild(line)
}

function createDomElement(type, parent) {
  const el = document.createElement(type);
  parent.appendChild(el);
  return el;
}

socket.on('reply', (msg) => {
  console.log('git repo', msg)
  createLineOfText(msg, 'left');
});
