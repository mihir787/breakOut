require("underscore")
const assert = require('chai').assert;
const Bricks = require('../lib/bricks');
const Brick  = require('../lib/brick');

describe('Bricks', function () {
  it('should exist', function () {
    assert(Bricks);
  });

  it('should construct an object', function () {
    assert(new Bricks());
  });

  it('should have a property called collectoin that is an array', function () {
    const bricks = new Bricks();
    assert.isArray(bricks.collection);
  });

  it('should contain five arrays as rows', function () {
    const bricks = new Bricks();
    assert.equal(bricks.collection.length, 5);
    bricks.collection.forEach(function (row) {
      assert.isArray(row);
    });
  });

  it('should have five bricks in each row', function () {
    const bricks = new Bricks();
    const firstRow = bricks.collection[0];
    assert.equal(firstRow.length, 5);
    const firstBrick = bricks.collection[0][0];
    assert.instanceOf(firstBrick, Brick)
  });

  
});
