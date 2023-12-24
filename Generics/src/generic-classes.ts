class DataStorage<T extends string | number | object>{
    //? esto sirve para asignar un tipo de dato a todos los items, el tipo no se sabe pero tiene que ser el mismo para todos
    private data: T[] = [];

    addItem(item: T){
        this.data.push(item)
    }

    removeItem(item: T){
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItems(){
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>()//? esto declara que T va a ser string
textStorage.addItem('Saracatunga')//*bien
// textStorage.addItem(10)//!error

const numberStorage = new DataStorage<number>();
numberStorage.addItem(5);


const objStorage = new DataStorage<object>();
objStorage.addItem({nombre:"Juan", edad:32});
objStorage.addItem({nombre: 'pancho', edad: 21});

objStorage.removeItem({nombre: 'Juan', edad: 32});
console.log(objStorage.getItems());

