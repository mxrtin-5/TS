var button = document.querySelector("button");
var input1 = document.getElementById('num1'); //! el ! indica que ese elemento nunca sera null
var input2 = document.getElementById('num2'); //! el as HTMLInputElement indica a ts que tipo de elemento es
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener('click', function () {
    console.log(add(+input1.value, +input2.value));
});
