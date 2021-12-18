
// manera 1
//const arr = new Array(10);
//const arr = [];
//console.log(arr);

let videojuegos = ['Mario 3', 'Megaman', 'Chrono Trigger' ];
console.log({ videojuegos });

console.log(videojuegos[0]);

//arreglo con diferentes types
let arregloCosas = [
    true,
    123,
    'Fernando',
    1 + 2,
    function(){},
    //funcion de flechas o lamnda function
    ()=>{},
    { a:1 },
    ['X', 'Megaman', 'Zero', 'Dr. Light', [
        'Dr. Willy',
        'Woodman'
    ]]
];

//console.log(arregloCosas);
//console.log(arregloCosas[2]);
// TAREA IMPRIMIR EL STRING DR. LIGHT DEL ARREGLO DENTRO DEL ARREGLO.
// SOLUCION MIA
console.log(arregloCosas[7]);
let arreglo2 = arregloCosas[7];
console.log(arreglo2[3]);
// SOLUCION DE PROFESOR
console.log(arregloCosas[7][4][1]);