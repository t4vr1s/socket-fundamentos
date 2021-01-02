const socket = io();
//   on escuchar
socket.on('connect', function () {
  console.log('conectado al servidor');
});

socket.on('disconnect', function () {
  console.log('conexión perdida con el servidor');
});
//   emit para enviar informacion
socket.emit(
  'enviarMensaje',
  {
    usuario: 'Eduardo',
    mensaje: 'Hola mundo',
  },
  (resp) => {
    console.log('respuesta server: ', resp);
  }
);

//   escuchar informacion
socket.on('enviarMensaje', function (resp) {
  console.log('Servidor: ', resp);
});
