
const elMayor = (a,b) => (a > b) ? a : b;

//cuando es un valor booleano no se pone parentesis, se puede omitir si se quiere
const tieneMembresia = ( miembro ) => miembro ? '2 Dólares' : '10 Dólares';


console.log( elMayor(20, 15) );
console.log( tieneMembresia(false) );

//Tambien se utiliza cuando se crean arreglos con condiciones.

const amigo = true;
const amigoArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    //función anonima autoinvocada
    //(()=> 'Nick Fury')()
    // elMayor(10, 15),
];

console.log( amigoArr );

// Mas de dos condiciones en operador ternario
// Reemplazo a if anidado.
const nota = 100; // A+ A B+
const grado = nota >= 95 ? 'A+':
              nota >= 90 ? 'A' :
              nota >= 85 ? 'B+':
              nota >= 80 ? 'B' :
              nota >= 75 ? 'C+':
              nota >= 70 ? 'C' : 'F';

              
console.log({ nota, grado });