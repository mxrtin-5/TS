const button = document.querySelector("button")!;
const input1 = document.getElementById('num1')! as HTMLInputElement; //! el ! indica que ese elemento nunca sera null
const input2 = document.getElementById('num2')! as HTMLInputElement; //! el as HTMLInputElement indica a ts que tipo de elemento es

function add (num1: number, num2: number){//! con esta sintaxis le decimos a ts que espera en cada parametro
    return num1 + num2
}

button.addEventListener('click', function(){
    console.log(add(+input1.value, +input2.value));
})