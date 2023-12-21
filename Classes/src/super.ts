class Animal {
    protected nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    hacerSonido(): void {
        console.log("Haciendo sonido");
    }
}

class Perro extends Animal {
    private raza: string;

    constructor(nombre: string, raza: string) {
        super(nombre);
        this.raza = raza;
    }

    hacerSonido(): void {
        super.hacerSonido();
        console.log("Guau guau");
    }

    obtenerDescripcion(): string {
        return `Nombre: ${this.nombre}, Raza: ${this.raza}`;
    }
}

const miPerro = new Perro("Buddy", "Labrador");
miPerro.hacerSonido(); // Llamando al método sobreescrito, imprimirá "Haciendo sonido" y "Guau guau"
console.log(miPerro.obtenerDescripcion()); // Imprimirá "Nombre: Buddy, Raza: Labrador"

/*
La palabra clave super en TypeScript (y en otros lenguajes de programación orientada a objetos) se utiliza para llamar a los métodos y propiedades de la clase padre desde una clase hija.
Se usa dentro de los métodos de la clase hija para referirse a la implementación de la clase padre.
*/