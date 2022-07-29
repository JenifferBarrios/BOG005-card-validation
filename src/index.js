import validator from './validator.js';

console.log(validator);
function mostrarValor(){
     var input_value = document.getElementById("numerotarjeta").value;
     validator.isValid(input_value)
}

var boton_validar = document.getElementById("botonvalidar") ;
boton_validar.addEventListener("click",mostrarValor) ;


