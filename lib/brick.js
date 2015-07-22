function Brick() {
  this.live = true
};

Brick.prototype.hit = function () {
  this.live = false;
  return this;
}

module.exports = Brick;
