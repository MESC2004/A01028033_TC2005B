// Escribe una función que tome una lista de números y devuelva la mediana y la moda.


function median(data) {
  data.sort((a, b) => a - b); 
  let middle = Math.floor(data.length / 2);
  if (data.length % 2 === 0) {
    return (data[middle - 1] + data[middle]) / 2;
  } else {
    return data[middle];
  }
}

function mode(data) {
  let mode = [];
  let count = {};
  let max = 1;
  for (let num of data) {
    count[num] = (count[num] || 0) + 1;
    if (count[num] > max) {
      mode = [num];
      max = count[num];
    } else if (count[num] === max) {
      mode.push(num);
    }
  }
  return mode;
}


function describeData(data) {
  return {
    median: median(data),
    mode: mode(data)
  };
}

console.log(describeData([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // { median: 5.5, mode: [] }
console.log(describeData([1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10, 10]));
console.log(describeData([1, 2, 3, 4, 5, 6, 6, 6, 6, 7, 8, 9, 10, 10, 10]));



