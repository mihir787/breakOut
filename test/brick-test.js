const assert = require('chai').assert;
const Brick = require('../lib/brick');

function setupBricks() {
  var collection = [];
  for (var i = 0; i < 5; i++) {
    var row = [];

    for (var j = 0; j < 5; j++) {
      row.push(new Brick(i, j));
    }
    collection.push(row);
  };
  return collection;
};

describe('Brick', function () {
  it('should exist', function () {
    assert(Brick);
  });

  it('should construct an object', function () {
    assert(new Brick());
  });

  it('should start out present', function () {
    const brick = new Brick();
    assert.equal(brick.present, true);
  });

  it('should flip to dead when it we call hit()', function () {
    const brick = new Brick();
    brick.hit();
    assert.equal(brick.present, false);
  });

  it('should initialize with position and dimensions', function () {
    const brick = (new Brick(0, 0));
    assert.equal(brick.x, 0);
    assert.equal(brick.y, 0);
    assert.equal(brick.width, 99);
    assert.equal(brick.height, 29);
  });

  it('should be able to position multiple rows of bricks', function () {
    collection = setupBricks();
    assert.equal(collection[0][0].x, 0);
    assert.equal(collection[0][0].y, 0);
    assert.equal(collection[1][1].x, 100);
    assert.equal(collection[1][1].y, 30);
    assert.equal(collection[2][2].x, 200);
    assert.equal(collection[2][2].y, 60);
    assert.equal(collection[3][3].x, 300);
    assert.equal(collection[3][3].y, 90);
    assert.equal(collection[4][4].x, 400);
    assert.equal(collection[4][4].y, 120);
  });

});
