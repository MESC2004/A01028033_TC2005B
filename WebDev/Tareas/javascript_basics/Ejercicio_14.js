// Escribe una función que tome un número y devuelva verdadero si es una potencia de dos, falso de lo contrario.

function isPowerOfTwo(n) {
  if (n === 1) {
    return true;
  } else if (n % 2 !== 0 || n === 0) {
    return false;
  } else {
    return isPowerOfTwo(n / 2);
  }
}

console.log(isPowerOfTwo(8)); // true
console.log(isPowerOfTwo(5)); // false
console.log(isPowerOfTwo(16)); // true
