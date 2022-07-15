import validator from './validator.js';

console.log(validator);


var boton_validar = document.getElementById("ev") ;
console.log(boton_validar);




function mostrarValor () {
    var input_value = document.getElementById("nt").value;
    console.log(input_value);
  }
  
boton_validar.addEventListener("click",mostrarValor)



