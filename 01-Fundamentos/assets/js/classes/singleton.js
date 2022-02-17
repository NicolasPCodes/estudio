// es una clase unica, la intencion es garantizar que una clase solo tenga una instancia y asigna la cl
// proporsionar un acceso global a ella. 

class Singleton {
    // instancia inicializada de la clase 
    static instancia; // Undefined
    nombre = 'nombre';
    
    constructor( nombre = ''){
        // ! = True
        // !! = False
        if( !!Singleton.instancia ){
            return Singleton.instancia;
        }
        // esta haciendo referencia a esta instancia de la clas.
        Singleton.instancia = this;
        this.nombre = nombre;


    }

}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');

console.log(`El superheroe es:${instancia1.nombre}`);
console.log(`El superheroe es:${instancia2.nombre}`);

// lo que sirve es para ahorrar memoria, y finalmente siempre apuntara al mismo objeto creado.