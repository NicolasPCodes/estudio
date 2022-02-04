//las funciones siempre defenidas arriba
// CUALQUIER FUNSION QUE NO TENGA LA PALABRA EXPLICITA RETURN ESTA RETORNANDO UN Undefinend
//primera forma de crear funsion 
function saludar( nombre ){
    //console.log( arguments );
    // console.log('Hola ' + nombre);
    return [1, 2];
}

//segunda formma de crear funsion, funsion anonima
//como se asigna a una constante para que no se reutilice el nombre de la funsion
const saludar2 = function ( nombre ){
    console.log('Hola ' + nombre);
}


//funcion de flecha o lambda, estas son mas eficientes que las funsiones tradicionales 
// y evitan problemas con un objeto llamado dis.
const saludarFlecha = () => {
    console.log('Hola Flecha');
}

const saludarFlecha2 = ( nombre ) => {
    console.log('Hola ' + nombre);
}


const retornoDeSaludar = saludar('Fernando', 40, true, 'Costa Rica' );

//saludar2('Fernando');
// saludarFlecha();
// saludarFlecha2('Melisa');

function sumar( a, b ){
    return a + b;
}

const sumar2 = ( a, b) => a + b;//solo se puede hacer esto cuando es una linea de codigo nada mas.

function getAleatorio(){
    return Math.random();
}

// convertir en una Funcion de flecha sin llaves la funcion anterior.
const getAleatorio2 = () => Math.random();

console.log( getAleatorio2() );
