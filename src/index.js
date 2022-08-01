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
    //let resultadoOculto = validator.maskify(input_value)
    //console.log(validator.maskify(input_value.value));
    //validator.maskify(input_value.value)
    //input_value.value=validator.maskify(input_value.value)
}

var boton_validar = document.getElementById("botonvalidar");
boton_validar.addEventListener("click", mostrarValor);


