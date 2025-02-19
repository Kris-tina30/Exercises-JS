// Create an array of your favorite fruits.
// Use a `for` loop to log each fruit to the console.

const favoriteFruits = ["apple", "greap", "orange", "berry"];
for (let i = 0; i < favoriteFruits.length; i++) {
  console.log(favoriteFruits[i]);
}
// Write a function that takes an array of numbers as a
// parameter and returns the average of those numbers.

function getAverage(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  const average = sum / numbers.length;
  return average;
}
console.log(getAverage([10, 20, 30, 40, 50]));

// Given an array of numbers, use a loop to find and log the largest number in the array.

function largestNumber(arrayNumbers) {
  let largest = arrayNumbers[0];
  for (let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] > largest) {
      largest = arrayNumbers[i];
    }
  }
  console.log("Largest number:", largest);
}
largestNumber([3, 10, 5, 23, 7, 18]);
// Create an array of words. Use a `for` loop to construct a sentence by
// concatenating these words and log it to the console.

let words = ["Create", "an", "array", "of", "words", "."];
let sentence = "";

for (let i = 0; i < words.length; i++) {
  sentence += words[i];
  if (i < words.length - 1) {
    sentence += " ";
  }
}
console.log(sentence);

// Write a function that takes an array of names and a name as a parameter.
// The function should check if the given name exists in the array and return true or false.

function findnName(namesArray, name) {
  for (let i = 0; i < namesArray.length; i++) {
    if (namesArray[i] === name) {
      return true;
    }
  }
  return false;
}
console.log(findnName(["Kristina", "Viktoria", "Liana"], "Liana"));
console.log(findnName(["Amina", "Bob", "Anna", "Eve"], "mama"));

// Create an array of even numbers from 1 to 20 using a `for` loop and the `if` statement.
// Log the resulting array to the console.

let evenNumbers = [];

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    evenNumbers.push(i);
  }
}
console.log(evenNumbers);
