/*
Union types y generic types son dos conceptos distintos en TypeScript, y cada uno se utiliza para abordar diferentes situaciones en el diseño y desarrollo de software.

Union Types:
Definición: Un tipo de unión representa un valor que puede ser de uno de varios tipos. Se utiliza el operador de unión (|) para combinar varios tipos en uno solo.
*/

// Unión de tipos
type Result = number | string;

function getResult(value: number | string): Result {
    return value;
}

let myResult: Result = 42; // Válido
myResult = "Hello";       // Válido
// myResult = true;           //! Inválido, ya que boolean no está en la unión

/*
Generic Types:
Definición: Los tipos genéricos son una forma de escribir código que es independiente del tipo de datos específico que se utiliza. Permiten crear funciones y clases que trabajan con cualquier tipo de datos, proporcionando flexibilidad y reutilización del código.
*/

function identity<T>(arg: T): T {
    return arg;
}

let result = identity<string>("Hello"); // El tipo T se infiere como string
let numberResult = identity(42);        // El tipo T se infiere como number

/*
Aquí, identity es una función genérica que toma un argumento de tipo T y devuelve el mismo tipo. Al llamar a identity<string>("Hello"), TypeScript infiere que T es string, y en identity(42), infiere que T es number.*/

/*
Diferencias clave:
Propósito:

Union Types: Se utilizan para representar un valor que puede ser de varios tipos concretos.
Generic Types: Se utilizan para escribir código que funciona con varios tipos sin especificar el tipo concreto de antemano.
Flexibilidad:

Union Types: Permiten expresar combinaciones de tipos específicos.
Generic Types: Permiten escribir código que funciona con una variedad de tipos de manera más abstracta.
Ejemplo:

Union Types: number | string representa un valor que puede ser un número o una cadena.
Generic Types: <T>(arg: T): T representa una función que puede trabajar con cualquier tipo T.*/