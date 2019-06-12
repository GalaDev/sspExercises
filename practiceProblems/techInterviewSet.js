// // Flip every pair of characters in a string.

// // Example:
// // var input = 'check out how interesting this problem is, it\'s insanely interesting!';
// // var output = flipPairs(input);
// // console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!

// //iterate through string on every other character
// //on each iteration flip characters
// //for strings with odd length, add last character

// const flipPairs = (string) => {
//   let flippedString = '';

//   for(let i = 0; i < string.length; i = i + 2){
//     flippedString += flipCharsIfEven(string[i], string[i+1]);
//   }

//   return flippedString;
// };

// //helper function
// const flipCharsIfEven = (charA, charB) => {
//   if(!charB){
//     return charA
//   }

//   return charB + charA;
// };

// //Test Suite
// const assertEqual = (actual, expected, testName) => {
//   if(actual === expected){
//     console.log('passed');
//   } else {
//     console.log(`FAILED [${testName}] Expected ${expected}, got ${actual}`)
//   }
// };

// let result1 = flipPairs('times');

// assertEqual(result1, 'items', 'it should flip characters in string');

//=======================================

//BIG FLIPPER

// Flip every chunk of n characters in a string, where n is any positive integer greater than 1.

// Note that this is intentionally very similar to the previous problem.

// Please focus on getting a working solution with the tools you know well.

// Practice the interactive/collaborative interview style that's described in the documentation.

// Example:
// var input = 'a short example';
// var output = flipEveryNChars(input, 5);
// console.log(output); // --> ohs axe trelpma

// Breaking this example down piece by piece:
// 'a sho' -> 'ohs a'
// 'rt ex' -> 'xe tr'
// 'ample' -> 'elpma'

// -> 'ohs axe trelpma'

//if n <= 1 return string
//create reversedString
//iterate input string in n blocks
//if length of iteration does not equal n => retrun interation without reversing.
//reverse each iteration

// const reverseString = (string) => {
//   return string.split("").reverse().join("");
// };

// const flipEveryNChars = (input, n) => {
//   if(n <= 1) {
//     return input;
//   }

//   let reversedString = '';

//   for(let i = 0; i < input.length; i = i + n) {

//   reversedString += reverseString(input.substring(i, i + n));
//   }

//   return reversedString;
// };

// //Test Sute
// const assertEqual = (actual, expected, testName) => {
//   if(actual === expected){
//     console.log('passed');
//   } else {
//     console.log(`FAILED [${testName}] Expected "${expected}", got "${actual}"`);
//   }
// };

// var input = 'a short example';
// let result1 = flipEveryNChars(input, 5);
// result1
// assertEqual(result1, 'ohs axe trelpma', 'it should fliped string at "n" ');

//========================================

// Given a string of even and odd numbers, find which is the sole even number or the sole odd number.

// The return value should be 1-indexed, not 0-indexed.

// Examples :
// detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
// detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd

//convert input into array of nums
//[2,4,6,7,10]
//determine if we are looking for even or odd outlier

// const turnStringIntoNums = (string) => {
//   let stringArr = string.split(' ');
//   return stringArr.map((el) => Number.parseInt(el));
// };

// const isEven = (a, b, c) => {
//   let evenCount = 0;
//   [a, b, c].forEach((el) => el % 2 === 0 ? evenCount++ : evenCount);
//   return evenCount > 1 ? true : false;
// };

// const detectOutlierValue = (string) => {
//   let arr = turnStringIntoNums(string);
//   let even = arr.every(isEven);

//   if(isEven(arr[0], arr[1], arr[2])){
//     for(let i = 0; i < arr.length; i++){
//       if(arr[i] % 2 !== 0){
//         return i
//       }
//     }
//   } else {
//     for(let i = 0; i < arr.length; i++){
//       if(arr[i] % 2 !== 0){
//         return i
//       }
//     }
//   }
// }

// //Test Suite
// const assertEqual = (actual, expected, testName) => {
//   if(actual === expected) {
//     console.log('passed')
//   } else {
//     console.log(`FAILED [${testName}] Expected "${expected}", got ${actual}`);
//   }
// };

// let result = detectOutlierValue("2 4 7 8 10");

// assertEqual(result, 2, 'it should return the outlier index');

// You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

// e.g. transposeTwoStrings(['Hello','World']);

// should return:
// H W
// e o
// l r
// l l
// o d

// const transposeTwoStrings = (strArr) => {
//   const transposedArr = [];

//   for(let i = 0; i < strArr.length; i++){
//     for(let j = 0; j < strArr[i].length; j++){
//       transposedArr.push([strArr[0][j], strArr[1][j]]);
//       console.log(strArr[0][j], strArr[1][j]);
//     }
//     break;
//   }

//   return transposedArr;
// };

// // transposeTwoStrings(['Hello','World']);

// //Test Suite
// const assertArraysEqual = (actual, expected, testName) => {
//   let strArrAct = actual[0].join('')
//   let strArrExp = expected[0].join('');

//   if(strArrAct === strArrExp) {
//     console.log('passed');
//   } else {
//     console.log(`FAILED [${testName}] Expected ${expected}, got ${actual}`);
//   }
// };

// let result1 = transposeTwoStrings(['Hello','World']);
// assertArraysEqual(result1, [['H', 'W'], ['e', 'o'], ['l', 'r'], ['l','l'], ['o','d']], 'it should transpose two strings');

//=============================

// Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

// Example:

// var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
// console.log(pair); // --> [4, 5]

//create retArr
//iterate through main array using a for loop
//iterate though sub array starting at j = i + 1
//if array[i] + array[j] === n
//retArr.push([arr[i], arr[j]])
//return retArr;

const findPairForSum = (arr, n) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (j > i) {
        if (arr[i] + arr[j] === n) {
          return [arr[i], arr[j]];
        }
      }
    }
  }
};

//Test Suite
const assertArraysEqual = (actual, expected, testName) => {
  const actArr = actual.join("");
  const expArr = expected.join("");

  if (actArr === expArr) {
    console.log("passed");
  } else {
    console.log(`FAILED [${testName}] Expected ${expected}, got ${actual}`);
  }
};

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);

assertArraysEqual(pair, [4, 5], "it should return the target sum");
