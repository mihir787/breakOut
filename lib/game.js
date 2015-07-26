window.onload = init;
window.addEventListener("keydown", checkKeyPressed, false);
var ball;
var paddle;
var bricks;
var ctx;
var count = 0;

var rowcolors = ["#FF1C0A", "#FFFD0A", "#00A308", "#0008DB", "#EB0093"];
var paddlecolor = "#FFFFFF";
var ballcolor = "#600000";
var backcolor = "#606060";


function init() {
  const canvas = document.getElementById("canvas");
  canvas.style.backgroundColor = backcolor;
  ctx = canvas.getContext("2d");
  ctx.fillStyle = "red"

  document.getElementById("start-button").addEventListener('click', function (){
    ball = new Ball();
    ball.drawBall(ctx);
    paddle = new Paddle();
    paddle.drawPaddle(ctx);
    bricks = new Bricks(ctx);
    requestAnimationFrame(gameLoop);
  });
}


function gameLoop() {
  clear();
  paddle.drawPaddle(ctx);
  bricks.drawBricks();
  checkForObject();
  ball.drawBall(ctx).move();
  requestAnimationFrame(gameLoop);
};

function rect(x, y, w, h) {
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.closePath();
  ctx.fill();
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function checkForObject() {
  if (checkForPaddle()) {
    return
  } else {
    checkForBricks();
  }
};

function checkForPaddle() {
  if ((ball.y >= 470) && (paddle.x < ball.x + ball.xSlope + ball.radius) && (ball.x + ball.xSlope + ball.radius < paddle.x + paddle.width)) {
    ball.xSlope = 8 * ((ball.x-(paddle.x+paddle.width/2))/paddle.width);
    ball.ySlope = -ball.ySlope;
  } else if (ball.y + ball.radius + ball.ySlope >= canvas.height) {
    window.alert("You Loose");
    window.location.reload();
  }
}

function checkForBricks() {
  winGame();
  for(var i = 0; i < bricks.collection.length; i++) {
    for (var j = 0; j < bricks.collection[i].length; j++) {
      if ((bricks.collection[i][j].present) &&
      (bricks.collection[i][j].x < ball.x + ball.xSlope + ball.radius) &&
      (ball.x + ball.xSlope + ball.radius < bricks.collection[i][j].x + bricks.collection[i][j].width) &&
      (bricks.collection[i][j].y + bricks.collection[i][j].height  > ball.y + ball.ySlope - ball.radius)) {
        bricks.collection[i][j].present = false;
        return ball.ySlope = -ball.ySlope;
      }
    }
  }
}

function winGame() {
  if (bricks.present.length === 0) {
    window.alert("You Win");
    window.location.reload();
  }
}

function checkKeyPressed(e) {
  if (e.keyCode == "39") {
    paddle.moveRight();
  } else if (e.keyCode == "37") {
    paddle.moveLeft();
  }
}
