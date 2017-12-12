<?php
    //Include the PHP functions to be used on the page
    include('common.php');

    //Output header
    outputHeader("My Game Website - About");
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
        <!-- Description of the game -->
        <div class="container2">
            <div class="description">
                <h1>Description</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, recusandae, numquam! Ratione nemo cupiditate, eveniet vero excepturi velit perspiciatis, minus molestias porro magnam, rerum voluptatum facilis, et quibusdam ipsum nesciunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat quos cumque, vero assumenda odio. Sint cumque itaque, rerum inventore illo. Commodi iure voluptatibus voluptate aliquam nostrum dolore, adipisci omnis quisquam.</p>

            </div>
        </div>
<?php
    //Output the footer
    outputFooter('null');
?>
