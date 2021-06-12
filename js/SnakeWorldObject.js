/* Base class for objects in Snake World */

function SnakeWorldObject() {
  this.xPosition;
  this.yPosition;
}

SnakeWorldObject.prototype.getX = function() {
  // return x coordinate
  return this.xPosition
};
SnakeWorldObject.prototype.getY = function() {
  // return y coordinate
  return this.yPosition
};
SnakeWorldObject.prototype.setX = function(newX) {
  // set current object's x coordinate
  // console.log(newX)
  this.xPosition = newX
};
SnakeWorldObject.prototype.setY = function(newY) {
  // set current object's y coordinate
  // console.log(newY)
  this.yPosition = newY
};

// Requires another SnakeWorldObject
SnakeWorldObject.prototype.isSameLocation = function(snakeWorld) {
  // check if passed object is at the same location as current object.
  // console.log(this)
  // console.log(snakeWorld)
  if(this.xPosition === snakeWorld.xPosition && this.yPosition === snakeWorld.yPosition) {
    return true
  } else {
    return false
  }
};
