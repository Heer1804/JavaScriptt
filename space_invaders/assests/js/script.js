//board
let board;
let tilesize = 32;
let rows = 16;
let cols = 16;

//board size
let boardWidth = cols * tilesize;
let boardHeight = rows * tilesize;
let context;

//ship
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

//aliens
let alienArray = []
let alienWidth = tilesize * 2;
let alienHeight = tilesize;
let alienX = tilesize;
let alienY = tilesize;
let alienImg;
let alienRow = 2;
let alienCol = 3;
let alienCount = 0;
let alienVelocityX = 1;

//bullets
let bulletArray = []
let bulletVelocityY = -10

//score
let score = 0
let gameOver = false

//onload function
window.onload = function () {
  board = document.getElementById("board");
  board.width = boardWidth;
  board.height = boardHeight;
  context = board.getContext("2d");

  //ship img
  shipImg = new Image();
  shipImg.src = "./ship.png";
  shipImg.onload = function () {
    context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);
  };

  //alien img
  alienImg = new Image();
  alienImg.src = "./alien-magenta.png";

  createAliens();

  requestAnimationFrame(update);

  document.addEventListener("keydown", moveShip);
  document.addEventListener("keyup", shoot);
};

function update() {
  requestAnimationFrame(update);

  if(gameOver){
    return;
  }

  context.clearRect(0, 0, boardWidth, boardHeight);

  //ship
  context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);

  //alien
  for (let i = 0; i < alienArray.length; i++) {
    let alien = alienArray[i];
    if (alien.alive) {

      //movement
      alien.x += alienVelocityX;

      if (alien.x + alien.width >= board.width || alien.x <= 0) {
        alienVelocityX *= -1;
        alien.x += alienVelocityX * 2;

        for (let j = 0; j < alienArray.length; j++) {
          alienArray[j].y += alienHeight;
        }
      }

      //drawimg
      context.drawImage(alienImg, alien.x, alien.y, alien.width, alien.height);

      //game over
      if(alien.y >= ship.y){
        gameOver = true;
      }

    }
  }

  //bullets
  for (let i = 0; i < bulletArray.length; i++) {
    let bullet = bulletArray[i];
    bullet.y += bulletVelocityY;
    context.fillStyle = "white";
    context.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);

    //bullet collision with alien
    for (let j = 0; j < alienArray.length; j++) {
      let alien = alienArray[j];
      if (alien.alive && detectCollision(bullet, alien)) {
        bullet.used = true;
        alien.alive = false;
        alienCount--;
        score += 20;
      }
    }
  }

  //clear bullets
  while (bulletArray.length > 0 && (bulletArray[0].used || bulletArray[0].y < 0)) {
    bulletArray.shift(); //removes the first element of the array
  }

  //next level
  if(alienCount == 0){
    //increase no of aliens
    alienCol = Math.min(alienCol +1,cols/2-2)
    alienRow = Math.min(alienRow +1,rows-2)
    alienVelocityX += 0.5   //increase speed of alien
    alienArray = []
    bulletArray = []
    createAliens()
  }

  //score
  context.fillStyle="white";
  context.font="20px Arial";
  context.fillText(score, 5, 20);

}

//movement of ship
function moveShip(e) {

  if(gameOver){
    return;
  }

  if (e.code === "ArrowRight" && ship.x + shipVelocityX + ship.width <= board.width) {
    ship.x += shipVelocityX;
  } else if (e.code == "ArrowLeft" && ship.x - shipVelocityX >= 0) {
    ship.x -= shipVelocityX;
  }
}

//alien 
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
}

//bullets
function shoot(e) {

  if(gameOver){
    return;
  }

  if (e.code == "Space") {
    let bullet = {
      x: ship.x + shipWidth * 15 / 32,
      y: ship.y,
      width: tilesize / 8,
      height: tilesize / 2,
      used: false //touches alien
    };
    bulletArray.push(bullet);
  }
}

function detectCollision(a, b) {
  return a.x < b.x + b.width &&   //a's top left corner doesn't reach b's top right corner
    a.x + a.width > b.x &&   //a's top right corner passes b's top left corner
    a.y < b.y + b.height &&  //a's top left corner doesn't reach b's bottom left corner
    a.y + a.height > b.y;    //a's bottom left corner passes b's top left corner
}
