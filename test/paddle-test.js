const assert = require('chai').assert;
const Paddle = require('../lib/paddle');

describe('Paddle', function () {
  it('should work', function () {
    assert(Paddle);
  });

  it('should construct an object', function() {
    assert(new Paddle());
  });

  it('should initialize with position and dimensions', function () {
    const paddle = (new Paddle());
    assert.equal(paddle.x, 400);
    assert.equal(paddle.y, 470);
    assert.equal(paddle.width, 100);
    assert.equal(paddle.height, 20);
  });

  it('should move when move() is called', function () {
    const paddle = (new Paddle());
    paddle.moveRight();
    assert.equal(paddle.x, 400);
    paddle.moveLeft();
    assert.equal(paddle.x, 380);
  });

  it('should know of its own dimensions', function () {
    const paddle = (new Paddle());
    var dimensions = paddle.dimensions();
    var widthMin = dimensions[0][0]
    var widthMax = dimensions[0][1]
    var heightMin = dimensions[1][0]
    var heightMax = dimensions[1][1]
    assert.equal(widthMin, 350);
    assert.equal(widthMax, 450);
    assert.equal(heightMin, 460);
    assert.equal(heightMax, 480);
  });
});
