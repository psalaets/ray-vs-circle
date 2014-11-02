var assert = require('assert');

describe('rayVsCircle()', function() {
  describe('hits', function() {
    describe('ray goes completely through circle', function() {
      it('returns point where ray enters circle');
    });

    describe('ray starts outside, stops inside circle', function() {
      it('returns point where ray enters circle');
    });

    describe('ray is tangent to circle', function() {
      it('returns point where ray hits circle edge');
    });

    describe('ray starts inside circle', function() {
      it('returns ray start');
    });

    describe('ray starts on circle edge', function() {
      it('returns ray start');
    });
  });

  describe('misses', function() {
    describe('ray does not reach circle', function() {
      it('returns null');
    });

    describe('ray goes wide of circle', function() {
      it('returns null');
    });

    describe('ray goes away from circle', function() {
      it('returns null');
    });
  });
});
