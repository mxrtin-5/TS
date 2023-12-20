class Department {
    protected employees: string[] = [];

    constructor(private readonly id: string, private name:string) {
    }

    describe(this: Department) {//! SUPER IMPORTANTE
        //*Lo que se dice con esto es que cuando describe() se ejecuta lo que este dentro de el metodo
        //* debe siempre referir a una instancia que se base en, en este caso la clase Department, tal como se ve en el this: Department
        console.log(`Department ${this.id}: ${this.name}`);//! El this como parametro en un metodo dentro de un constructor es una palabra clave
    }

    addEmployee(employee: string){
        this.employees.push(employee)
    }

    printEmployeeInfo(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

// const newDep = new Department("Sigma")
// console.log(newDep);

const accounting = new Department("1", 'accounting')

accounting.describe()

const accCopy = {describe: accounting.describe};

// accCopy.describe()//!esto tira error ya que el this de describe que se declara arriba no hace referencia a una instancia de Department
//!por ende el describe(this: Department) seria violado ya que en este caso no referiria un objeto de tipo Department

//* esto se puede arreglar asi
// const accCopyWork = { name: "Sexo", describe:accounting.describe}
// accCopyWork.describe()

accounting.addEmployee('max');
accounting.addEmployee('Eve');

// accounting.employees[2] = 'anna' //!No esta bueno que haya mas alternativas para agregar valores, ya que puede romper con la logica
//? al agregar el private a employee en el class, employee ahora es solo accesible por dentro de la class, para asi no poder trabajar con el por fuera
//? tambien sirve para metodos


accounting.printEmployeeInfo()

/*----------------------------------------------------------------- */

class ExtendDepartment extends Department{
    constructor(id: string, public admins: string[]){
        super(id, 'IT')//! estos son los datos que se le pasan a los parametros id y name en la linea 4
    }
}

const prueba = new ExtendDepartment('d1', ["Max"])

prueba.addEmployee('Prueba employee');
prueba.addEmployee('MIKA');

prueba.describe()

prueba.printEmployeeInfo()

console.log(prueba);

class AccountingDepartment extends Department{
    private lastReport: string;

    get mostRecentReport(){
        if(this.lastReport){
            return this.lastReport
        }
        throw new Error('No Report found')
    }

    set mostRecentReport(value: string){
        if(!value){
            throw new Error('Error aca')
        }
        this.addReports(value)

    }

    constructor(id: string, private reports: string[]){
        super(id, 'Accounting');
        this.lastReport = reports[0]
    }

    addEmployee(employee: string){
        if( employee === 'Max'){
            return;
        }
        this.employees.push(employee);
    }

    addReports(text: string){
        this.reports.push(text)
        this.lastReport = text
    }

    printReports() {
        console.log(this.reports);
    }
}

const pruebaAcc = new AccountingDepartment('d2', []);

pruebaAcc.mostRecentReport = 'Mikaelaaaa'

pruebaAcc.mostRecentReport = 'No se pero pruebp'

pruebaAcc.addReports('Peneee');

console.log(pruebaAcc.mostRecentReport);

pruebaAcc.addEmployee('Max');

pruebaAcc.addEmployee('Saracatunga');

pruebaAcc.printReports();

pruebaAcc.printEmployeeInfo()