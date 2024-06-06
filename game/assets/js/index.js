let board;
let tilesize = 32;
let rows = 16;
let cols = 16;

// Board size
let boardWidth = cols * tilesize;
let boardHeight = rows * tilesize;
let context;

// Ship
let shipImg;
let shipWidth = tilesize * 2;
let shipHeight = tilesize * 2;
let shipX = tilesize * cols / 2 - tilesize;
let shipY = tilesize * rows - tilesize * 2;
let shipVelocityX = tilesize;

let ship = {
  x: shipX,
  y: shipY,
  width: shipWidth,
  height: shipHeight
};

// Aliens
let alienArray = [];
let alienWidth = tilesize * 2;
let alienHeight = tilesize;
let alienX = tilesize;
let alienY = tilesize;
let alienImg;
let alienRow = 2;
let alienCol = 3;
let alienCount = 0;
let alienVelocityX = 1;

// Bullets
let bulletArray = [];
let bulletVelocityY = -10;

// Score
let score = 0;
let highestScore = localStorage.getItem('highestScore') || 0;
let gameOver = false;

// Sounds
let bulletSound = new Audio('assets/sound/shoot.wav');
let alienKillSound = new Audio('assets/sound/enemy-death.wav');
let gameOverSound = new Audio('assets/sound/gameOver.mp3');

// Onload function
window.onload = function () {
  document.getElementById("highest-score").innerText = highestScore;
};

function startGame() {
  // Hide welcome page and show game page
  document.getElementById("welcome-page").style.display = "none";
  document.getElementById("game-page").style.display = "block";

  // Setup the game board
  board = document.getElementById("board");
  board.width = boardWidth;
  board.height = boardHeight;
  context = board.getContext("2d");

  // Reset game state
  score = 0;
  gameOver = false;
  ship.x = shipX;
  ship.y = shipY;
  alienArray = [];
  bulletArray = [];
  alienVelocityX = 1;

  // Load ship image
  shipImg = new Image();
  shipImg.src = "./ship.png";
  shipImg.onload = function () {
    context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);
  };

  // Load alien image
  alienImg = new Image();
  alienImg.src = "./alien-magenta.png";
  alienImg.onload = function () {
    createAliens();
    requestAnimationFrame(update);
  };

  // Add event listeners for ship movement and shooting
  document.addEventListener("keydown", moveShip);
  document.addEventListener("keyup", shoot);
}

function update() {
  if (gameOver) {
    if (score > highestScore) {
      highestScore = score;
      localStorage.setItem('highestScore', highestScore);
    }
    gameOverSound.play();
    return;
  }

  // Clear the board
  context.clearRect(0, 0, boardWidth, boardHeight);

  // Draw the ship
  context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);

  // Draw aliens
  for (let i = 0; i < alienArray.length; i++) {
    let alien = alienArray[i];
    if (alien.alive) {
      // Move aliens
      alien.x += alienVelocityX;

      if (alien.x + alien.width >= board.width || alien.x <= 0) {
        alienVelocityX *= -1;
        alien.x += alienVelocityX * 2;

        for (let j = 0; j < alienArray.length; j++) {
          alienArray[j].y += alienHeight;
        }
      }

      // Draw aliens
      context.drawImage(alienImg, alien.x, alien.y, alien.width, alien.height);

      // Check for game over
      if (alien.y >= ship.y) {
        gameOver = true;
        gameOverSound.play();
      }
    }
  }

  // Draw bullets
  for (let i = 0; i < bulletArray.length; i++) {
    let bullet = bulletArray[i];
    bullet.y += bulletVelocityY;
    context.fillStyle = "white";
    context.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);

    // Check for bullet collision with aliens
    for (let j = 0; j < alienArray.length; j++) {
      let alien = alienArray[j];
      if (alien.alive && detectCollision(bullet, alien)) {
        bullet.used = true;
        alien.alive = false;
        alienCount--;
        score += 20;
        alienKillSound.play();
      }
    }
  }

  // Remove used or off-screen bullets
  while (bulletArray.length > 0 && (bulletArray[0].used || bulletArray[0].y < 0)) {
    bulletArray.shift(); // Removes the first element of the array
  }

  // Advance to the next level if all aliens are destroyed
  if (alienCount == 0) {
    // Increase number of aliens
    alienCol = Math.min(alienCol + 1, cols / 2 - 2);
    alienRow = Math.min(alienRow + 1, rows - 2);
    alienVelocityX += 0.5; // Increase speed of aliens
    alienArray = [];
    bulletArray = [];
    createAliens();
  }

  // Display the score
  context.fillStyle = "white";
  context.font = "20px Arial";
  context.fillText(score, 5, 20);

  // Continue the game loop
  requestAnimationFrame(update);
}

// Move the ship
function moveShip(e) {
  if (gameOver) {
    return;
  }

  if (e.code === "ArrowRight" && ship.x + shipVelocityX + ship.width <= board.width) {
    ship.x += shipVelocityX;
  } else if (e.code == "ArrowLeft" && ship.x - shipVelocityX >= 0) {
    ship.x -= shipVelocityX;
  }
}

// Create aliens
function createAliens() {
  for (let c = 0; c < alienCol; c++) {
    for (let r = 0; r < alienRow; r++) {
      let alien = {
        img: alienImg,
        x: alienX + c * alienWidth,
        y: alienY + r * alienHeight,
        width: alienWidth,
        height: alienHeight,
        alive: true
      };
      alienArray.push(alien);
    }
  }
  alienCount = alienArray.length;
  console.log(alienCount)
}

// Shoot bullets
function shoot(e) {
  if (gameOver) {
    return;
  }

  if (e.code == "Space") {
    let bullet = {
      x: ship.x + shipWidth * 15 / 32,
      y: ship.y,
      width: tilesize / 8,
      height: tilesize / 2,
      used: false // touches alien
    };
    bulletArray.push(bullet);
    bulletSound.play();
  }
}

// Detect collision
function detectCollision(a, b) {
  return a.x < b.x + b.width && // a's top left corner doesn't reach b's top right corner
    a.x + a.width > b.x && // a's top right corner passes b's top left corner
    a.y < b.y + b.height && // a's top left corner doesn't reach b's bottom left corner
    a.y + a.height > b.y; // a's bottom left corner passes b's top left corner
}

// Restart the game
function restartGame() {
  // Hide game page and show welcome page
  document.getElementById("game-page").style.display = "none";
  document.getElementById("welcome-page").style.display = "block";

  // Remove event listeners to prevent multiple bindings
  document.removeEventListener("keydown", moveShip);
  document.removeEventListener("keyup", shoot);

  // Reset game state
  score = 0;
  gameOver = false;
  ship.x = shipX;
  ship.y = shipY;
  alienArray = [];
  bulletArray = [];
  alienVelocityX = 1;

  // Clear the board
  context.clearRect(0, 0, boardWidth, boardHeight);
}
