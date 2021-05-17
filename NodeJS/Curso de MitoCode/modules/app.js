const os = require('os');
const fs = require('fs'); //Modulos preconstruidos
const app_1 = require('./app_1');

let cpu = os.cpus();
let system = os.platform();
let user = os.hostname();

let cpu_string = JSON.stringify(cpu);
/*
fs.appendFile('prueba.txt', `Informacion del cpu: ${cpu_string}`, function (error) {
    if (error)
    {
        console.log('Error al crear el archivo');
    }
});
*/
/*
console.log(app_1.num);
app_1.saludo();
*/
/*
let resp = app_1.mostrar(10);
console.log(resp);
*/
//Utilizando funcion flecha con modulos preconstruidos
setTimeout(() => {
    console.log("Termine")
}, 2000);