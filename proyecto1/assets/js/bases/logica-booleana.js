
const regresaTrue = () => {
    console.log('Regresa true');
    return true;
};

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
};

// Warning en log o consola
console.warn('Not o la negación');
console.log( true ); // true
// la negacion es transformar un valor booleano a su opuesto.
console.log( !true ); // false
console.log( !false ); // true

console.log( !regresaFalse() ); // true

console.warn('And'); //solo sera true si todos los valores son verdaderos
console.log( true && true); // true
console.log( true && !false); // true

// el && tambien dispara acciones solo si la primera accion se cumple
// esto pasa porque la primera funcion ya se cumplio la primera, esto es solo cuando ya regreso
// el valor false, que era el respectivo.
console.log('------------------');
console.log( regresaFalse() && regresaTrue());// false
console.log( regresaTrue() && regresaFalse());// false

console.log('---------&&--------');
regresaFalse() && regresaTrue();

console.log('4 condiciones ', true && true && true && false)//false

console.warn('OR');//opuesto de and, ya que basta conque solo un valor sea true para que todo sea verdadero
console.log(true || false);
console.log(false || false);

console.log( regresaTrue() || regresaFalse() );
console.log('4 condiciones ', true || true || true || false);//false

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && 'Hola Mundo' && 150;//como va primero false, corta la busqueda
const a2 = 'Hola' && 'Mundo' && soyFalso && true;
const a3 = soyFalso || 'Ya no soy falso';// como es or este sigue buscando el siguiente valor
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;// como ya encontro un valor que mostrar, ya no sigue buscando, por tanto no se mostrara el true.
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;//como ya encontro un valor true, no sigue buscando, esto es permitido en or.
console.log({a1, a2, a3, a4, a5});

if( true || true || true || false){
    console.log('Hacer algo');
} else {
    console.log('Hacer otra cosa')
}