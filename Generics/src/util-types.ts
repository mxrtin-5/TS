//*Partial
interface CourseGoal{
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal{
    let courseGoal: Partial <CourseGoal> = {};//? esto le dice a ts que esto es un objeto {} que que al final sera un CourseGoal pero inicialmente el Partial agarra CourseGoal, lo cambia a un Type y hace que todos los datos sean opcionales
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;

    return courseGoal as CourseGoal//? se hace esto pq sabemos con la logica que para cuando se retorne va a ser de tipo CourseGoal, y no un partial
}

//? sirve para temporalmente hacer un typo o interface tenga propiedades opcionales

//* ReadOnly

const nombres: Readonly<string[]> = [ "Max", 'Anna'] //? asi le decimos que nombres sea readonly y que sea de tipo array de strings
// nombres.push('sexo')//!esto da error