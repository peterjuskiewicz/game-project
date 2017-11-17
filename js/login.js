document.addEventListener("DOMContentLoaded", function(event) {
  login();
});

// create User class
class User {
  constructor(userName, userEmail, userPassword) {
    // starting position of the player
    this.name = userName;
    this.email = userEmail;
    this.password = userPassword;
  }
}

function login() {
  window.checkIfLogIn = false;
  // Register and save data in JSON in HTML Local Storage
  document
    .getElementById("register")
    .addEventListener("click", function(event) {
      event.preventDefault();
      const nameSignUp = document.getElementById("name-sign-up").value;
      const emailSignUp = document.getElementById("email-sign-up").value;
      const passwordSignUp = document.getElementById("password-sign-up").value;
      const repeatPasswordSignUp = document.getElementById(
        "repeat-password-sign-up"
      ).value;
      const messageSignUp = document.getElementById("sign-up-message");
      // Send error messages
      if(JSON.parse(localStorage.getItem(emailSignUp)) != null){
        messageSignUp.innerHTML = "Such e-mail adress is already register.";
      }
      else if(!validateEmail(emailSignUp)){
        messageSignUp.innerHTML = "E-mail address is incorrect";
      }

      else if (passwordSignUp !== repeatPasswordSignUp) {
        messageSignUp.innerHTML = "Password doesn't match";
      }
      else{
        localStorage.setItem(
        emailSignUp,
        JSON.stringify(new User(nameSignUp, emailSignUp, passwordSignUp))
        )
        messageSignUp.innerHTML = "Registration succesful";
      }
    });

  //  Log in to the website
  document.getElementById("login").addEventListener("click", function(event) {
    event.preventDefault();
    const emailSignIn = document.getElementById("email-sign-in").value;
    const passwordSignIn = document.getElementById("password-sign-in").value;
    const messageSignIn = document.getElementById("sign-in-message");
    // Receive JSON object
    if(JSON.parse(localStorage.getItem(emailSignIn)) !== null){
      const retrievedObject = JSON.parse(localStorage.getItem(emailSignIn));
      // Check if password matches
      if (passwordSignIn === retrievedObject.password) {
        console.log(retrievedObject.password);
        window.checkIfLogIn = true;
        changeElement();
      }
      else {
        messageSignIn.innerHTML = "Password or email incorrect";
      }
    }
    else{
      messageSignIn.innerHTML = "E-mail not registered";
    }

  });
}

// change log in button to log off button
const changeElement = () => {
  const loginNav = document.getElementById("login-nav");
  if (window.checkIfLogIn) {
    debugger;
    window.location.href = "index.php";
    loginNav.innerHTML = "Log out";
    loginNav.href = "#";
  }
};

// regex to check correctness of the email

const validateEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
