

let a = 10;
let b = a;
a = 30;

console.log({a,b});

let juan = { nombre: 'Juan'}
//el operador spred que son los 3 puntos nos permite separar todas las propiedades y valores de un objeto al reutilizar.
let ana = {...juan};
ana.nombre = 'Ana'
console.log({juan,ana});

//si se utilizara los 3 puntos antes de persona(ej:'...persona') este uniria todos los argumentos y convierte en arreglo y ahi se llama rest.
// en caso de que queramos utilizar el spred en este objeto tendria que estar entre {} y ahi dentro escribir '...persona', y ahi pasaria a ser un spred
const cambiaNombre =  ( {...persona} ) => {
    persona.nombre = 'Tony';
    return persona;
}


let peter = { nombre: 'Peter'};
//otra solucion para reutilizar el objeto seria poner a peter de la siguiente manera: '{...peter}' y si lo hacemos asi no seria necesario hacerlo arriba.
let tony = cambiaNombre( peter );

console.log({tony, peter});

//Arreglos
const frutas = ['Manzana', 'Pera', 'Pina'];

//al reutilizar un arreglo se pone entre [] y utilizamos el spred para que no se combinen los cambios y asi separar las variables.
console.time('spred');
const otrasFrutas = [...frutas];
console.timeEnd('spred');
//tambien se puede utilizar el slice para reutilizar el arreglo y no tener relacion.
//para comprobar cual es mas eficiente tomaremos el tiempo que demora en realizar esto.
console.time('slice');
const otrasFrutas2 = frutas.slice();
console.timeEnd('slice');

otrasFrutas.push('Mango');

console.log({frutas, otrasFrutas});