
let a = 5;

// if esta esperando un valor booleano 
// pero hay excepciones como: undefined, null, una asignacion.
if (a >= 10){
    console.log("a es mayor o igual a 10");
} else{
    console.log("a es menor a 10");
}

// console.log('Fin de programa');

//el new permite crear una nueva instancia de un objeto 'Date' o nuevos objetos
//el 'Date' hace referencia al dia y hora actual.
const hoy = new Date();
let dia = hoy.getDay();// 0:Domingo, 1:Lunes, 2:Martes....

console.log({dia});

// = es una asignacion.
// == tiene que ser igual al valor independiente de su tipo.
// === tiene que ser el valor y el tipado el mismo.
if(dia === 0){
    console.log('Domingo');
} else if(dia === 1){
    console.log('Lunes')
    // if(dia === 1){
    //     console.log('Lunes');
    // } else {
    //     console.log('No es ni lunes ni domingo');
    // }
} else if(dia === 2){
    console.log('Martes');
} else {
    console.log('No es ni Domingo, Lunes o Martes....');
}

// Sin usar If Else, switch, unicamente objetos
// tarea es utilizar objetos para imprimir el dia de la semana.
dia = 3// 0:Domingo, 1: Lunes..... 

// dia de la semana utilizando objetos.
const diaLetras = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4:'Jueves',
    5:'Viernes',
    6:'Sabado',
};
// dia de la semana utilizando arreglo
const diaLetras2 = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado',];
// || esto es un or o un O en español
// este or se mostraria solo cuando el obj diaLetras sea undefined o null, de lo contrario
// solo mostrara el resultado del objeto.
console.log( diaLetras[dia] || 'Día no encontrado');
// console.log({diaLetras});
console.log( diaLetras2[dia] || 'Día no encontrado');