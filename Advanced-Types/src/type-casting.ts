//! Type casting
//sirve para decir que un valor es de un valor especifico cuando ts no puede saberlo por si mismo
const userInputElement = document.getElementById('input') as HTMLInputElement;

userInputElement.value = 'Hi there';