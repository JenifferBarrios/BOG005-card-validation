const validator = {

  isValid: function (creditCardNumber) {


    let ar = Array.from((creditCardNumber));
    console.log(ar);
    let arrayNumero = []
    
    let reversadelarreglo = ar.reverse(); //Invierte los numeros
    console.log(ar);

    const resultadoArray = [];
    const resultadoSuma = 0;
    for (let i = 0; i < reversadelarreglo.length; i++) {
      const stringconvertidoanumero = parseInt(reversadelarreglo[i]);

      if (i % 2 !== 0) {
        const dobledelnumero = stringconvertidoanumero * 2;
        if (dobledelnumero > 9) {
          const arraynumerodoble = String(dobledelnumero).split("")
          const sumanumerodoble = parseInt(arraynumerodoble[0]) + parseInt(arraynumerodoble[1])
          resultadoArray.push(sumanumerodoble)
        } else {
          resultadoArray.push(dobledelnumero)
        }
      } else {
        resultadoArray.push(stringconvertidoanumero);
      }

    };
    console.log(resultadoArray);

    // sumo los valores dentro del array con el metodo reduce
    let resultadoSuma2 = resultadoArray.reduce(function (a, b) {
      return a + b
    }, 0)
    console.log(resultadoSuma2)
    //en resultadoarray estan todos lo numeros 
    if (resultadoSuma2 % 10 === 0) {
      return true
      // alert("Tarjeta de Credito Valida")
    }
    else {
      return false
      // alert("Tarjeta de Credito Invalida")
    }

  },
  // creo maskify
  // paso 1 - Crear funcion para reemplazar caracteres de un texto con una mascara
  //texto=creditCardNumber 4940190000370787
  //mascara= #
  //n=12 numero de caracteres a reemplazar con #
  //resultado = ############0787
  maskify: function (creditCardNumber) {
  var numeroMaskify 
  var numerosACambiar = creditCardNumber.slice(0,-4).replace(/\w/g, "#")
  console.log(numerosACambiar)
  var numerosFijos = creditCardNumber.slice(-4) 
  console.log(numerosFijos)
  numeroMaskify= numerosACambiar +  numerosFijos ;
  console.log(numeroMaskify)
      return numeroMaskify
    
  }

    
    

      

};

export default validator;
