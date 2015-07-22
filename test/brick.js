const assert = require('chai').assert;
const Brick = require('../lib/brick');

describe('Brick', function () {
  it('should exist', function () {
    assert(Brick);
  });

  it('should construct an object', function () {
    assert(new Brick());
  });

  it('should start out live', function () {
    const brick = new Brick();
    assert.equal(brick.live, true);
  });

  it('should flip to dead when it we call hit()', function () {
    const brick = new Brick();
    brick.hit();
    assert.equal(brick.live, false);
  });
});
