<?php
    //Include the PHP functions to be used on the page
    include('common.php');

    //Output header
    outputHeader("My Game Website - Login");
?>

<!-- Contents of the page -->
<div class="main">
    <div class="container1">

        <h1 class="game-name"> Space Invaders Remake</h1>

        <div class="navigation">
            <a href="about.php" class="About">About</a>
            <a href="index.php" class="Game">Game</a>
            <a href="highscore.php" class="Highscores">Highscores</a>
            <a href="login.php" id="login-nav" class="Login">Log-in</a>
        </div>
        </div>
        <!-- Log in and Sign up fields -->
        <div class="container2">
            <form class="sign-in">
                <h2 class="sign-in-text">Sign In</h2>
                <input required type="email" name="Email" placeholder="E-mail" id="email-sign-in"
                 class="name-input">
                <input required type="password" name="Password" placeholder="Password" id="password-sign-in"
                class="email-input">
                <button id="login" class="log-in-button">Log in</button>
            </form>
            <form class="sign-up">
                <h2 class="sign-in-text">Sign Up</h2>
                <input required type="text" name="Name" placeholder="Name" id="name-sign-up" class="name-input">
                <input required type="email" name="Email" placeholder="Email" id="email-sign-up" class="email-input">
                <input required type="password" name="Password" placeholder="Password" id="password-sign-up" class="password-input">
                <input required type="password" name="Repeat-password" placeholder="Repeat Password" id="repeat-password-sign-up" class="repeat-password-input">
                <button id="register" class="sign-up-button">Sign up</button>
            </form>
        </div>

<?php
    //Output the footer
    outputFooter();
    ?>