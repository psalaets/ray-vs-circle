var assert = require('assert');
var Circle2 = require('circle2');
var Vec2 = require('vec2');
var Rayish = require('rayish');

var rayVsCircle = require('./');

describe('rayVsCircle()', function() {
  var circle, rayish;

  beforeEach(function() {
    circle = new Circle2(new Vec2(50, 50), 5);
  });

  describe('hits', function() {
    describe('ray goes completely through circle', function() {
      it('returns point where ray enters circle', function() {
        rayish = new Rayish(new Vec2(10, 50), new Vec2(70, 50));

        var point = rayVsCircle(rayish, circle);

        assert.equal(point.x, 45);
        assert.equal(point.y, 50);
      });
    });

    describe('ray starts outside, stops inside circle', function() {
      it('returns point where ray enters circle', function() {
        rayish = new Rayish(new Vec2(10, 50), new Vec2(50, 50));

        var point = rayVsCircle(rayish, circle);

        assert.equal(point.x, 45);
        assert.equal(point.y, 50);
      });
    });

    describe('ray is tangent to circle', function() {
      it('returns point where ray hits circle edge', function() {
        rayish = new Rayish(new Vec2(10, 45), new Vec2(70, 45));

        var point = rayVsCircle(rayish, circle);

        assert.equal(point.x, 50);
        assert.equal(point.y, 45);
      });
    });

    describe('ray starts inside circle', function() {
      it('returns ray start', function() {
        rayish = new Rayish(new Vec2(50, 50), new Vec2(70, 50));

        var point = rayVsCircle(rayish, circle);

        assert.equal(point.x, 50);
        assert.equal(point.y, 50);
      });
    });

    describe('ray starts on circle edge', function() {
      it('returns ray start', function() {
        rayish = new Rayish(new Vec2(50, 55), new Vec2(70, 55));

        var point = rayVsCircle(rayish, circle);

        assert.equal(point.x, 50);
        assert.equal(point.y, 55);
      });
    });
  });

  describe('misses', function() {
    describe('ray does not reach circle', function() {
      it('returns null', function() {
        rayish = new Rayish(new Vec2(10, 50), new Vec2(20, 50));

        var point = rayVsCircle(rayish, circle);

        assert.strictEqual(point, null);
      });
    });

    describe('ray goes wide of circle', function() {
      it('returns null', function() {
        rayish = new Rayish(new Vec2(10, 50), new Vec2(60, 50));

        var point = rayVsCircle(rayish, circle);

        assert.strictEqual(point, null);
      });
    });

    describe('ray goes away from circle', function() {
      it('returns null', function() {
        rayish = new Rayish(new Vec2(20, 50), new Vec2(0, 50));

        var point = rayVsCircle(rayish, circle);

        assert.strictEqual(point, null);
      });
    });
  });
});
