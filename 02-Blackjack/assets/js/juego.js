/**
 * 2C = Two of Clubs    (Trebol) 
 * 2D = Two of Diamonds (Diamantes) 
 * 2H = Two of Hearths  (Corazones)
 * 2S = Two of Spades   (Picas o espadas)
 */

let deck = [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

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

    // console.log({deck});
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}

// crearDeck();

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
    console.log(deck);
    // console.log(carta); // carta debe ser de la baraja
    return carta;

}

// pedirCarta();