const names: Array<string> = ['Max', 'Manuel']; //? Array es un tipo generico, asi como poner Object
//? es generico ya que especifica que lo que se espera es un array, pero no array de que datos espera
names[0].split(' ');

const promise: Promise<string> = new Promise((res) => { //? se hace el Promise<string> ya que es un dato de tipo promesa
    //? que se resuelve en string
    setTimeout(() =>{
        res('Hello World');//? <--------- aca
    }, 2000)
});

promise.then(data =>{
    data.split(' ');
});

function merge<T, U> (objA: T, objB: U){
    return Object.assign(objA, objB);
}

const mergeObj = merge<{name: string, hobbies: string[]}, {age:number}>({ name: "Max", hobbies: ['Sports'] }, { age: 30 });
