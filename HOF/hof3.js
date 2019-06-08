const each = (coll, f) => {
  if(Array.isArray(coll)){
    for(let i = 0; i < coll.length; i++){
      f(coll[i], i);
    }
  } else {
    acc = {}
    for(let key in coll){
      f(coll[key], key);
    }
  }

  return acc;
};

const map = (coll, f) => {
  const acc = [];

  each(coll, (el, i) => {
    acc.push(el, i);
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

