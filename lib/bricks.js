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

// Bricks.prototype.drawBricks = function(ctx) {
//   for(var i = 0; i < this.collection.length; i++) {
//     debugger;
//     this.collection[i].drawBrick(ctx);
//   }

  // this.collection.forEach(function(brick) {
  //   debugger;
  //   this.drawBrick();
  // });
// }
