// Escribe una función que quite los elementos duplicados de un arreglo y regrese una lista con los elementos que quedan. Por ejemplo: quitaDuplicados([1, 0, 1, 1, 0, 0]) -> [1, 0]

function quitaDuplicados(arr) { return [...new Set(arr)]; }

console.log(quitaDuplicados([1, 0, 1, 1, 0, 0])); // [1, 0]
console.log(quitaDuplicados([1, 2, 3, 4, 5, 6, 6, 5])); // [1, 2, 3, 4, 5, 6]
console.log(quitaDuplicados([1, 1, 1, 1, 1, 1, 10, 10 , 15])); // [1, 10, 15]
