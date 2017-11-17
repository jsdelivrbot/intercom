(function() {
  let socket = io();

  socket.emit('admin-init', 'admin initialized');

  const widget = document.createElement('div');
  widget.style.width = '100px';
  widget.style.height = '100px';
  widget.style.backgroundColor = 'red';

  document.body.appendChild(widget);

  widget.addEventListener('click', () => {
    socket.emit('admin message', 'clicked!')
  });

  socket.on('visitor message', (data) => {
    console.log(data.msg, data.visitor)
    socket.emit('reply', {msg: 'acknowldeged', visitor: data.visitor})
  })

})();