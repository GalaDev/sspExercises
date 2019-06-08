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