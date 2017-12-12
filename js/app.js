window.onload = function() {
  const canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d");

  let x = 0;
  let y = 0;

  const getCoords = event => {
    x = event.clientX;
    y = event.clientY;
    playTheGame();
  };

  canvas.addEventListener("click", getCoords);

  const playTheGame = () => {
    if (sessionStorage.loggedUser == undefined) {
      context.font = "40px Audiowide";
      context.strokeText("Login before playing", 200, 200);
    } else {
      context.font = "40px Audiowide";
      context.strokeText("Start game", 300, 200);
      if (x > 400 && x < 600 && y > 200 && y < 400) {
        startTheGame();
      }
    }
  };

  const startTheGame = () => {
    // get player object

    const user = JSON.parse(localStorage.getItem(sessionStorage.loggedUser));

    // define player class

    class Player {
      constructor(argX, argY, name) {
        // starting position of the player
        this.x = argX;
        this.y = argY;
        this.points = 0;
        this.name = name;
      }
      drawPlayer() {
        context.beginPath();
        context.moveTo(this.x, this.y);
        context.lineTo(this.x - 15, this.y + 20);
        context.lineTo(this.x + 15, this.y + 20);
        context.fill();
      }
    }

    // define rocket class

    class Rocket {
      constructor(argX, argY) {
        this.x = argX;
        this.y = argY;
      }

      draw() {
        context.beginPath();
        context.arc(this.x, this.y, 10, 0, Math.PI / 0.5);
        context.fill();
        context.closePath();
      }
      update() {
        this.y -= 20;
      }
    }

    // define enemy class

    class Enemy {
      constructor(argX, argY, speed) {
        // starting position of the enemy
        this.x = argX;
        this.y = argY;
        this.movingRight = true;
        this.speed = speed;
      }

      draw() {
        context.fillRect(this.x, this.y, 20, 20);
      }

      isOnEdge() {
        return this.x < 0 || this.x > canvas.width - 20;
      }

      moveDown() {
        this.y += 20;
        this.movingRight = !this.movingRight;
      }

      update() {
        this.x += this.movingRight ? this.speed : -this.speed;
      }
    }
    // Initialise objects

    // Player with starting x and y position

    const player1 = new Player(60, 450, user.name);

    let enemyY = 50;
    let speed = 2;

    // Array of 20 enemies

    let enemyArray = range(20).map((el, key) => {
      return new Enemy(10 + key * 30, enemyY, speed);
    });

    // Rocket array
    const rocketArray = [];

    // Render function

    const render = () => {
      player1.drawPlayer();
      enemyArray.forEach(function(element) {
        element.draw();
      });

      if (rocketArray.length !== 0) {
        rocketArray[0].draw();
      }
    };

    // collision detection

    const rocketHitsEnemy = () => {
      if (rocketArray.length === 1) {
        for (var i = 0; i < enemyArray.length; i++) {
          if (
            enemyArray[i].y == rocketArray[0].y &&
            enemyArray[i].x >= rocketArray[0].x - 20 &&
            enemyArray[i].x <= rocketArray[0].x + 20
          ) {
            enemyArray.splice(i, 1);
            player1.points++;
            rocketArray.pop();
            break;
          }
        }
      }
    };

    // Display point and player on canvas
    const printPoints = () => {
      context.font = "20px Audiowide";
      context.strokeText(
        "Player: " + player1.name + " Score:" + player1.points,
        10,
        20
      );
    };

    const update = () => {
      enemyArray.forEach(function(element) {
        element.update();

        if (element.isOnEdge()) {
          enemyArray.forEach(enemy => {
            enemy.moveDown();
          });
        }
      });
      if (rocketArray.length === 1) {
        rocketArray[0].update();
        if (rocketArray[0].y < 1) {
          rocketArray.pop();
        }
      }
    };

    const nextLevel = () => {
      if (enemyArray.length === 0) {
        speed *= 2;
        enemyArray = range(20).map((el, key) => {
          return new Enemy(10 + key * 30, enemyY, speed);
        });
      }
    };

    // end the game
    const gameOver = () => {
      enemyArray.forEach(function(element) {
        if (element.y > 350) {
          if (user.highscore < player1.points) {
            user.highscore = player1.points;
            localStorage.setItem(user.email, JSON.stringify(user));
          }
          window.location.reload(true);
        }
      });
    };

    setInterval(function() {
      requestAnimationFrame(draw);
    }, 1000 / 70);

    document.body.addEventListener("keydown", function(event) {
      switch (event.keyCode) {
        case 37: // left
          player1.x -= 6;
          draw();
          break;

        case 39: // right
          player1.x += 6;
          draw();
          break;

        case 32: // space
          if (rocketArray.length === 0) {
            rocketArray.push(new Rocket(player1.x, player1.y));
          }
          break;
      }
    });

    function draw() {
      context.clearRect(0, 0, 800, 500);
      render();
      update();
      printPoints();
      rocketHitsEnemy();
      nextLevel();
      gameOver();
    }

    function range(n) {
      return Array.apply(null, { length: n }).map(Number.call, Number);
    }
  };
  playTheGame();
};
