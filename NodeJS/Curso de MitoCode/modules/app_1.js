let numero = 50000;

module.exports = {
    num : numero,
    saludo : () => { //Funciones Flecha
        console.log('Hola mundo desde un modulo externo');
    },
    sumar : (a,b) => a + b,
    mostrar : a => a + 10,
};