// Escribe una función que reciba como parámetro una lista de cadenas de texto, y regrese la longitud de la cadena más corta.

function shortestString(list) {
  let shortest = list[0];
  for (let i = 0; i < list.length; i++) {
    if (list[i].length < shortest.length) {
      shortest = list[i];
    }
  }
  return shortest;
}

console.log(shortestString(["Hola", "Mundo", "Adios", "Coche"])); // Hola
console.log(shortestString(["Caballo", "Mundo", "Adios", "Casa"])); // Casa 
console.log(shortestString(["Hola", "Mundo", "Adios", "As"])); // As
