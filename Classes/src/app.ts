// interface Person{
//     name: string;
//     age: number;

//     greet(phrase: string) : void
// }

// //? cual es la diferencia entre Interface y type
// //*con interface es super claro que queres declarar la estructura de un objeto
// //*y podes poner un interface en una clase
// //! por otro lado el type es mas flexible ya que sirve tambien para hacer union types

// let user1: Person;

// user1 = {
//     name: 'Max',
//     age: 30,
//     greet(phrase: string){
//         console.log(phrase + ' ' + this.name);
//     }
// }

// user1.greet('Hi there - iam');

//type AddFn = (a: number, b: number) => number;
interface AddFn {
    (a: number, b: number): number;//*asi se crea un metodo/funcion anonima dentro de una interfaz
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2
}

interface Named {
    readonly name?: string;
    outputName?: string;//! propiedad opcional

    funcionOpcional?(parametro: number): void//! funcion opcional
}
interface Greetable extends Named {

    greet(phrase: string): void; //
}

class Person implements Greetable {
    name?: string;

    constructor(n: string) {
        if (n) {
            this.name = n; //! esta comprobacion es para no poner valores undefined si es que no se pasa ese dato al ser opcional
        }
    }

    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}

let user1: Greetable;

user1 = new Person("Max");

user1.greet('Hi iam')