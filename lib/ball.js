function Ball() {
  this.x = 150;
  this.y = 150;
  this.radius = 10;
  this.xSlope = 2;
  this.ySlope = 4;
};


Ball.prototype.move = function () {
  if (this.x + this.xSlope > WIDTH || this.x + this.xSlope < 0)
    this.xSlope = -this.xSlope;
  if (this.y + this.ySlope > HEIGHT || this.y + this.ySlope < 0)
    this.ySlope = -this.ySlope;

  this.x += this.xSlope;
  this.y += this.ySlope;
}


module.exports = Ball;
