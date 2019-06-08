const each = (array, func) => {
  for (var i = 0; i < array.length; i++) {
    func(array[i]);
  }
};

const sumSquares = numbers => {
  var total = 0;
  each(numbers, function(num) {
    total += num * num;
  });
  return total;
};

sumSquares([1, 2, 3, 4]);

const cube = num => {
  return num * num * num;
};

const sumCubes = numbers => {
  var total = 0;
  each(numbers, function(num) {
    total += cube(num);
  });
  return total;
};

sumCubes([1, 2, 3, 4]);

const product = numbers => {
  let total = 1;
  each(numbers, function(num) {
    total *= num;
  });
  return total;
};

product([1, 2, 3, 4]);

const cubeAll = numbers => {
  let cubedArr = [];
  each(numbers, function(num) {
    cubedArr.push(Math.pow(num, 3));
  });

  return cubedArr;
};

cubeAll([1, 2, 3, 4]);

const odds = array => {
  let oddArr = [];
  each(array, el => {
    if (el % 2 !== 0) oddArr.push(el);
  });

  return oddArr;
};

odds([1, 2, 3, 4, 5, 6]);

const sumByAllElementsMultipliedByFour = array => {
  let total = 0;

  each(array, el => {
    total += el * 4;
  });

  return total;
};

sumByAllElementsMultipliedByFour([1, 2, 3, 4]);

const square = num => {
  return num * num;
};

const sumBy = (numbers, f) => {
  total = 0;
  each(numbers, function(num) {
    total += f(num);
  });

  return total;
};

const productBy = (numbers, f) => {
  total = 1;
  each(numbers, function(num) {
    total *= f(num);
  });

  return total;
};

productBy([1, 2, 3, 4], square);

const doubleAll = numbers => {
  let doubleArr = [];
  each(numbers, num => {
    doubleArr.push(num + num);
  });

  return doubleArr;
};

doubleAll([1, 2, 3, 4]);

const halfAll = numbers => {
  let halfArr = [];

  each(numbers, num => {
    halfArr.push(num / 2);
  });

  return halfArr;
};

halfAll([1, 2, 3, 4]);

const upperCaseAll = arr => {
  const upperArr = [];

  each(arr, ele => {
    upperArr.push(ele.toUpperCase());
  });

  return upperArr;
};

upperCaseAll(["hello", "there", "how", "are", "you"]);

const map = (array, func) => {
  let replyArr = [];

  each(array, el => {
    replyArr.push(func(el));
  });

  return replyArr;
};

map([1, 2, 3, 4], function(x) {
  return x * 2;
});

map(["hello", "world"], el => {
  return el.toUpperCase();
}); // => ["HELLO", "WORLD"]
map(["HelLo", "WorLD"], el => {
  return el.toLowerCase();
}); // => ["hello", "world"]
map(["the", "quick", "brown", "fox", "jumped"], el => {
  return el.length;
}); // => [3, 5, 5, 3, 6]
var people = [
  { name: "Alyssa P. Hacker", age: 26 },
  { name: "Ben Bitdiddle", age: 34 },
  { name: "Eva Lu Ator", age: 19 },
  { name: "Lem E. Tweakit", age: 40 }
];
map(people, el => {
  return el.name;
}); // => ["Alyssa P. Hacker", "Ben Bitdiddle", "Eva Lu Ator", "Lem E. Tweakit"]
map(people, el => {
  return `${el.name} is ${el.age}`;
});
// => ["Alyssa P. Hacker is 26", "Ben Bitdiddle is 34", "Eva Lu Ator is 19", "Lem E. Tweakit is 40"]

const evens = numbers => {
  const evenArr = [];

  map(numbers, num => {
    if (num % 2 === 0) evenArr.push(num);
  });

  return evenArr;
};

evens([1, 2, 3, 4, 5, 6]);

const multiplesOfThree = numbers => {
  const multThreeArr = [];

  map(numbers, el => {
    if (el % 3 === 0) multThreeArr.push(el);
  });

  return multThreeArr;
};

multiplesOfThree([1, 2, 3, 4, 5, 6]);

const positives = numbers => {
  const p = [];

  map(numbers, el => {
    if (el > 0) p.push(el);
  });

  return p;
};

positives([-1, -2, 1, 2, 3, 4, 5, 6]);

// const map = (array, func) => {
//   let replyArr = [];

//   each(array, el => {
//     replyArr.push(func(el))
//   })

//   return replyArr;
// };

const evenLength = numbers => {
  return map(numbers, el => {
    return (el += "heyo");
  });

  return arr;
};

evenLength("hello there how are you today ya".split(" "));

function filter(array, f) {
  const filteredArr = [];

  for (let i = 0; i < array.length; i++) {
    if (f(array[i])) filteredArr.push(array[i]);
  }

  return filteredArr;
}
filter([1, 2, 3, 4], function(x) {
  return x % 2 === 0; // x is even?
}); // => [2, 4]

const fOdds = numbers => {
  return filter(numbers, el => {
    return el % 2 === 1;
  });
};

fOdds([1, 2, 3, 4, 5, 6]);

const positive = numbers => {
  return filter(numbers, num => {
    return num > 0;
  });
};

positive([-1, -2, 1, 5, 4, 3, 2, 1]);

const neg = nums => {
  return filter(nums, el => {
    return el < 0;
  });
};

neg([-1, -2, 3, 4, 5, 6, 7]);

const evenLengthf = arr => {
  return filter(arr, el => {
    return el.length % 2 === 0;
  });
};

evenLengthf("He said she said how are yo".split(" "));

const lSix = nums => {
  return filter(nums, num => {
    return num > 6;
  });
};

lSix([1, 2, 3, 9, 8, 7, 6]);

function startsWithChar(strings, character) {
  return filter(strings, str => {
    return str[0] === character;
  });
}
var words = "the quick brown fox jumps over the lazy dog".split(" ");
startsWithChar(words, "q"); // => ["quick"]
startsWithChar(words, "t"); // => ["the", "the"]
