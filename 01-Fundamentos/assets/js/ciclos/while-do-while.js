

const carros = ['Ford','Mazda','Honda','Toyota'];
let i = 0;
// while( i < carros.length ){
//     console.log( carros[i] );
//     // i = i + 1;
//     // i += 1
//     i++;
// };

// considerados condiciones falsos
// null
// undefined
// false
console.warn('While')

while( carros[i] ){
    if ( i === 1){
        // break;//corta proces
        i++;
        continue;//continua el proceso pero salta la opcion 1
    }
    console.log( carros[i] );
    // i = i + 1;
    // i += 1
    i++;
};


console.warn('Do While')//ejecutara el bloque interno al menos una vez
j = 0;
do{
    console.log( carros[j] );
    j++;
} while (carros[j]);
