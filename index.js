var Line2 = require('line2');
var Segment2 = require('segment2');

function rayVsCircle(rayish, circle) {
  if (circle.containsPoint(rayish.start)) {
    return rayish.start;
  }

  var intersections = rayLineVsCircle(rayish, circle);

  if (intersections.length) {
    return rayish.start.nearest(intersections.filter(within(rayish)));
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

  return rayLine.intersectCircle(circle.position, circle.radius());
}

/**
* @param {Rayish} rayish
* @return {Function} function that returns true when passed a Vec2 that is
*                    within rayish
*/
function within(rayish) {
  var raySegment = new Segment2(rayish.start, rayish.end);

  return function(vec) {
    return raySegment.containsPoint(vec);
  };
}

module.exports = rayVsCircle;
