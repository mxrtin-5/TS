class MiSingleton {
    private static instancia: MiSingleton | null = null;
    //? mantiene la única instancia de la clase.
    private constructor() {
        //? El constructor es privado para evitar la creación de instancias directas
    }

    static obtenerInstancia(): MiSingleton {
        if (!MiSingleton.instancia) {
            MiSingleton.instancia = new MiSingleton();
        }
        //?se utiliza para obtener la instancia única. Si la instancia aún no existe, se crea
        //?de lo contrario, se devuelve la instancia existente.
        return MiSingleton.instancia;
    }

    // Otros métodos y propiedades de la clase pueden ir aquí
}

// No se puede crear una instancia directa de MiSingleton
// const instanciaDirecta = new MiSingleton(); // Esto generará un error

// Obtener la instancia única a través del método estático
const instance1 = MiSingleton.obtenerInstancia();
const instance2 = MiSingleton.obtenerInstancia();

console.log(instancia1 === instancia2); // Ambas referencias apuntan a la misma instancia, imprimirá true

//?info
/*
Un singleton es un patrón de diseño que se utiliza para garantizar que una clase tenga una única instancia y proporciona un punto de acceso global a esa instancia.
En otras palabras, un singleton garantiza que solo haya una instancia de una clase particular en un programa y proporciona un método para acceder a esa instancia desde cualquier lugar.
*/

//*La forma mas comun de hacerlo es con un constructor privado y un metodo estatico 


/*
El uso de singletons puede ser útil en situaciones donde necesitas tener una única instancia de una clase en toda tu aplicación. Algunos casos de uso comunes incluyen la gestión de configuraciones, la conexión a bases de datos, o la gestión de recursos compartidos. Sin embargo, es importante usar singletons con moderación, ya que pueden introducir acoplamiento global y hacer que el código sea menos flexible y más difícil de probar.
*/