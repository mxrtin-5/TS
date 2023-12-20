var userInput;
//? por que usaria unknow en lugar de any
//*es bueno cuando no sabes que tipo de dato se va a almacenar pero si sabes que vas a hacer con el dato
var userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') { //! hacer comprobacion para asegurarse que userInput sea un string y asi poder asignarle el valor de userName
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, codeError: code };
}
generateError('Ocurrio un error', 500);
