// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    var numeros = [1,2,3,4,5,6,7,8,9,10];
    var total = 0;
    var resultado = numeros.reduce (function (total, elemento){
      return total + elemento;
    });
    return (resultado);
  
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  var arraypar = [];
    for (var i = 0; i <= array.length; i++){
        var resto = array[i] % 2;
        if (resto === 0){
            arraypar.push(array[i]);
        }
    }
    return arraypar;
}


function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  var resultado = array.map (function (elemento) {
    return elemento ** 2;
});
return resultado;
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  var total = 0;
  var resultado = array.reduce(function (total, elemento) {
    return total + elemento;
});
return resultado;
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  let contador = 0;
  while (num >= 1){
    contador = contador + 1;
    num = num / 10;
  }
  return contador;
  }

  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
