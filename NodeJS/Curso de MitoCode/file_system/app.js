const fs = require('fs');

console.log('Iniciado');
/*
//Forma Asincrona
fs.readFile('data.txt', 'utf-8', (error, data) =>{
    if(error) {
        console.log(`Error: ${error}`);
    }
    else {
        console.log(data);
    }
});
*/

//Forma Sincrona
let data = fs.readFileSync('data.txt', 'utf-8');
console.log(data);

/*
//Renombrar archivos
fs.rename('data.txt', 'data_renombrado.txt', (error) => {
    if(error) throw error;
    console.log("Renombrado!");
});
*/
/*
//Sobreescribiendo
fs.appendFile('data.txt', '\nGracias por leerme', (error) => {
    if(error) console.log(`Error: ${error}`);
});

//Eliminando archivos
fs.unlink('data2.txt', (error) => {
    if(error) throw error;
    console.log('Eliminado');
})
*/
/*
//Copiando archivos 
fs.createReadStream('data.txt').pipe(fs.createWriteStream('data3.txt'));

//Obteniendo los archivos de forma Asincrona
fs.readdir('./../file_system/', (error, files) => {
    files.forEach(file => {
        console.log(file);
    });
});
*/
//Obteniendo los archivos de forma Sincrona
fs.readdirSync('./../file_system/').forEach(file => {
    console.log(file);
})

console.log('Finalizado');