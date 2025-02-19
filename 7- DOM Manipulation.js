// Create an HTML page with a button and a div element. Write a JavaScript function
// that changes the text content of the div when the button is clicked.
function changeText() {
  const text = document.querySelector("h1");
  text.textContent = "The text has been changed!";
}

// In an HTML page, create a list of items (e.g., a to-do list) using an
// unordered list (`<ul>`) and list items (`<li>`). Write JavaScript to add a
// new item to the list when a button is clicked.
function addItem() {
  const list = document.querySelector("ul");
  const newItem = document.createElement("li");
  newItem.textContent = "New Task";
  list.appendChild(newItem);
}
// Create a web page with an image and a button. Write JavaScript to change
// the image source when the button is clicked.
function changeUrl() {
  const image = document.querySelector("img");
  image.src = "./images/Amsterdam.jpeg";
}
// Build an interactive form in HTML (e.g., a simple login form) with input
// fields for username and password. Write JavaScript to validate the form when submitted.
// Display a message based on whether the login was successful or not.
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    if (username === "" || password === "") {
      message.textContent = "Error: Both fields are required!";
      message.className = "error";
    } else if (username === "admin" && password === "1234") {
      message.textContent = "Login successful! Welcome, " + username + ".";
      message.className = "success";
    } else {
      message.textContent = "Invalid username or password!";
      message.className = "error";
    }
  });
