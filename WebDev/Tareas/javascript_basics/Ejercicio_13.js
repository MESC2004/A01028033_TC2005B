// Escribe una función que tome una lista de cadenas de texto y devuelva la cadena más frecuente.

function cadenaMasFrecuente(lista) {
  let cadenaActual = "";
  let contadorActual = 0;
  let cadenaMasFrecuente = "";
  for (let i = 0; i < lista.length; i++) {
    let cadena = lista[i];
    let contador = 0;
    for (let j = 0; j < lista.length; j++) {
      if (cadena == lista[j]) {
        contador++;
      }
    }
    if (contador > contadorActual) {
      cadenaActual = cadena;
      contadorActual = contador;
    }
  }
  return cadenaActual;
}

console.log(cadenaMasFrecuente(["hola", "hola", "mundo", "hola", "mundo", "mundo", "mundo"])); // mundo
console.log(cadenaMasFrecuente(["hola", "hola", "mundo", "hola", "mundo", "mundo", "mundo", "hola", "hola"])); // hola
console.log(cadenaMasFrecuente(["hola", "hola", "mundo", "hola", "mundo", "mundo", "mundo", "hola", "hola", "hola"])); // hola
