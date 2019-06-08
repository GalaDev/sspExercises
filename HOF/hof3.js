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

function map(coll, f) {
  var acc = [];
  if (!Array.isArray(coll)) {
    acc = {};
  }
  each(coll, function(element, key) {
    acc[key] = f(element, key);
  });
  return acc;
}

var people = [
  { name: { first: "Alyssa", middle: "P.", last: "Hacker" }, age: 26 },
  { name: { first: "Ben", last: "Bitdiddle" }, age: 34 },
  { name: { first: "Eva", middle: "Lu", last: "Ator" }, age: 40 },
  { name: { first: "Lem", middle: "E.", last: "Tweakit" }, age: 45 },
  { name: { first: "Louis", last: "Reasoner" }, age: 21 }
];

function ages(people) {
  return map(people, function(person) {
    return person.age;
  });
}

const firstNames = (people) => {
  return map(people, (person) => {
    return person.name.first;
  });
};

// l(firstNames(people))

const lastNames = (people) => {
  return map(people, (person) => {
    return person.name.last;
  });
};

// l(lastNames(people));

const fullNames = (people) => {
  return map(people, (person) => {
    return person.name.first + ' ' + person.name.last;
  });
};

// l(fullNames(people));

function abs(x) {
  if (x >= 0) {
    return x;
  }
  return -x;
}

// l(map([1, -2, 37, -100, -8, 5], num => {
//   return abs(num);
// }));
// => [1, 2, 37, 100, 8, 5]

// our argument would look like this:
var sampleInput = [ // it's an array
  [1, 3, 2], // of arrays of numbers
  [4, 23, 100],
  [7, 6, 3, -2]
];

const maximums = (array) =>{ 
  return map(array, (el) => {
    return Math.max(...el);
  });
};

// and we want to be able to use maximums to do this:
// l(maximums(sampleInput));

function exponentials(numbers) {
  return map(numbers, (num, i) => {
    return Math.pow(num, num);
  });
};

// l(exponentials([1, 2, 3, 4])); // => [1, 2*2, 3*3*3, 4*4*4*4] => [1, 4, 27, 256]
// l(exponentials([3, 2, 5])); // => [27, 4, 3125]

const reverse = (str) => {
  const strArr = str.split(' ');

  return map(strArr, (str) => {
    return str.split('').reverse().join('');
  }).join(' ');
};

// l(reverse('Hello world how are you'));

const pluck = (people, attribute) => {
  return map(people, person => {
    return person[attribute];
  });
};

// l(pluck(people, "age")); // => [26, 34, 40, 45, 21]


const map2 = (arr1, arr2, f) => {
  const acc = [];
  
  arr1.forEach((el1, i) => {
    arr2.forEach((el2, j) => {
      if(i === j){
        acc.push(f(el1, el2))
      }
    });
  });

  return acc;
}

// l(map2([1, 2, 3], [4, 5, 6], function(a, b) {
//   return a * b;
// }));
// => [4, 10, 18]


const incrementValues = (obj) => {
  return map(obj, (val, key) => {
    return Number.isInteger(val) ? val + 1 : val
  });
};

// l(incrementValues({a: 1, b: 2, c: 'd'}));

const uppercase = (obj) => {
  return map(obj, (val, key) => {
    return typeof val === 'string' ? val.toUpperCase() : val;
  });
};

// l(uppercase({a: 'hello', b: 'world', c: 10}));

const countNestedKeys = (obj) => {
  return map(obj, (val, key) => {
    return obj[key] = Object.keys(val).length;
  });
};

// l(countNestedKeys({ a: { b: 1, c: 7 }, f: { h: 22, g: 12, i: 24 } }));






