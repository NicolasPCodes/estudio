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
// clase heroe que extiende de persona. esta seria una clase con herencia, osea esta seria 
// la clase hijo y Persona seria la clase padre.
class Heroe extends Persona {

    clan = 'sin clan';
    
    constructor(nombre, codigo, frase){
        // esta palabra reservada, hara referencia a la clase que extiende directamente.
        // este super siempre ira primero o antes que las menciones this.
        super(nombre, codigo, frase);

        this.clan = 'Los Avengers';
    }

    quienSoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }

}

const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Soy tu amigable vecino spiderman');
console.log( spiderman );
spiderman.quienSoy();