//Las llaves siempre referenciarlos a un objeto,
//esto seria un tipo de diccionario en python.
//Para que el objeto sea intangible o inmodificable se podria 
//definir bajo const(solo con asignaciones directas al objeto).
let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California',
    },
    'ultima-pelicula': 'Infinity War'
};

console.log(personaje)
console.log('Nombre',personaje.nombre);
console.log('Nombre',personaje['nombre']);
console.log('Edad',personaje.edad);
console.log('Coords',personaje.coords);
console.log('Lat',personaje.coords.lat);
console.log('No. Trajes', personaje.trajes.length);
console.log('No. Trajes', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);
console.log('Ultima pelicula', personaje['ultima-pelicula']);

//Mas detalles del

//Eliminar propiedad del objeto

delete personaje.edad;

//Para anadir parametros al objeto

personaje.casado = true;


//Convertir en pares de valores, util en caso de barrer la lista y necesitar cada valor
const entriesPares = Object.entries( personaje );
console.log(entriesPares);

//Para bloquear objeto se utiliza freeze. esto solo aplica a asisgnasiones directas,
//ya que no bloquea a los objetos que se encuentren dentro de este objeto.
Object.freeze( personaje );

personaje.dinero = 1000000;
personaje.casado = false;
personaje.direccion.ubicacion = 'Costa Rica';
console.log( personaje );


// Para obtener listado de todas las propiedades.

const propiedades = Object.getOwnPropertyNames( personaje );
const valores = Object.values( personaje );
console.log(propiedades, valores);