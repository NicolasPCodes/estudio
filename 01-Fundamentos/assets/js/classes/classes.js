
// siempre es recomendable comenzar con mayuscula y hacer cummerCase
class Persona {
    // static que no se vera a la hora de llamar a la clase.
    // las propiedades staticas no trabaja con clase instanciada
    // sino con estructura y metodos staticos.
    // siempre las propiedades staticas deben ir luego de definir la clase.
    static _conteo = 0;
    static get conteo(){
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        console.log('Hola a todos, soy un método stático');
    }
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor( nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase' ) {

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;

    }

    // los set and getters se colocan entre el constructor y las funciones.
    set setComidaFavorita( comida ){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es: ${this.comida}`;
    }

    quienSoy(){
        console.log(`Soy ${ this.nombre } y me conocen como ${ this.codigo }`);
    }

    miFrase(){
        console.log(`${ this.codigo} dice: ${ this.frase }`);
    }
}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino spiderman');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');
// console.log( ironman );

spiderman.miFrase();
// ironman.miFrase();

spiderman.setComidaFavorita = 'El pie de cereza de la tía May';

// console.log(spiderman.getComidaFavorita);

// console.log( spiderman );
console.log(`Conteo stático`, Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();