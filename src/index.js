import validator from './validator.js';

console.log(validator);
function mostrarValor() {
     var input_value = document.getElementById("numerotarjeta").value;
     let validaciontarjeta = validator.isValid(input_value)
     if (validaciontarjeta == true) {
          alert("Tu tarjeta es Valida")
     } else {
          alert("Tu Tarjeta No es Válida")
     }
}

var boton_validar = document.getElementById("botonvalidar");
boton_validar.addEventListener("click", mostrarValor);


