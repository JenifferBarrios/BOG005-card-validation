import validator from './validator.js';

console.log(validator);


var boton_validar = document.getElementById("botonvalidar") ;
boton_validar.addEventListener("click",mostrarValor)
let ar=[];
function mostrarValor () {
    
    var input_value = document.getElementById("numerotarjeta").value;
    
    ar= Array.from((input_value));
    console.log (ar); 
    let arrayNumero = []
    /*
    for(let i=0; i<ar.length; i++ ){
          const elemento = parseInt(ar[i])
          arrayNumero.push(elemento)
    }
    */
  let reversadelarreglo =ar.reverse();
console.log(ar);
let resultado=0;
for (let i = 0; i < reversadelarreglo.length; i += 2) {
var stringconvertidoanumero = parseInt(reversadelarreglo[i]);
  var dobledelnumero= stringconvertidoanumero*2;
if (dobledelnumero>=10) {
let arraynumerodoble=String(dobledelnumero).split("")
let sumanumerodoble = parseInt(arraynumerodoble[0]) + parseInt(arraynumerodoble[1])
console.log(sumanumerodoble);
}
}
console.log(resultado);


return ar
}



