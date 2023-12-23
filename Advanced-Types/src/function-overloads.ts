
type Combinables = string | number;
type Numerico = number | boolean

function add(a: number, b: number): number
function add(a: string, b: string): string

function add(a: Combinables, b: Combinables) {
    if (typeof a === 'string' || typeof b === 'string') { //? type guard
        return a.toString() + b.toString()
    }
    return a + b
}

const resultado = add("Max", "Pene");
resultado.split(' ')

