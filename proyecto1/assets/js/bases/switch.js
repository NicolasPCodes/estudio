

// const dia = 0; // 0: Domingo
const dia = '2' // en caso de querer buscar en switch con string

switch( dia ){
    case 0: 
        console.log('Domingo');
        break;
    case 1:
        console.log('Lunes');
        break;
    case '2':
        console.log('Martes');
        break;
    default:
        console.log('No es lunes, Martes o domingo');
};