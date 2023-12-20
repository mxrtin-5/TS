function add(n1: number, n2: number, showResult: boolean, phrase: string) {

    const result = n1 + n2; //! esto se hace para que no se convierta todo en string en la linea de abajo con phrase

    if (showResult) {
        console.log(phrase + result);
    } else {
        return n1 + n2
    }
}

const number1 = 5 //* se puede poner el tipo aqui pero seria redundante ya que ts entiende que es un number
//? pero en que casos si es necesario?
//*cuando por ejemplo declaramos una variable pero no le asignamos un valor
// let numero;//! aca ts no entiende si numero es un number o si es un boolean asi que conviene asignarle un tipo
let numero: number;
numero = 20
const number2 = 2.8
const printResult = true
const resultPhrase = 'Result is '
// resultPhrase = 0 //! esto tira error ya que entiende que es un string y no un number

const result = add(number1, number2, printResult, resultPhrase)


