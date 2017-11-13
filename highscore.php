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
            <a href="login.php" class="Login">Log-in</a>
        </div>
        </div>
        <!-- Table with highscores -->
        <div class="container2">
            <table class="highscore">
                  <tr>
                    <td>Placenum</td>
                    <td>Firstname</td>
                    <td>Lastname</td>
                    <td>Points</td>
                  </tr>
                  <tr>
                    <td>1.</td>
                    <td>Jill</td>
                    <td>Smith</td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td>2.</td>
                    <td>Eve</td>
                    <td>Jackson</td>
                    <td>94</td>
                  </tr>
                  <tr>
                    <td>3.</td>
                    <td>John</td>
                    <td>Doe</td>
                    <td>80</td>
                  </tr>
                </table>
        </div>
<?php
    //Output the footer
    outputFooter();
    ?>
