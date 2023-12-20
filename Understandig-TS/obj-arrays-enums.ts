// const person: {
//     name: string
//     age: number
//     gender: string
// } = {
// const person : {
//     name: string,
//     age: number,
//     gender: string
//     hobbies:string[]
//     role: [number, string] //! TUPLA

// }

enum Role{
    ADMINISTRATOR,
    USER,
    AUTHOR 
}

const person = {
    name: 'Penelope',
    age: 20,
    gender: 'female',
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR
}

console.log(person.age);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}
