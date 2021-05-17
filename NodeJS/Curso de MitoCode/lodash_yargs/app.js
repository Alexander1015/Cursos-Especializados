const _ = require('lodash');
const argv = require('yargs').argv;
//let comando = process.argv[2];

if(argv.usuario === 'Alexander')
{
        let x = {"nombre": "Alexander"};
        let y = {"apodo": "Chito"};
        let z = [
            { nombre: "Alexander", apellido: "Barrera", edad: 21 },
            { nombre: "Alejandro", apellido: "Flamenco", edad: 12 }
        ];
        
        
        //let resultado = _.assign(x,y);
        //console.log(resultado);
        
        
        //_.times(3, () => console.log('Hola mundo'));
        
        let resultado = _.find(z, { nombre: "Alexander", apellido: "Barrera" });
        console.log(resultado);
}
else
{
    console.log("Usuario no valido");
}