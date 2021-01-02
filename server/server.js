const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

const port = process.env.PORT || 3000;
server.listen(port, (err) => {
  if (err) throw new Error(err);

  console.log(`Servidor corriendo en puerto ${port}`);
});
