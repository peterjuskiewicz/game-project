<?php
    //Include the PHP functions to be used on the page
    include('common.php');

    //Output header
    outputHeader("My Game Website - Highscores");
?>
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
        <!-- Table with highscores -->
        <div class="container2">
            <table class="highscore" id="highscore-table">

                </table>
        </div>
<?php
    //Output the footer
    outputFooter('highScore');
    ?>
