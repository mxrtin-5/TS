function add(n1: number, n2: number){
    return n1 + n2
}

function mostrarResultado(num: number) : void{ //*se usa el void para indicar que la funcion no retorna nada
    console.log('resultado: ', num);
}

function addAndHandle(n1: number, n2: number, callback: (num: number) => void){ //? callback espera una funcion de un parametro de tipo number que puede no retornar nada (void)
    const result = n1 + n2;
    callback(result)
}

mostrarResultado(add(5, 12));

// let valoresCombinados: Function;//* se le asigna un tipo a la variable

let valoresCombinados: (a: number, b: number) => number; //*asi le decimos que valoresCombinados es de tipo funcion que recibe 2 valores, que esos valores son number y retorna un numero

valoresCombinados = add;
// valoresCombinados = 5;//* y asi no asigna un numero a una funcion
// valoresCombinados = mostrarResultado;//* esto da error ya que no se puede asignar una funcion de un parametro que retorna void, a una que espera dos parametros y retorno de number

addAndHandle(20, 54, (result) => {
    console.log(result);
})