// Crea una función que cambie una cadena de texto a 'Hacker Speak'. Por ejemplo, para la cadena 'Javascript es divertido', su hacker speak es: 'J4v45c1pt 35 d1v3rt1d0'.

const myMap = new Map([
  ['a', 4],
  ['e', 3],
  ['i', 1],
  ['o', 0],
  ['s', 5]
]);

function hackerSpeak(str) {
  let hackerStr = '';
  for (let i = 0; i < str.length; i++) {
    if (myMap.has(str[i])) {
      hackerStr += myMap.get(str[i]);
    } else {
      hackerStr += str[i];
    }
  }
  return hackerStr;
}

console.log(hackerSpeak("Javascript es divertido"));
console.log(hackerSpeak("Hello World!"));
console.log(hackerSpeak("I am a hacker"));
