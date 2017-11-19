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
input.setAttribute('autofocus', '');
input.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    socket.emit('visitor message', input.value);
    createMessage(input.value, 'visitor');
    input.value = '';
  }
});

function createMessage(val, sender) {
  const message = createDomElement('div', chatBox);
  message.classList.add('message');
  message.classList.add(sender);

  const avatar = createDomElement('div', message);
  avatar.classList.add('avatar');

  const bubble = createDomElement('div', message);
  bubble.classList.add('bubble');
  bubble.innerHTML = val;
}

function createDomElement(type, parent) {
  const el = document.createElement(type);
  parent.appendChild(el);
  return el;
}

socket.on('reply', (msg) => {
  createMessage(msg, 'admin');
});
