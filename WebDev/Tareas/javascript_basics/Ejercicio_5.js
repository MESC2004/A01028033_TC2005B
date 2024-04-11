// Escribe una función que calcule el máximo común divisor de dos números.

"use strict";

function mcd(a, b) {
  if (b == 0) {
    return a;
  } else {
    return mcd(b, a % b);
  }
}

console.log(mcd(6, 9)); // 3
console.log(mcd(18, 12)); // 6
console.log(mcd(12, 0)); // 12
