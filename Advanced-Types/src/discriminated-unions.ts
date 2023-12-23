;//! Discriminated Unions
//? este es un ejemplo de uso con interfaces o objetos que estan ligeramente relacionados pero son diferentes
interface Bird {
    type: 'Bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'Horse'
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {

    let speed;

    switch (animal.type){
        case "Bird":
            speed = animal.flyingSpeed
            break
        case "Horse":
            speed = animal.runningSpeed
            break;
    }
    console.log("Moving at speed " + speed);
    //? no se puede acceder a flyingSpeed o a runningSpeed pq no todos tienen estos campos
}

moveAnimal({type: 'Horse', runningSpeed: 1000});