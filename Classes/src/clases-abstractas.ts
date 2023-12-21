abstract class Figura {
    abstract calcularArea(): number; // Método abstracto sin implementación

    obtenerTipo(): string {
        return "Figura";
    }
}

class Cuadrado extends Figura {
    lado: number;

    constructor(lado: number) {
        super();
        this.lado = lado;
    }

    calcularArea(): number {
        return this.lado * this.lado;
    }

    obtenerTipo(): string {
        return "Cuadrado";
    }
}

class Circulo extends Figura {
    radio: number;

    constructor(radio: number) {
        super();
        this.radio = radio;
    }

    calcularArea(): number {
        return Math.PI * this.radio * this.radio;
    }

    obtenerTipo(): string {
        return "Círculo";
    }
}

// No se puede crear una instancia de Figura directamente
// const figura = new Figura(); // Esto generaría un error

// Pero se pueden crear instancias de las clases derivadas
const cuadrado = new Cuadrado(5);
console.log(cuadrado.calcularArea()); // Imprimirá 25
console.log(cuadrado.obtenerTipo()); // Imprimirá "Cuadrado"

const circulo = new Circulo(3);
console.log(circulo.calcularArea()); // Imprimirá aproximadamente 28.27
console.log(circulo.obtenerTipo()); // Imprimirá "Círculo"

/*
La diferencia principal entre usar y no usar la palabra clave abstract en una clase radica en la capacidad
de instanciar objetos directamente desde la clase base y la necesidad de implementar ciertos métodos en las clases derivadas.
*/

//!IMPORTANTE
/*
La palabra clave abstract se utiliza para crear una clase que no puede ser instanciada directamente
pero que puede ser utilizada como una clase base para otras clases (abstractas o no abstractas).
Las clases que heredan de una clase abstracta deben proporcionar implementaciones concretas para los métodos abstractos definidos en la clase base.
 */