function Paddle() {
  this.x = 400;
  this.y = 470;
  this.width = 100;
  this.height = 20;
};

Paddle.prototype.drawPaddle = function(ctx) {
  ctx.beginPath();
  ctx.rect(this.x, this.y, this.width, this.height);
  ctx.closePath();
  ctx.fill();
}

Paddle.prototype.moveRight = function () {
  if (this.x + this.width < canvas.width) {
    this.x += 20;
  }
};

Paddle.prototype.moveLeft = function () {
  if (this.x > 0) {
    this.x -= 20;
  }
}

Paddle.prototype.widthRange = function () {
  var leftRangeMax = (this.x - (this.width/2));
  var rightRangeMax = (this.x + (this.width/2));
  return [leftRangeMax, rightRangeMax]
}

Paddle.prototype.heightRange = function () {
  var bottomRangeMax = (this.y - (this.height/2));
  var topRangeMax = (this.y + (this.height/2));
  return [bottomRangeMax, topRangeMax]
}

Paddle.prototype.dimensions = function() {
  return [this.widthRange(), this.heightRange()]
}
