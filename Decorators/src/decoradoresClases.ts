function Logger(constructor: Function){
    console.log(constructor);
}

@Logger
class Person {
    name = "Max"

    constructor(){
        console.log('Creando persona');
        
    }
}

const persona1 = new Person();

console.log(persona1);

// convertir lo de arriba en una FABRICA

function Log(logString: string){
    return function (constructor: Function){
        console.log(constructor);
        console.log(logString);
    }
}

@Log("Login")
class PersonaClass {
    name = 'Mikkaa'

    constructor(){
        console.log("Creando a mika");
        
    }
}

const persona2 = new PersonaClass();
console.log(persona2);

/*
Cuando aplicas este decorador a la clase PersonaClass usando @Log("Login"),
lo que realmente está sucediendo es que la función Log se llama con el argumento "Login",
y luego el resultado se aplica a la clase PersonaClass.
Vamos a desglosar lo que hace:*/
/*
Cuando la clase se declara (class PersonaClass), se ejecuta el decorador Log.

constructor en este contexto hace referencia a la función constructora de la clase (PersonaClass).
logString es el parámetro que proporcionas cuando aplicas el decorador ("Login" en este caso).
El decorador imprime el constructor de la clase y el logString.

console.log(constructor); imprime la función constructora de la clase PersonaClass.
console.log(logString); imprime el logString que proporcionaste, que en este caso es "Login".
Cuando creas una instancia de la clase (const persona = new PersonaClass();), se ejecuta el constructor de la clase y se imprime un mensaje.

console.log("Creando a Mika"); imprime el mensaje "Creando a Mika".*/

//! Otro ejemplo 

function Repository(target: Function){
    target.prototype.users = [];

    target.prototype.create = function (entity: object){
        target.prototype.users.push(entity);
    }
}

@Repository
class UserRepository{

}

const user = new UserRepository();

console.log(user);
