const Brick = require('./brick')

function Bricks() {
  this.collection = [];
  for (var i = 0; i < 5; i++) {
    var row = [];

    for (var j = 0; j < 5; j++) {
      row.push(new Brick());
    }
    this.collection.push(row);
  }
}

module.exports = Bricks;
