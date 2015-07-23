function Paddle() {
  this.x = 250;
  this.y = 480;
  this.width = 100;
  this.height = 20;
};

Paddle.prototype.moveRight = function () {
  this.x += 20;
  return this;
};
Paddle.prototype.moveLeft = function () {
  this.x -=20;
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
module.exports = Paddle
