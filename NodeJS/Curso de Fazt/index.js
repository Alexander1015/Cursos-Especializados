//Modulo preconstruidos de NodeJS
const os = require("os");

/*
//Plataforma del Sistema Opertativo
console.log(os.platform());

//Ultima version de la plataforma
console.log(os.release());

//Memoria libre en bytes
console.log("Free mem: ", os.freemem(), " bytes");

//Memoria total en bytes
console.log("Total mem: ", os.totalmem(), " bytes");
*/

//Modulo preconstruido de NodeJS (Manejo de Archivos)
//const fs = require("fs");
/*
//Codigo asincrono
fs.writeFile("./texto.txt", "Linea Uno", function(err) {
    //Sirve para realizar una accion al terminar de crear un archivo
    //(Perfecto para errores)
    if(err) {
        console.log(err);
    }
    console.log("Archivo creado");
});
*/

/*
//Codigo bloqueante
const result = fs.writeFile(" ", " ");
if(result){
    ...
}
*/

/*
fs.readFile("./texto.txt", function (err, data) {
    if(err)
    {
        console.log(err);
    }
    console.log(data.toString()); //Convertir los datos a un String de un txt
});
*/

/*
//Creando servidores http
const http = require("http");
*/

//Utilizando el modulo colors (npm install colors)
const colors = require("colors");

/*
const handleServer = function (req, res) {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Hola mundo desde NodeJS</h1>");
    res.end();
};

const server = http.createServer(handleServer);

server.listen(8080, function() {
    console.log("Server on port 8080".yellow);
});*/

//Utilizando el framework ExpressJS
const express = require("express");
const server = express();

server.get("/", function (req, res) {
  res.send("<h1>Hola mundo con Express y NodeJS</h1>");
  res.end();
});

server.listen(8080, function () {
  console.log("Server inport 3000".red);
});
