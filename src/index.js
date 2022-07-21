import validator from './validator.js';

console.log(validator);


var boton_validar = document.getElementById("botonvalidar") ;
boton_validar.addEventListener("click",mostrarValor)

function mostrarValor () {
    var input_value = document.getElementById("numerotarjeta").value;
    
    let ar= Array.from((input_value));
    console.log (ar); 
    let arrayNumero = []
    for(let i=0; i<ar.length; i++ ){
          const elemento = parseInt(ar[i])
          arrayNumero.push(elemento)
    }
    console.log(arrayNumero)
    
}