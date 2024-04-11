// Escribe una función que reciba una cadena de texto y regrese una nueva con la primer letra de cada palabra en mayúscula.

function capitalizeFirstLetterInWord(text) {
  text = text[0].toUpperCase() + text.substring(1);
  for (let i = 1; i < text.length; i++) {
    if (text[i - 1] === " ") {
      text = text.substring(0, i) + text[i].toUpperCase() + text.substring(i + 1);
    }
  }
  return text;
}



console.log(capitalizeFirstLetterInWord("hola mundo"));
console.log(capitalizeFirstLetterInWord("hello world hahahahah!"));
console.log(capitalizeFirstLetterInWord("goodbye world i will destroy u!"));
