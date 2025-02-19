// Use the `window.alert` method to display an alert dialog with a
// message of your choice when a button is clicked on a webpage.

function showAlert() {
  window.alert("button is clicked on a webpage");
}

// Create a function that uses `window.prompt` to ask the user for
// their name, then use `window.alert` to greet them with their name.

function showGreeting() {
  let name = window.prompt("What is your name?");
  if (name) {
    window.alert(`Hello, ${name}!`);
  } else {
    window.alert("Hello, stranger!");
  }
}
showGreeting();
