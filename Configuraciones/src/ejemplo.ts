console.log("pijaaaaa en ejemplo");

let number: number;
number = 6;

console.log(number);

//? ejemplo para noImplicitReturns

function add(n1: number, n2: number) {
    if (n1 + n2 > 2) {//! esto retorna error en compilacion pq no siempre retorna algo
        return n1 + n2//?como se soluciona?
    }
    return //! tenes que aclarar que retorna nada por defecto
}

