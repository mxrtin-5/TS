
function merge<T extends object, U extends object> (objA: T, objB: U){
    return Object.assign({}, objA, objB);
}

const mergeObj = merge<{name: string, hobbies: string[]}, {age:number}>({ name: "Max", hobbies: ['Sports'] }, { age: 30 });//* este funciona
// const mergeObj2 = merge<{name: string, hobbies: string[]}, {age:number}>({ name: "Pene", hobbies: ['Si'] }, 30);//! esto tira error 

interface Lenghty{
    length: number
}

function countAndPrint<T extends Lenghty>(element: T): [T, string]{
    let description = 'Got no value'
    if (element.length > 0){
        description = 'Got ' + element.length + " Elements"
    }
    return [ element, description ]
}

console.log(countAndPrint(['penelope', 'saracatunga']));

