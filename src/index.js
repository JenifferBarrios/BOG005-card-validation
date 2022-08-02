import validator from './validator.js';
function mostrarValor() {
     var input_value = document.getElementById("numerotarjeta").value;
     var validaciontarjeta = validator.isValid(input_value)
     if (validaciontarjeta == true) {
          const maskValue = validator.maskify(input_value)
          document.getElementById("numerotarjeta").value = maskValue
          alert("Tu tarjeta es Valida")
     } else {
          alert("Tu Tarjeta No es Válida")
     }
}
document.getElementById("botonvalidar").addEventListener("click", mostrarValor)