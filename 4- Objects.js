// Create an object representing a book with properties like title, author, and year.
// Print the book's details to the console.
let book = {
  title: "mama",
  author: "Kristina",
  year: 2025,
};
console.log(book);

// Define an object to represent a person with properties like name, age, and gender.
// Create a function that takes a person's object as a parameter and prints a message
// with their information.

let persone = {
  name: "Kristina",
  age: 32,
  gender: "femail",
};

function personInformation(persone) {
  console.log(
    `Name: ${persone.name}, age: ${persone.age}, gender: ${persone.gender}.`
  );
}
personInformation(persone);
