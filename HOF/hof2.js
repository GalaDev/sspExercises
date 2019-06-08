const each = (array, func) => {
  for(let i = 0; i < array.length; i++){
    func(array[i], i);
  }
};

function indexedExponentials(numbers) {
  const exArr = [];
  each(numbers, (num, i) => {
    exArr.push(Math.pow(num, i));
  });
  return exArr;
}

console.log(indexedExponentials([2, 5, 7, 4]));

function evenIndexedOddNumbers(numbers) {
  const oddNum = [];
  each(numbers, (num, i) => {
    if(num % 2 !== 0 && i % 2 === 0) oddNum.push(num);
  });
  return oddNum;
}
console.log(evenIndexedOddNumbers([1, 3, 3, 4, 7, 10])); // => [1, 3, 7]

function evenIndexedEvenLengths(strings) {
  const acc = [];

  each(strings, (el, i) => {
    if(el.length % 2 === 0 && i % 2 === 0) acc.push(el);
  });

  return acc;
}
console.log(evenIndexedEvenLengths(["lion", "monkey", "aardvaark", "cat", "doge"]));
// => ["lion", "doge"]
console.log(evenIndexedEvenLengths(["red", "green", "purple", "blue", "yellow"]));
// => ["purple", "yellow"]

