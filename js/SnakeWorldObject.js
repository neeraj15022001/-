/* Base class for objects in Snake World */

function SnakeWorldObject() {}

SnakeWorldObject.prototype.getX = function() {
  // return x coordinate
};
SnakeWorldObject.prototype.getY = function() {
  // return y coordinate
};
SnakeWorldObject.prototype.setX = function(newX) {
  // set current object's x coordinate
};
SnakeWorldObject.prototype.setY = function(newY) {
  // set current object's y coordinate
};

// Requires another SnakeWorldObject
SnakeWorldObject.prototype.isSameLocation = function(snakeWorld) {
  // check if passed object is at the same location as current object.
};
