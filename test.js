var assert = require('assert');
var rayVsCircle = require('./');

describe('rayVsCircle()', function() {
  var circle, ray;

  beforeEach(function() {
    circle = {
      position: {
        x: 50,
        y: 50
      },
      radius: 5
    };
  });

  describe('hits', function() {
    describe('ray goes completely through circle', function() {
      it('returns point where ray enters circle', function() {
        ray = createRay(10, 50, 70, 50);

        var point = rayVsCircle(ray, circle);

        assert.equal(point.x, 45);
        assert.equal(point.y, 50);
      });
    });

    describe('ray starts outside, stops inside circle', function() {
      it('returns point where ray enters circle', function() {
        ray = createRay(10, 50, 50, 50);

        var point = rayVsCircle(ray, circle);

        assert.equal(point.x, 45);
        assert.equal(point.y, 50);
      });
    });

    describe('ray is tangent to circle', function() {
      it('returns point where ray hits circle edge', function() {
        ray = createRay(10, 45, 70, 45);

        var point = rayVsCircle(ray, circle);

        assert.equal(point.x, 50);
        assert.equal(point.y, 45);
      });
    });

    describe('ray starts inside circle', function() {
      it('returns ray start', function() {
        ray = createRay(50, 50, 70, 50);

        var point = rayVsCircle(ray, circle);

        assert.equal(point.x, 50);
        assert.equal(point.y, 50);
      });
    });

    describe('ray starts on circle edge', function() {
      it('returns ray start', function() {
        ray = createRay(50, 55, 70, 55);

        var point = rayVsCircle(ray, circle);

        assert.equal(point.x, 50);
        assert.equal(point.y, 55);
      });
    });
  });

  describe('misses', function() {
    describe('ray does not reach circle', function() {
      it('returns null', function() {
        ray = createRay(10, 50, 20, 50);

        var point = rayVsCircle(ray, circle);

        assert.strictEqual(point, null);
      });
    });

    describe('ray goes wide of circle', function() {
      it('returns null', function() {
        ray = createRay(10, 50, 60, 60);

        var point = rayVsCircle(ray, circle);

        assert.strictEqual(point, null);
      });
    });

    describe('ray goes away from circle', function() {
      it('returns null', function() {
        ray = createRay(20, 50, 0, 50);

        var point = rayVsCircle(ray, circle);

        assert.strictEqual(point, null);
      });
    });
  });
});

function createRay(x1, y1, x2, y2) {
  return {
    start: {
      x: x1,
      y: y1
    },
    end: {
      x: x2,
      y: y2
    }
  };
}
