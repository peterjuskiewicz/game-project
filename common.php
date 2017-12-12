<?php

//Ouputs the header for the page and opening body tag
function outputHeader($title){
    echo '<!DOCTYPE html>';
    echo '<html>';
    echo '<head>';
    echo '<title>' . $title . '</title>';
    echo '<link rel="stylesheet" href="normalize.css">';
    echo '<link rel="stylesheet" href="style.css">';
    echo '<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">';
    echo '<link href="https://fonts.googleapis.com/css?family=Audiowide" rel="stylesheet">';
    echo '</head>';
    echo '<body>';
}

//Outputs closing body tag and closing HTML tag
function outputFooter($scriptNeeded){
    echo '<div class="container3">';
    echo '<h3 class="copyrights">©Copyrights Piotr Juskiewicz Middlesex University</h3>';
    echo '<div class="social-media">';
    echo '<a href="#" class="github"><i class="fa fa-github" aria-hidden="true"></i></a>';
    echo '<a href="#" class="twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a>';
    echo '</div>';
    echo '</div>';
    echo '</div>';
    if($scriptNeeded == 'loginPage'){
        echo '<script type="text/javascript" src="js/login.js"></script>';
    }
    if($scriptNeeded == 'gamePage'){
      echo '<script type="text/javascript" src="js/app.js"></script>';

    }
    if($scriptNeeded == 'highScore'){
      echo '<script type="text/javascript" src="js/highscores.js"></script>';

    }
    echo '<script type="text/javascript" src="js/logged.js"></script>';
    echo '</body>';
    echo '</html>';
}
