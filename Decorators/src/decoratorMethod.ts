// Decorador de Método
function WithTemplate(template: string, hookId: string) {
    return function (constructor: any) {
        console.log("Template");
        
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
        }
    }
}

function AnotherDecorator(logString: string){
    return function (constructor: Function){
        console.log(constructor);
        console.log(logString);
    }
}
@AnotherDecorator('Penis')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Personas {
    name = 'Max';

    constructor() {
        console.log('Creating person object...');
    }
}

const pers = new Personas();

console.log(pers);
