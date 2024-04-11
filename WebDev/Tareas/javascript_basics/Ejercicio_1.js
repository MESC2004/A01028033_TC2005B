// Escribe una función que encuentre el primer carácter de un cadena de texto que no se repite. Prueba tu función con: 'abacddbec'
"use strict"

function firstChar(string) {
    let char = '';
    for (let i = 0; i < string.length; i++) {
        let count = 0;
        for (let j = 0; j < string.length; j++) {
            if (string[i] === string[j]) {
                count++;
            }
        }
        if (count === 1) {
            char = string[i];
            break;
        }
    }
    return char;
}

let string = 'abacddbec';
console.log(firstChar(string));

console.log(firstChar('bbbcdas'));

console.log(firstChar('abacddbec'));
