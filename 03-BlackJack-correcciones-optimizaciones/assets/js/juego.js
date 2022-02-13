
// comenzamos creando el patron modulo.
// funcion anonima = crea un nuevo scope el cual no tiene referencia por nombre 
// lo que no permite llamarla facilmente. esta se crea y ejecuta automaticamente.
// siempre que se utilice el patron modulo utilizar el 'use strict' para evitar errores.
const miModulo = (() => {
    'use strict';
    
    let deck = [];
    const tipos = ['C','D','H','S'],
          especiales = ['A','J','Q','K'];
    
    let puntosJugadores = [];
    // Referencias de HTML
    const btnNuevo = document.querySelector('#btnNuevo'),
          btnPedir = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          puntopsHTML = document.querySelectorAll('small'),
          divCartasJugadores = document.querySelectorAll('.divCartas');
    
    // Funcion inicia el juego
    const inicializarJuego = ( numJugadores = 2) => {
        deck = crearDeck();

        puntosJugadores = [];
        for( let i = 0; i < numJugadores; i++){
            puntosJugadores.push(0);
        }

        // limpia contador de puntos.
        puntopsHTML.forEach( elem => elem.innerText = 0);
        // limpia div cartas de ambos jugadores.
        divCartasJugadores.forEach( elem => elem.innerHTML = '');
        // habilita nuevamente botones.
        btnDetener.disabled = false;
        btnPedir.disabled   = false;
    }

    // Creando la baraja
    const crearDeck = () => {
        deck = [];
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
        return _.shuffle(deck);
    }

    //Funcion para tomar carta.
    const pedirCarta = () => {
    
        if( deck.length === 0 ){
            throw 'NO HAY CARTAS EN EL DECK'//MENSAJE DE CONSOLA
        }
        return deck.pop();
    
    }

    const valorCarta = ( carta ) => {
        //subString primero se define la posicion que se quiere conservar y luego hasta donde se quiere conservar
        const valor = carta.substring(0, carta.length - 1);
        // isNaN = is not a number, evalua lo que esta entre parentesis y evalua si es un numero o no
        // devolvera un true si no es un numero
        return ( isNaN( valor )) ?
                ( valor === 'A') ? 11 : 10
                : valor * 1;
    }
    // Turno: 0 = primer jugador y el ultimo es la computadora
    const acumularPuntos = ( carta, turno ) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
        puntopsHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }

    const crearCarta = (carta, turno ) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('cartas');
        divCartasJugadores[turno].append(imgCarta);
    }
    
    const determinarGanador = () => {
        // destructurar arreglo
        const [puntosMinimos, puntosComputadora] = puntosJugadores;

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
    // turno de la computadora.
    const turnoComputadora = ( puntosMinimos ) => {
        
        let puntosComputadora = 0;

        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
            crearCarta(carta, puntosJugadores.length - 1)
    
            if( puntosMinimos > 21){
                break;
            }
        } while( (puntosComputadora < puntosMinimos) &&(puntosMinimos <= 21 ) );

        determinarGanador();
    }
    
    // Eventos
    
    btnPedir.addEventListener('click', () => {
    
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0);
        
        crearCarta(carta, 0);
    
        if ( puntosJugador > 21 ){
            console.warn('YOU LOSE');
            turnoComputadora(puntosJugador);
            btnDetener.disabled = true;
            btnPedir.disabled   = true;
    
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
        turnoComputadora(puntosJugadores[0]);
    });
    
    // Nuevo juego
    btnNuevo.addEventListener('click', () => {

        inicializarJuego();
        
    });

    // todo lo que se retorne aqui sera lo unico que sera publico, todo lo demas sera privado
    return {
        nuevoJuego: inicializarJuego
    };
})();




