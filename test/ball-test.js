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

  it('should have dimensions and position', function() {
    const ball = new Ball();
    assert.equal(ball.x, 150);
    assert.equal(ball.y, 150);
    assert.equal(ball.radius, 10);
    assert.equal(ball.xSlope, 2);
    assert.equal(ball.ySlope, 4);
  });

});
