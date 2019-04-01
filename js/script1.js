// Get the id of the sign up  button on the overlay container
const signUpButton = document.getElementById('Signup');
// Get the id of the ghost login button on the overlay container
const loginButton = document.getElementById("Login");
//get the id of the container
const container = document.getElementById("container");

// Event listeners to switch panels when clicked

signUpButton.addEventListener("click",() =>{
  container.classList.add("panel-active")
});

signUpButton.addEventListener("click",() =>{
  container.classList.remove("panel-active")
});
