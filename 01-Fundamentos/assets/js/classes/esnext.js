

class Rectangulo { 
    // una posible solucion es usar el # un ejemplo seria #area
    area = 0;

    constructor(base = 0, altura =0){
        this.base = base;
        this.altura = altura;
        this.area = base * altura;
    }
}

const rectangulo = new Rectangulo(10, 15);

console.log(rectangulo);