// const btn = document.querySelector('button')!;//! esta opcion es la mas corta pero no la mejor
const btn = document.querySelector('button');

//*lo mejor es hacer una comprobacion
if(btn){
    btn.addEventListener("click", () =>{
        console.log('click');
    })
}

//* esto comprueba qie btn sea truthy, y null es falsy