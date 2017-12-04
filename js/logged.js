
const isLoggedIn = () => {
    return localStorage.loggedUser !== undefined;
};

const loginNav = document.getElementById("login-nav");

// change log in button to log off button
const changeElement = () => {


  if (isLoggedIn()) {
    loginNav.innerHTML = "Log out";
    loginNav.href = "#";
  }
  else{
    loginNav.innerHTML = "Log in";
    loginNav.href = "login.php";
  }



};

const logout = () => {
    delete localStorage.loggedUser;
    window.location.reload(true);
};

document.addEventListener("DOMContentLoaded", changeElement);

loginNav.addEventListener("click", logout);
