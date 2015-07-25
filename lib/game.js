window.onload = init;
var ball;
var paddle;
var bricks;
var ctx;

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
  if ((ball.y >= 470) && (paddle.x < ball.x + ball.xSlope) && (ball.x + ball.xSlope < paddle.x + paddle.width)) {
    ball.ySlope = -ball.ySlope;
  }
    // ball.ySlope = -ball.ySlope;
  // if (paddle.y + this.ySlope > canvas.height || this.y + this.ySlope < 0)
  //   this.ySlope = -this.ySlope;

  // ball.x += ball.xSlope;
  // ball.y += ball.ySlope;
}
