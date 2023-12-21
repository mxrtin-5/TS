//*Propiedades estaticas

class MiClase {
    static contador: number = 0;//? al definir la funcion como static, esta pertenece a la clase
    //?por ende se actualiza en la clase, o sea que si se ejecuta en diferentes instancias, los valores en dichas instancias no son los mismos
    //? ya que se actualiza en la clase

    constructor() {
        MiClase.contador++;
    }

    obtenerContador(): number {
        return MiClase.contador;
    }
}

const instancia1 = new MiClase();
console.log(instancia1.obtenerContador()); // Imprimirá 1

const instancia2 = new MiClase();
console.log(instancia2.obtenerContador()); // Imprimirá 2

//*Metodos estaticos

class Utilidades {
    static sumar(a: number, b: number): number {
        return a + b;
    }
}

const resultado = Utilidades.sumar(3, 5);
console.log(resultado); // Imprimirá 8

//* a demas podemos acceder al metodo estatico sin necesidad de crear una instancia
//? asi seria si no se usara el static

class UtilidadesSinStatic {
    sumar(a: number, b: number): number {
        return a + b;
    }
}

// Crear una instancia de la clase UtilidadesSinStatic
const utilidadesInstancia = new UtilidadesSinStatic();

// Llamar al método sumar en la instancia
const result = utilidadesInstancia.sumar(3, 5);
console.log(result); // Imprimirá 8

/*
Cuándo usar static:
Cuando necesitas compartir datos entre todas las instancias de una clase.
Cuando quieres proporcionar métodos utilitarios que no dependen del estado de la instancia.
*/