//? caso donde se manejo usuarios
interface ErrorContainer{
    [prop: string]: string; //? esto indica que tiene una cantidad indefinida de props que son strings
}

const errBag: ErrorContainer ={
    email: 'Not a valid Email',
    username: 'Must start with a capital letter',
    password: "Password must contain at least 8 characters"
}
