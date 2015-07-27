const Brick  = require('../lib/brick');

function Bricks(ctx) {
  this.collection = [];
  for (var i = 0; i < 5; i++) {
    var row = [];
    for (var j = 0; j < 5; j++) {
      row.push(new Brick(i, j));
      row[j].drawBrick(ctx);
    }
    this.collection.push(row);
  }
}

Bricks.prototype.drawBricks = function() {
  this.present = [];
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      if (this.collection[i][j].present) {
        this.present.push(this.collection[i][j])
        this.collection[i][j].drawBrick(ctx);
      }
    }
  }
}

module.exports = Bricks;
