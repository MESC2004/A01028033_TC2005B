// Escribe una función que reciba un número, y regrese una lista con todos sus factores. Por ejemplo: factoriza(12) -> [1, 2, 3, 4, 6, 12].

function factoriza(num) {
  let list = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      list.push(i);
    }
  }
  return list;
}

console.log(factoriza(12));

console.log(factoriza(20));

console.log(factoriza(30));
