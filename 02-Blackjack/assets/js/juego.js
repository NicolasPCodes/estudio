/**
 * 2C = Two of Clubs    (Trebol) 
 * 2D = Two of Diamonds (Diamantes) 
 * 2H = Two of Hearths  (Corazones)
 * 2S = Two of Spades   (Picas o espadas)
 */

let deck = [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0, 
    puntosComputadora = 0;

// Referencias de HTML
const btnNuevo = document.querySelector('#btnNuevo');
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const puntopsHTML = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora= document.querySelector('#computadora-cartas');

// Creando la baraja
const crearDeck = () => {
    //Crea cartas con numero
    for( let i = 2; i <= 10; i++) {
        for( let tipo of tipos){
            deck.push (i + tipo);
        }
    }
    //Crea cartas con letra 
    for( let tipo of tipos ){
        for( let especial of especiales){
            deck.push(especial + tipo);
        }
    }
    deck = _.shuffle(deck);
    console.log(deck)
    return deck;
}

crearDeck();

//Funcion para tomar carta.
const pedirCarta = () => {
    // MI SOLUCION
    // const carta = '2C';
    // ind = deck.indexOf(carta);
    // console.log(ind);
    // deck.splice(ind,1);  
    // console.log(deck);
    if( deck.length === 0 ){
        throw 'NO HAY CARTAS EN EL DECK'//MENSAJE DE CONSOLA
    }
    const carta = deck.pop();
    return carta;

}

// pedirCarta();
const valorCarta = ( carta ) => {
    //subString primero se define la posicion que se quiere conservar y luego hasta donde se quiere conservar
    const valor = carta.substring(0, carta.length - 1);
    // 2 = 2 10 = 10 3 = 3 10
    // isNaN = is not a number, evalua lo que esta entre parentesis y evalua si es un numero o no
    // devolvera un true si no es un numero
    // if( isNaN( valor ) ){
    //     puntos = ( valor === 'A') ? 11 : 10;
    // } else {     
    //     puntos = valor * 1;
    // }
    return ( isNaN( valor )) ?
            ( valor === 'A') ? 11 : 10
            : valor * 1;
}

// turno de la computadora.
const turnoComputadora = ( puntosMinimos ) => {

    do {
        const carta = pedirCarta();

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntopsHTML[1].innerText = puntosComputadora;
        
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('cartas');
        divCartasComputadora.append(imgCarta);

        if( puntosMinimos > 21){
            break;
        }
    } while( (puntosComputadora < puntosMinimos) &&(puntosMinimos <= 21 ) );

    // funcion de js donde se define el tiempo en milisegundos, para implementar un callback
    // luego de una cantidad de segundos.
    setTimeout(() => {
        
        if( puntosComputadora === puntosMinimos){
            alert('Nadie gana :[');
        }else if( puntosMinimos > 21){
            alert('Computadora gana');
        } else if( puntosComputadora > 21){
            alert('Jugador gana');
        } else if( puntosMinimos < puntosComputadora){
            alert('Computadora gana');
        } else if( puntosMinimos > puntosComputadora){
            alert('Jugador gana');
        }

    }, 10);
}

// Eventos

// Para estar escuchando eventos es la siguiente funcion 'addEventListener'
// la funcion dentro de la funcion cumple la funcion de CallBack
// osea que cuando se haga click hara la accion dentro del CallBack
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta();
    
    puntosJugador = puntosJugador + valorCarta( carta );
    puntopsHTML[0].innerText = puntosJugador;

    // <img class="cartas" src="assets/cartas/3H.png">
    const imgCarta = document.createElement('img');
    // .src para adjuntar el source o direccion de elementos que se ocuparia para etiqueta img
    // para concatenar o insertar variables dentro de String siempre ocupar `` y llamar la variable
    // con  ${variable}.
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('cartas');
    divCartasJugador.append(imgCarta);

    if ( puntosJugador > 21 ){
        console.warn('YOU LOSE');
        turnoComputadora(puntosJugador);
        // .disabled para desabilitar boton, se utiliza con true y false
        btnDetener.disabled = true;
        btnPedir.disabled   = true;

        // alert('La computadora gano');
    } else if ( puntosJugador === 21 ){
        console.warn('21, CASI CASI DE GANAR');
        btnDetener.disabled = true;
        btnPedir.disabled   = true;
        turnoComputadora(puntosJugador);
    }

});

// Detener juego
btnDetener.addEventListener('click', () => {
    btnDetener.disabled = true;
    btnPedir.disabled   = true;
    turnoComputadora(puntosJugador);
});

// Nuevo juego
btnNuevo.addEventListener('click', () => {
    console.clear();
    // limpia la deck anterior.
    deck.splice(0, deck.length);
    console.log(deck)
    // crea una nueva baraja.
    crearDeck();
    // limpia div cartas de ambos jugadores.
    divCartasJugador.innerHTML = '';
    divCartasComputadora.innerHTML = '';
    // limpia contador de puntos.
    puntopsHTML[0].innerText = 0;
    puntopsHTML[1].innerText = 0;
    // resetea los puntos de los jugadores.
    puntosComputadora = 0;
    puntosJugador = 0;
    console.log(puntosComputadora);
    console.log(puntosJugador);
    // habilita nuevamente botones.
    btnDetener.disabled = false;
    btnPedir.disabled   = false;
});