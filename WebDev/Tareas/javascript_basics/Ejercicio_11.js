// Escribe una función que tome una lista de cadena de textos y devuelva una nueva lista con todas las cadenas en orden alfabético.

"use strict";

function ordenarLista(lista) {
    return lista.sort();
}

console.log(ordenarLista(["hola", "adios", "buenos días", "buenas noches"]));
console.log(ordenarLista(["z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]));
console.log(ordenarLista(["z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]));
