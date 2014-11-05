var Line2 = require('line2');
var Vec2 = require('vec2');
var lineIntersect = require('line-intersect');

/**
* @param {object} ray - Object that looks like
* {
*   start: {x: number, y: number},
*   end: {x: number, y: number}
* }
*
* @param {object} circle - Object that looks like
* {
*   position: {x: number, y: number},
*   radius: number
* }
*
* @return {vec2} point where ray hits circle or null if ray doesn't hit
*/
function rayVsCircle(rayish, circle) {
  var rayStart = new Vec2(rayish.start);

  if (circleContainsPoint(circle.position, circle.radius, rayish.start)) {
    return rayStart;
  }

  var intersections = rayLineVsCircle(rayish, circle);

  if (intersections.length) {
    return rayStart.nearest(intersections.filter(within(rayish)));
  } else {
    return null;
  }
}

/**
* Treats ray like an infinite line see where it intersects circle.
*
* @param {Rayish} rayish
* @param {Circle2} circle
* @return {Array} containing 0, 1, or 2 Vec2 where line hits circle
*/
function rayLineVsCircle(rayish, circle) {
  var rayLine = new Line2(
    rayish.start.x,
    rayish.start.y,
    rayish.end.x,
    rayish.end.y
  );

  return rayLine.intersectCircle(circle.position, circle.radius);
}

function circleContainsPoint(circlePosition, radius, point) {
  return distance(circlePosition.x, circlePosition.y, point.x, point.y) <= radius;
}

function distance(x1, y1, x2, y2) {
  var x = x1 - x2;
  var y = y1 - y2;
  return Math.sqrt(x * x + y * y);
}

/**
* @param {object} rayish - ray-like
* @return {Function} function that returns true when passed an x/y that is
*                    within ray
*/
function within(rayish) {
  return function(vec) {
    return lineIntersect.colinearPointWithinSegment(
      vec.x, vec.y,
      rayish.start.x, rayish.start.y,
      rayish.end.x, rayish.end.y
    );
  };
}

module.exports = rayVsCircle;
