const validator = {

  isValid: function(creditCardNumber) { 
    
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
    let reversadelarreglo =ar.reverse(); //Invierte los numeros
    console.log(ar);
  
    const resultadoArray=[];
    const resultadoSuma = 0;
    for (let i = 0; i < reversadelarreglo.length; i ++) {
      const stringconvertidoanumero = parseInt(reversadelarreglo[i]);
      
      if (i % 2 === 0)  {
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
      let resultadoSuma2 = resultadoArray.reduce(function(a,b){
       return a+b
      },0)
      console.log(resultadoSuma2)
      //en resultadoarray estan todos lo numeros 
      if (resultadoSuma2 %10  === 0 ){
        alert ("Tarjeta de Credito Valida") 
       }
     else { 
       alert ("Tarjeta de Credito Invalida") 
     }
     
  
    }





};

export default validator;
