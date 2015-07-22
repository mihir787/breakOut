const assert = require('chai').assert;
const Ball = require('../lib/ball');

describe('Ball', function () {
  it('should work', function () {
    assert(Ball);
  });

  it('should construct an object', function() {
    assert(new Ball());
  });

  it.skip('should be drawn', function() {
    const ball = new Ball();
    assert.equal(ball.size,  "75, 75, 10, 0, Math.PI*2, true")
    assert.equal(ball.color,  "red")
  });

  it.skip('should bounce', function() {
    const ball = new Ball();
    var width = 300;
    var height = 300;
    var x = 150;
    var y = 150;
    var horizontalSlope = 2;
    var verticalSlope = 4;
    assert.equal()
  });

});
