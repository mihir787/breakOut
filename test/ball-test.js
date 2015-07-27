const assert = require('chai').assert;
const Ball = require('../lib/ball');

describe('Ball', function () {
  it('should work', function () {
    assert(Ball);
  });

  it('should construct an object', function() {
    assert(new Ball());
  });

  it('should have dimensions and position', function() {
    const ball = new Ball();
    assert.equal(ball.x, 25);
    assert.equal(ball.y, 400);
    assert.equal(ball.radius, 10);
    assert.equal(ball.xSlope, 3);
    assert.equal(ball.ySlope, -6);
  });

  it('should change position when not next to a wall', function() {
    const ball = new Ball();
    assert.equal(ball.x, 25);
    assert.equal(ball.y, 400);
    ball.move();
    assert.equal(ball.x, 28);
    assert.equal(ball.y, 394);
  });

  it('should change direction when hitting horizontal wall', function() {
    const ball = new Ball();
    ball.y = 6;
    ball.ySlope = -4;
    assert.equal(ball.x, 25);
    assert.equal(ball.y, 6);
    ball.move();
    assert.equal(ball.x, 28);
    assert.equal(ball.y, 2);
    ball.move();
    assert.equal(ball.x, 31);
    assert.equal(ball.y, -2);
  });

  it('should change direction when hitting vertical wall on the left side', function() {
    const ball = new Ball();
    ball.x = 3;
    ball.xSlope = -2;
    assert.equal(ball.x, 3);
    assert.equal(ball.y, 400);
    ball.move();
    assert.equal(ball.x, 5);
    assert.equal(ball.y, 394);
    ball.move();
    assert.equal(ball.x, 3);
    assert.equal(ball.y, 388);
  });

  it('should change direction when hitting vertical wall on the left side', function() {
    const ball = new Ball();
    ball.x = 496;
    ball.xSlope = 2;
    assert.equal(ball.x, 496);
    assert.equal(ball.y, 400);
    ball.move();
    assert.equal(ball.x, 494);
    assert.equal(ball.y, 394);
    ball.move();
    assert.equal(ball.x, 496);
    assert.equal(ball.y, 388);
    ball.move();
    assert.equal(ball.x, 494);
    assert.equal(ball.y, 382);
  });


});
