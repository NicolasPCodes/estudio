let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log( juegos.length );

let primero = juegos[ 2 - 2 ];
let ultimo = juegos[ juegos.length - 1 ];

console.log({primero, ultimo});

//forEach es un metodo que ejecutara una instruccion por cada elemento del arreglo
juegos.forEach( (elemento, indice, arr) => {
    console.log({elemento, indice, arr});
} );

let nuevaLong = juegos.push( 'F-Zero' );
console.log({nuevaLong, juegos});

nuevaLong = juegos.unshift('Fire Emblem');
console.log({nuevaLong, juegos});

let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});

let pos = 1;

let juegosBorrados = juegos.splice(pos, 2);
console.log({juegosBorrados, juegos});

let metroidIndex = juegos.indexOf('Metroid') // CaseSensitive
console.log({metroidIndex});


