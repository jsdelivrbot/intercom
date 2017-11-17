(function() {
  let socket = io();


  const widget = document.createElement('div');
  widget.style.width = '100px';
  widget.style.height = '100px';
  widget.style.backgroundColor = 'red';

  document.body.appendChild(widget)

  widget.addEventListener('click', () => {
    socket.emit('new message', 'clicked!')
  })

  socket.on('reply', (msg) => {
    console.log(msg)
  })
  // socket.on('init', (msg) => {
  //   console.log('hi', msg)
  // });
  //
  // socket.on('message', (msg) => {
  //   let chat = document.createElement('div');
  //   chat.innerHTML = msg;
  //   document.body.appendChild(chat);
  // });
})();