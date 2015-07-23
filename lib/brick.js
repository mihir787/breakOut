function Brick(i, j) {
  this.present = true;
  this.x = (100 * j) + 50;
  this.y = (30 * i) + 15;
  this.width = 100;
  this.height = 30;
};

Brick.prototype.widthRange = function () {
  var leftRangeMax = (this.x - (this.width/2));
  var rightRangeMax = (this.x + (this.width/2));
  return [leftRangeMax, rightRangeMax]
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

module.exports = Brick;
