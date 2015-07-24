function Brick(i, j) {
  this.present = true;
  this.x = (100 * j);
  this.y = (30 * i);
  this.width = 99;
  this.height = 29;
};

Brick.prototype.widthRange = function () {
  var leftRangeMax = (this.x - (this.width/2));
  var rightRangeMax = (this.x + (this.width/2));
  return [leftRangeMax, rightRangeMax]
}

Brick.prototype.drawBrick = function(ctx) {
  ctx.beginPath();
  ctx.rect(this.x, this.y, this.width, this.height);
  ctx.closePath();
  ctx.fill();
}

Brick.prototype.heightRange = function () {
  var bottomRangeMax = (this.y - (this.height/2));
  var topRangeMax = (this.y + (this.height/2));
  return [bottomRangeMax, topRangeMax]
}

Brick.prototype.dimensions = function() {
  return [this.widthRange(), this.heightRange()]
}

Brick.prototype.hit = function () {
  this.present = false;
  return this;
}
