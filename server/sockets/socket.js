const { io } = require('../server');

io.on('connection', (client) => {
  console.log('usuario conectado');

  client.emit('enviarMensaje', {
    usuairo: 'Administrador',
    mensaje: 'bienvenido a esta app',
  });

  client.on('disconnect', () => {
    console.log('usuario desconectado');
  });

  // escuchar el cliente
  client.on('enviarMensaje', (data, callback) => {
    console.log(data);

    // envia mensaje a todo los usuario conectados
    client.broadcast.emit('enviarMensaje', data);
    // if (mensaje.usuario) {
    //   callback({
    //     resp: 'todo salio bien!!',
    //   });
    // } else {
    //   callback({
    //     resp: 'hubo un problema',
    //   });
    // }
  });
});
