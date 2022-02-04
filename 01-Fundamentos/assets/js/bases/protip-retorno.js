
// function crearPersona( nombre, apellido) {
//     return{
//         nombre: nombre,
//         apellidos: apellido,
//     }
// }
// cuando el nombre de la propiedad del objeto y el de la variable es el mismo al querer crear un objeto no es necesario poner nombre: nombre
// sino directamente se colocaria la variable y las comas.

// function crearPersona( nombre, apellido) {
//     return{
//         nombre,
//         apellido,
//     }
// }

//funcion anterior pero en tipo de flecha de
//para mandar el objeto asi, tendriamos que meterlo dentro de parentesis.
const crearPersona = (nombre, apellido) => ({nombre, apellido});

const persona = crearPersona('Nicolas', 'Paredes');
console.log(persona);

function imprimeArgumentos(){
    console.log( arguments );
}

// funcion de flecha no crear objetos porque no tiene el arguments. 
// para esto tenemos que poner los 3 puntos, que es un parametro rest,  que creara un arreglo en la variable que va despues de los puntos.
// la primera consideracion es que no puede venir nada mas despues del parametro rest.
// la segunda, es que si se quiere guardar un parametro en una variable sola, se cola antes de la variable rest.
const imprimeArgumentos2= ( edad, ...args ) => {
    return args;
}

//const argumentos = imprimeArgumentos2(10, true, false, 'Fernando', 'Hola'); para tener una variable de cada argumento dentro del arreglo se hace de la siguiente manera.

const [ casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Fernando', 'Hola');
console.log({casado, vivo, nombre, saludo});

//para cambiar el nombre de la variable, se pondria : y luego el nuevo nombre.
const { apellido: nuevoApellido } = crearPersona('Nicolas', 'Paredes');
console.log({nuevoApellido});

//destructuracion elavorada.
const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],

};

// const imprimePropiedades = (personaje) =>{
//     console.log('nombre',personaje.nombre);
//     console.log('codeName',personaje.codeName);
//     console.log('vivo',personaje.vivo);
//     console.log('edad',personaje.edad);
//     console.log('trajes',personaje.trajes);
// }

const imprimePropiedades = ({nombre, codeName, vivo, edad = 15, trajes}) =>{
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}


imprimePropiedades( tony );