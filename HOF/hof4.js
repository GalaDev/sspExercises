const l = console.log;

function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}


function reduce(array, f, start) {
  var acc = start;
  each(array, function(element) {
    acc = f(acc, element);
  });
  return acc;
}

function sum(numbers) {
  return reduce(
    numbers,
    function(total, number) {
      return total + number;
    },
    0
  );
}

function product(numbers) {
  return numbers.reduce(function(product, number) {
    return product * number;
  }, 1);
}

// l(product([1,2,3,4]))

var people = [
  { name: { first: "Alyssa", middle: "P.", last: "Hacker" }, age: 26 },
  { name: { first: "Ben", last: "Bitdiddle" }, age: 34 },
  { name: { first: "Eva", middle: "Lu", last: "Ator" }, age: 40 },
  { name: { first: "Lem", middle: "E.", last: "Tweakit" }, age: 45 },
  { name: { first: "Louis", last: "Reasoner" }, age: 21 }
];

function averageAge(people) {
  // First you'll need to compute the sum of all the ages
  // Second, divide the sum by the number of people (people.length)
  // YOUR CODE HERE
  let sum = reduce(people, (total, person) => {
    return total + person.age;
  },0) / people.length;

  return sum;
}

// l(averageAge(people));

function range(start, end) {
  var acc = [];
  for (var i = start; i < end; i++) {
    acc.push(i);
  }
  return acc;
}

function factorial(n) {
  let arr = range(1, n + 1);
   return reduce(arr, (tot, el) => {
    return tot * el
  }, 1);
}

// l(factorial(10))

function sumBy(numbers, f) {
  return reduce(numbers, (sum, num) => {
    return sum + num 
  }, 0)
}

function max(numbers) {
  return reduce(numbers, (max, num) => {
    return max > num ? max : num;
  }, 0);
}

// l(max([1,10,3,4,5]))

const countOccurances = (string, char) => {
  const strArr = string.split('');
  return reduce(strArr, (occ, el) => {
    return el === char ? occ + 1 : occ
  }, 0);
};

// l(countOccurances('Hello world', 'l'));

const everyNumberEven = (numbers) => {
  return reduce(numbers, (bool, num) => {
    return bool && num % 2 === 0 
  }, true)
};

// l(everyNumberEven([2,4,5,8,10]));

const everyNumberOdd = (numbers) => {
  return reduce(numbers, (acc, num) => {
    return acc && num % 2 !== 0
  }, true)
};

// l(everyNumberOdd([1,3,3,5,5,7,7]));

const positive = (numbers) => {
  return reduce(numbers, (acc, num) => {
    return acc && num > 0; 
  }, true)
};

// l(positive([1,2,3,4,5,6]));

const greaterThanThree = (array) => {
  return reduce(array, (acc, el) => {
    return acc && el.length > 3; 
  }, true)
};

// l(greaterThanThree('hello there howo arew yout yessss a'.split(' ')));

const containE = (arr) => {
  return reduce(arr, (acc, el) => {
    return acc && el.includes('e'); 
  }, true);
};

l(containE('hello eye o get let set'.split(' ')));

