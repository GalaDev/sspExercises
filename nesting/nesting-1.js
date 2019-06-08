var arrayA = [
  "hello",
  "world",
  "hack",
  "reactor",
  "comeGetMe!",
  "is",
  "awesome"
];
var arrayB = [true, false, 100, 200, "comeGetMe!", "Batman", "Robin"];
var objA = {
  name: "Joker",
  favoriteColor: "Purple",
  catchPhrase: "comeGetMe!"
};
var objB = {
  yogurtFlavor: "Vanilla Tart",
  serialNumber: "64928599301ADDG",
  companyName: "comeGetMe!",
  shippingAddress: "1600 Pennsylvania Ave NW, Washington, D.C."
};

const a = arrayA[4];
const b = arrayB[4];
const oA = objA.catchPhrase;
const oB = objB.companyName;

var myStore = {
  name: "PetInc",
  founded: "2030",
  pets: "dogs"
};

myStore.pets;

var myStore = {
  name: "PetInc",
  founded: "2030",
  pets: {
    dogs: 13,
    cats: 10,
    birds: 30,
    fishes: 23
  }
};

myStore.pets;

const petNums = Object.values(myStore.pets);

var bigBox = {
  smallBoxA: { weight: 12, volume: 15, full: true },
  smallBoxB: { weight: 22, volume: 12, full: false },
  smallBoxC: { weight: 19, volume: 19, full: false }
};

var volumeOfSmallBoxA = bigBox.smallBoxA.volume;
var weightOfSmallBoxB = bigBox.smallBoxB.weight;
var isSmallBoxCFull = bigBox.smallBoxC.full;
