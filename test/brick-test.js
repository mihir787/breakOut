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
    assert.equal(brick.x, 50);
    assert.equal(brick.y, 15);
    assert.equal(brick.width, 100);
    assert.equal(brick.height, 30);
  });

  it('should be able to position multiple rows of bricks', function () {
    collection = setupBricks();
    assert.equal(collection[0][0].x, 50);
    assert.equal(collection[0][0].y, 15);
    assert.equal(collection[1][1].x, 150);
    assert.equal(collection[1][1].y, 45);
    assert.equal(collection[2][2].x, 250);
    assert.equal(collection[2][2].y, 75);
    assert.equal(collection[3][3].x, 350);
    assert.equal(collection[3][3].y, 105);
    assert.equal(collection[4][4].x, 450);
    assert.equal(collection[4][4].y, 135);
  });

  it('should know of its own dimensions', function () {
    const brick = (new Brick(0,0));
    var dimensions = brick.dimensions();
    var widthMin = dimensions[0][0]
    var widthMax = dimensions[0][1]
    var heightMin = dimensions[1][0]
    var heightMax = dimensions[1][1]
    assert.equal(widthMin, 0);
    assert.equal(widthMax, 100);
    assert.equal(heightMin, 0);
    assert.equal(heightMax, 30);
  });

  it('a brick within rows of bricks should be able to know their own dimensions', function () {
    collection = setupBricks();
    var brick1 = collection[0][1].dimensions()
    var brick2 = collection[1][1].dimensions()
    var brick3 = collection[2][2].dimensions()
    var brick4 = collection[3][3].dimensions()
    var brick5 = collection[4][4].dimensions()

    // var widthMin = dimensions[0][0]
    // var widthMax = dimensions[0][1]
    // var heightMin = dimensions[1][0]
    // var heightMax = dimensions[1][1]

    assert.equal(brick1[0][0], 100);
    assert.equal(brick1[0][1], 200);
    assert.equal(brick1[1][0], 0);
    assert.equal(brick1[1][1], 30);
    assert.equal(brick2[0][0], 100);
    assert.equal(brick2[0][1], 200);
    assert.equal(brick2[1][0], 30);
    assert.equal(brick2[1][1], 60);
    assert.equal(brick3[0][0], 200);
    assert.equal(brick3[0][1], 300);
    assert.equal(brick3[1][0], 60);
    assert.equal(brick3[1][1], 90);
    assert.equal(brick4[0][0], 300);
    assert.equal(brick4[0][1], 400);
    assert.equal(brick4[1][0], 90);
    assert.equal(brick4[1][1], 120);
    assert.equal(brick5[0][0], 400);
    assert.equal(brick5[0][1], 500);
    assert.equal(brick5[1][0], 120);
    assert.equal(brick5[1][1], 150);
  });

  it.skip('should move when hit() is called', function () {
    const brick = (new Brick(0,0));
    brick.moveRight();
    assert.equal(brick.x, 270);
    brick.moveLeft();
    assert.equal(brick.x, 250);
  });
});
