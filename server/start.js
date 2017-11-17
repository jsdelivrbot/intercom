const http = require('http');
const server = http.createServer();

const express = require('express');
const app = express();
// const router = require('./routes');

const path = require('path');

server.on('request', app);

const PORT = process.env.PORT || 8888;

/* INITIALIZE SOCKETS */
require('./sockets.js')(server);

/* START SERVER */
server.listen(PORT, function() {
    console.log('The server is listening on port ' + PORT);
});

// app.use(express.static(path.join(__dirname, '../client')));

/* ROUTES */
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

