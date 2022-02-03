/**
 * Días de semana abrimos a las 11
 * pero los fines de semana abrimos a las 9
 */

// Entra a un sitio web, para consultar si está abierto hoy.......

const dia = 1; // 0: domingo.... 1:Lunes....
const horaActual = 8;


let horaApertura;
let mensaje; // Esta abierto, Esta cerrado, hoy abrimos a las XX

// if( dia === 0 || dia === 6) {        se puede realizar de la siguiente manera...
// if( [0, 6].includes( dia )){
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Día de semana');
//     horaApertura = 11;
// };
// lo anterior se puede resumir asi:
//la condicion include es mientras el dia este entre 0 y 6 se cumpliria la condicion
// la condicion ternaria comienzo con el ?
horaApertura = ( [0, 6].includes( dia ) ) ? 9 : 11;

// if ( horaActual >= horaApertura){
//     mensaje = 'Está abierto';
// } else {
//     // utilizando este backtip `` se puede concatenar valores o variables, utilizando ${ variable }
//     mensaje = `Está cerrado, hoy abrimos a las ${ horaApertura }`;
// };
mensaje = ( horaActual >= horaApertura ) ? 'Está abierto' : `Está cerrado, hoy abrimos a las ${ horaApertura }`;

console.log( {horaApertura, mensaje })