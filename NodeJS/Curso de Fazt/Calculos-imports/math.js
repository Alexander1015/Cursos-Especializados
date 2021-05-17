//Creando un objeto:
const math = {};

function sumar (x1, x2)
{
    return x1 + x2;
}

function restar (x1, x2)
{
    return x1 - x2;
}

function multiplicar (x1, x2)
{
    return x1 * x2;
}

function dividir (x1, x2)
{
    if (x2 == 0)
    {
        return "No se puede dividir por 0";
    }
    else
    {
        return x1 / x2;
    }
}

//Exportando un objeto
Math.sumar = sumar;
Math.restar = restar;
Math.multiplicar = multiplicar;
Math.dividir = dividir;

module.exports = Math;

/*
//Exportando una funcion:
exports.sumar = sumar;
exports.restar = restar;
exports.multiplicar = multiplicar;
exports.dividir = dividir;
*/
/*
//Exportando una funcion con module
function hello (nombre)
{
    console.log("hola ", nombre);
}
module.exports = hello;
*/