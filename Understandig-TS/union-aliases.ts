type Combinable = number | string
type ConversorDescription = 'as-number' | 'as-text'
//*type aliases

function combinar(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversorDescription
    ) {

    let result;

    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        result = +input1 + +input2; 
    }else{
        result = input1.toString() + input2.toString();
    }
    return result
}

console.log(combinar(30, 26, 'as-number'));

console.log(combinar('90', '20', 'as-number'));

console.log(combine('Max', 'Anna', 'as-text'));
