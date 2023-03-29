var http = require("http");
var

var manejador = function (solicitud, respuesta) {
  console.log("hola mundo");
  respuesta.end("hello word");
};

var servidor = http.createServer(manejador);

servidor.listen(8080);
