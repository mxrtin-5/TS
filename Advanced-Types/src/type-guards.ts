type Admin = {
    name: string;
    priveleges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee //<-----

const e1: ElevatedEmployee = {
    name: "Max",
    priveleges: ['create-server'],
    startDate: new Date(),
}

type Combinable = string | number;
type Numeric = number | boolean

function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') { //? type guard
        return
    }
    return a + b
}

type UnknownEmployee = Employee | Admin;

//? type guard ejemplo
function printEmployeeInfo(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if ('priveleges' in emp) {
        console.log("Privileges: " + emp.priveleges);
    }
    if ('startDate' in emp){
        console.log('Start Date ' + emp.startDate);
    }
}

printEmployeeInfo(e1)


//?type guard ejemplo instanceOf

class Car{
    drive(){
        console.log("Driving a car");
    }
}

class Truck {
    drive(){
        console.log("Driving a  truckk");
    }

    loadCargo(amount: number){
        console.log("Loading cargo ... " + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
    vehicle.drive()
    if (vehicle instanceof Truck){
        vehicle.loadCargo(1000)
    }//? esto checkea si vehicle es una instancia creada con base en el constructor Truck
    
}

//? en este ejemplo en la funcion useVehicle, vehicle no tiene el metodo loadCargo
//? ya que no es un metodo que este en Car pero si esta en Truck
//? por el contrario drive esta en ambas classes
//! por ende necesitamos checkear, se puede hacer como vimos arriba o de esta otra manera


