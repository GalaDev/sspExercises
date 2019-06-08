const l = console.log;

const each = (coll, f) => {
  if(Array.isArray(coll)){
    for(let i = 0; i < coll.length; i++){
      f(coll[i], i);
    }
  } else {
    for(let key in coll){
      f(coll[key], key);
    }
  }
};

const map = (array, f) => {
  const acc = [];
  each(array, (el, i) => {
    acc.push(f(el, i));
  });
  return acc;
};

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

l(reverse('Hello world how are you'))




