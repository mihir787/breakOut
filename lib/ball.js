function Ball() {
  this.x = 25;
  this.y = 450;
  this.radius = 10;
  this.xSlope = 2;
  this.ySlope = 4;
};

Ball.prototype.move = function (ctx) {
  if (this.x + this.xSlope > canvas.width || this.x + this.xSlope < 0)
    this.xSlope = -this.xSlope;
  if (this.y + this.ySlope > canvas.height || this.y + this.ySlope < 0)
    this.ySlope = -this.ySlope;

  this.x += this.xSlope;
  this.y += this.ySlope;
}

Ball.prototype.drawBall = function(ctx) {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();
  return this;
}
