

const fher = {
    nombre: 'Fernando', 
    edad: 30,
    // para llamar variables que esten dentro de este objeto, se tiene que llamar con this. y el nombre del
    // de la variable. y es un metodo lo siguiente.
    imprimir() {
        console.log(`Nombre: ${ this.nombre } - Edad: ${ this.edad }`);
    }
}

const pedro = {
    nombre: 'Pedro', 
    edad: 15,
    imprimir() {
        console.log(`Nombre: ${ this.nombre } - Edad: ${ this.edad }`);
    }
}

// fher.imprimir();
// funcion comun y corriente, pero este tiene una mayuscula al empezar, y esto significa que nos servira para crear instancias
// se ocupa con el new, y esta forma ya no se utiliza.
function Persona(nombre, edad){
    console.log('Se ejecutó esta linea');

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function() {
        console.log(`Nombre: ${ this.nombre } - Edad: ${ this.edad }`);
    }

}

// la palabra 'new' nos dice que se quiere crear una nueva instancia. con este metodo.
// el prototype nos dice que el objeto sabe de quien depende. o de quien a sido su herencia.
const maria = new Persona('María', 18);
const melissa = new Persona('Melissa', 35);
// console.log( maria );
maria.imprimir();
melissa.imprimir();