import validator from './validator.js';

console.log(validator);


var boton_validar = document.getElementById("botonvalidar") ;
boton_validar.addEventListener("click",mostrarValor) ;
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

  const resultadoArray=[];
  const resultadoSuma = 0;
  for (let i = 0; i < reversadelarreglo.length; i += 1) {
    const stringconvertidoanumero = parseInt(reversadelarreglo[i]);
    if (i % 2 === 0)  {
      const dobledelnumero = stringconvertidoanumero * 2;
      if (dobledelnumero >= 10) {
        const arraynumerodoble = String(dobledelnumero).split("")
        const sumanumerodoble = parseInt(arraynumerodoble[0]) + parseInt(arraynumerodoble[1])
        resultadoArray.push(sumanumerodoble)
      } else {
        resultadoArray.push(stringconvertidoanumero)
      }
    } else {
      resultadoArray.push(stringconvertidoanumero);
    }
     
    };
    console.log(resultadoArray);
    //en resultadoarray estan todos lo numeros 
  }
  
    // recorrer resultadoArray e ir sumando todos los elementos a resultadoSuma
    resultadoSuma = resultadoArray.reduce()
  // verificar si el resultadoSuma es multiplo de 10
  // retornar verdadero o falso segun la verificacion previa
