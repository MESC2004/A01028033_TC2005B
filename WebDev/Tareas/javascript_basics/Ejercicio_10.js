// Escribe una función que revise si una cadena de texto es un palíndromo o no.

"use strict"

function reverseString(str) {
  // returns a new string with the elements of the original array in reverse order
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

function isPalindrome(str) {
  // returns true if the string is a palindrome, false if it is not
  return str === reverseString(str);
}

console.log(isPalindrome("ana")); // true
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hola")); // false
