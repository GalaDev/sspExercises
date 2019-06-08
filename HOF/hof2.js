// const each = (array, func) => {
//   for(let i = 0; i < array.length; i++){
//     func(array[i], i);
//   }
// };

function indexedExponentials(numbers) {
  const exArr = [];
  each(numbers, (num, i) => {
    exArr.push(Math.pow(num, i));
  });
  return exArr;
}

// console.log(indexedExponentials([2, 5, 7, 4]));

function evenIndexedOddNumbers(numbers) {
  const oddNum = [];
  each(numbers, (num, i) => {
    if(num % 2 !== 0 && i % 2 === 0) oddNum.push(num);
  });
  return oddNum;
}
// console.log(evenIndexedOddNumbers([1, 3, 3, 4, 7, 10])); // => [1, 3, 7]

function evenIndexedEvenLengths(strings) {
  const acc = [];

  each(strings, (el, i) => {
    if(el.length % 2 === 0 && i % 2 === 0) acc.push(el);
  });

  return acc;
}
// console.log(evenIndexedEvenLengths(["lion", "monkey", "aardvaark", "cat", "doge"]));
// => ["lion", "doge"]
// console.log(evenIndexedEvenLengths(["red", "green", "purple", "blue", "yellow"]));
// => ["purple", "yellow"]

function each(coll, func) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      func(coll[i], i);
    }
  } else {
    for (var key in coll) {
      func(coll[key], key);
    }
  }
}

const values = (obj) => {
  const acc = [];
  each(obj, (val, key) => {
    acc.push(val);
  });

  return acc;
};

let person = {
  name: 'gala',
  age: 20,
  city: 'LA'
}

// console.log(values(person));

const keys = obj => {
  const acc = [];
  each(obj, (val, key) => {
    acc.push(key);
  });

  return acc;
};

// console.log(keys(person));

const keysLongerThan = (obj, len) =>{
  const acc = {};

  each(obj, (val, key) => {
    if(key.length > len) acc[key] = val;
  });

  return acc;
};

// console.log(keysLongerThan({name: "Annyeong", age: 25, favoriteColor: "blue"}, 3));
// => {name: "Annyeong", favoriteColor: "blue"}
// console.log(keysLongerThan({name: "Annyeong", age: 25, favoriteColor: "blue"}, 4));
// => {favoriteColor: "blue"}

const incrementByOne = (obj) => {
  const acc = {};

  each(obj, (val, key) => {
    if(typeof val === 'number') acc[key] = val + 1
  })

  return acc;
};

// console.log(incrementByOne({a:1, b:2, c:'3'}));

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

function filter(coll, predicate) {
  var accArr = [];
  var accObj = {};
  if(Array.isArray(coll)){
    each(coll, function(element, i) {
      if (predicate(element, i)) {
        accArr.push(element);
      }
    });
    return accArr;
  } else {
    each(coll, (val, key) => {
      if(predicate(val, key)){
        accObj[key] = val;
      }
    });
    return accObj;
  }
}

const evens = (arr) => {
  return filter(arr, (el) => {
    return el % 2 === 0;
  })
};

// console.log(evens([1,2,3,4,5,6]));

const multiplesOfThree = arr => {
  return filter(arr, el => {
    return el % 3 === 0;
  });
};

// console.log(multiplesOfThree([1,2,3,4,5,6,7,8,9]));

const positives = arr => {
  return filter(arr, el => {
    return el > 0;
  });
};

// console.log(positives([-1,-2,3,4,-5,6,7,-8,9]));

const evenLength = (arr) => {
  return filter(arr, el => {
    return el.length % 2 === 0;
  });
};

// console.log(evenLength('Hi there how are yooo'.split(' ')));

const odds = (arr) => {
  return filter(arr, el => {
    return el % 2 !== 0;
  });
};

// console.log(odds([1,2,3,4,5,6,7]));

const negatives = (arr) => {
  return filter(arr, el => {
    return el > 0;
  });
};

// console.log(negatives([1,-2,3,-4,5,67,-8]));

const largerThanSix = (arr) => {
  return filter(arr, el => {
    return el > 6;
  });
};

// console.log(largerThanSix([1,-2,3,-4,5,67,-8]));

function startsWithChar(strings, character) {
  return filter(strings, string => {
    return string[0] === character;
  })
}
var words = "the quick brown fox jumps over the lazy dog".split(" ");
// console.log(startsWithChar(words, "q")); // => ["quick"]
// console.log(startsWithChar(words, "t")); // => ["the", "the"]

function evenIndexedEvenLengths(strings) {
  return filter(strings, (el, i) => {
    return el.length % 2 === 0 && i % 2 === 0;
  })
}
// console.log(evenIndexedEvenLengths(["lion", "monkey", "aardvaark", "cat", "doge"]));
// => ["lion", "doge"]
// console.log(evenIndexedEvenLengths(["red", "green", "purple", "blue", "yellow"]));
// => ["purple", "yellow"]


console.log(filter({a: 1, b: "dog", c: true}, function(value) {
  return typeof value === "number";
}));
// => {a: 1}











