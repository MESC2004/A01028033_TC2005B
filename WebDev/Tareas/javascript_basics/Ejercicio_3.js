// Escribe dos funciones: la primera que invierta un arreglo de números y regrese un nuevo arreglo con el resultado; la segunda que modifique el mismo arreglo que se pasa como argumento. No se permite usar la función integrada 'reverse'.

"use strict";
// Swap function for more readable code
function swap(arr, i, j) {
  //swaps two elements in an array
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function revererseArray(arr) {
  // returns a new array with the elements of the original array in reverse order
  let reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}

let arr = [1, 2, 3, 4, 5];
console.log(revererseArray(arr));

let arr2 = [5, 4, 3, 2, 1];
console.log(revererseArray(arr2));

let arr3 = [1, 2, 3, 4, 5, 6];
console.log(revererseArray(arr3));


function revertArraySelf(arr) {
  // Reverses an array within itself
  for (let i = 0; i < arr.length / 2; i++) {
    swap(arr, i, arr.length - 1 - i);
  }
  return arr;
}


console.log(revertArraySelf(arr));
console.log(revertArraySelf(arr2));
console.log(revertArraySelf(arr3));
