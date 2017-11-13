<?php
    //Include the PHP functions to be used on the page
    include('common.php');

    //Output header
    outputHeader("My Game Website - Game");
?>

<!-- Contents of the page -->
<div class="main">
    <div class="container1">
        <h1 class="game-name"> Space Invaders Remake</h1>

        <div class="navigation">
            <a href="about.php" class="About">About</a>
            <a href="index.php" class="Game">Game</a>
            <a href="highscore.php" class="Highscores">Highscores</a>
            <a href="login.php" class="Login">Log-in</a>
        </div>
    </div>
        <!-- Canvas element where the game will happen -->
        <div class="container2">
            <canvas width="1000" height="500"></canvas>
        </div>
<?php
    //Output the footer
    outputFooter();
?>