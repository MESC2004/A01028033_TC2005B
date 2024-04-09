// Escribe una función que implemente el algoritmo 'bubble-sort' para ordenar una lista de números.

"use strict"

function bubbleSort(arr) {
  let flag;
  for (let i = 0; i < arr.length; i++) {
    flag = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j+1]) { 
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        flag = true;
      }
    }
    if (flag == false) {break;}
  }
}

let array = [5, 3, 8, 2, 1, 4];
bubbleSort(array);
console.log(array); // [1, 2, 3, 4, 5, 8]

