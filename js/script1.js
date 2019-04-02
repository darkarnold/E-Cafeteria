$(document).ready(function(event){
  // Get the id of the sign up  button on the overlay container
  const signUpButton = document.getElementById('Signup');
  // Get the id of the ghost login button on the overlay container
  const loginButton = document.getElementById("Login");
  //get the id of the container
  const container = document.getElementById("container");

  // Event listeners to switch panels when clicked
  $("signUpButton").click(function(event) {
    // Prevent the page from reloading
    event.preventDefault();
    container.classList.add("panel-active");
  });

  $("loginButton").click()

  /*signUpButton.addEventListener("click",() =>{

  });

  signUpButton.addEventListener("click",() =>{

  });
  */

});
