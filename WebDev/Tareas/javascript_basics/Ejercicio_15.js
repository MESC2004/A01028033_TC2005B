// Escribe una función que tome una lista de números y devuelva una nueva lista con todos los números en orden descendente.

function ordenDescendente(lista) {
  return lista.sort((a, b) => b - a);
}

console.log(ordenDescendente([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(ordenDescendente([5, 4, 3, 2, 1])); // [5, 4, 3, 2, 1]
console.log(ordenDescendente([1, 3, 2, 5, 4])); // [5, 4, 3, 2, 1]
