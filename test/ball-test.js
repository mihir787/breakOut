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

  it('should change position when not next to a wall', function() {
    const ball = new Ball();
    assert.equal(ball.x, 150);
    assert.equal(ball.y, 150);
    ball.move();
    assert.equal(ball.x, 152);
    assert.equal(ball.y, 154);
  });

  it('should change direction when hitting horizontal wall', function() {
    const ball = new Ball();
    ball.y = 6;
    ball.ySlope = -4;
    assert.equal(ball.x, 150);
    assert.equal(ball.y, 6);
    ball.move();
    assert.equal(ball.x, 152);
    assert.equal(ball.y, 2);
    ball.move();
    assert.equal(ball.x, 154);
    assert.equal(ball.y, 6);
  });

  it('should change direction when hitting horizontal wall', function() {
    const ball = new Ball();
    ball.y = 6;
    ball.ySlope = -4;
    assert.equal(ball.x, 150);
    assert.equal(ball.y, 6);
    ball.move();
    assert.equal(ball.x, 152);
    assert.equal(ball.y, 2);
    ball.move();
    assert.equal(ball.x, 154);
    assert.equal(ball.y, 6);
  });

  it('should change direction when hitting vertical wall on the left side', function() {
    const ball = new Ball();
    ball.x = 3;
    ball.xSlope = -2;
    assert.equal(ball.x, 3);
    assert.equal(ball.y, 150);
    ball.move();
    assert.equal(ball.x, 1);
    assert.equal(ball.y, 154);
    ball.move();
    assert.equal(ball.x, 3);
    assert.equal(ball.y, 158);
  });

  it('should change direction when hitting vertical wall on the left side', function() {
    const ball = new Ball();
    ball.x = 496;
    ball.xSlope = 2;
    assert.equal(ball.x, 496);
    assert.equal(ball.y, 150);
    ball.move();
    assert.equal(ball.x, 498);
    assert.equal(ball.y, 154);
    ball.move();
    assert.equal(ball.x, 500);
    assert.equal(ball.y, 158);
    ball.move();
    assert.equal(ball.x, 498);
    assert.equal(ball.y, 162);
  });


});
