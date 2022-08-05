const validator = {

  isValid: function (creditCardNumber) {
    let ar = Array.from((creditCardNumber));
    let arrayNumero = []
    let reversadelarreglo = ar.reverse();
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
    

    // sumo los valores dentro del array con el metodo reduce
    let resultadoSuma2 = resultadoArray.reduce(function (a, b) {
      return a + b
    }, 0)
    console.log(resultadoSuma2)
    //en resultadoarray estan todos lo numeros 
    if (resultadoSuma2 % 10 === 0) {
      return true

    }
    else {
      return false

    }

  },
  maskify: function (creditCardNumber) {
    var numeroMaskify
    var numerosACambiar = creditCardNumber.slice(0, -4).replace(/\w/g, "#")
    var numerosFijos = creditCardNumber.slice(-4)
    numeroMaskify = numerosACambiar + numerosFijos;
    return numeroMaskify
  }
}
export default validator;
