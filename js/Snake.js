var NUM_INITIAL_SECTIONS = 3;
// Directions
var UP = 0;
var UP_KEY_CODE = 38;
var DOWN = 1;
var DOWN_KEY_CODE = 40;
var LEFT = 2;
var LEFT_KEY_CODE = 37;
var RIGHT = 3;
var RIGHT_KEY_CODE = 39;

function Snake() {
  this.img = document.createElement('img'); //creating img container for snake
  this.img.src = '../images/snake2.png'; //setting value of img container to snake2
  this.sections = [];
}

Snake.prototype = new SnakeWorldObject();

Snake.prototype.setupSnake = function(maxX, maxY) {
  // Set snake's starting coordinates
  this.setX(maxX/2)
  this.setY(maxY/2)
  for(let i = 0; i < NUM_INITIAL_SECTIONS; i++) {
    this.sections.push(this.img)
  }
  // create initial number of snake sections (snake length)
};
Snake.prototype.hasCollided = function(maxX, maxY) {
  // Check if snake has collided with itself or board boundaries.
  // console.log(maxX,maxY)
  // console.log(this.getX(),this.getY(),maxX,maxY)
  if(this.getX() === 0 || this.getY() === 0 || this.getX() === maxX || this.getY() === maxY) {
    return true
  } else {
    return false
  }
};

Snake.prototype.endMove = function(didGrow) {
  if (!didGrow) {
    this.sections.shift(); //pop first entry from sections array
  }
};

Snake.prototype.startMove = function() {
  // console.log("Calling start move")
  this.direction = this.nextDirection;
  // console.log(this,this.direction,this.nextDirection)
  // Move snake here
  switch(this.direction){ 
    case UP:
      this.setY(this.getY() - 1)
      break
    case DOWN: 
      this.setY(this.getY() + 1)
      break
    case LEFT:
      this.setX(this.getX() - 1)
      break
    case RIGHT:
      this.setX(this.getX() + 1)
  }
};

Snake.prototype.draw = function(context, spacing) {
  // Draw the complete snake
  DrawUtil.drawImage(
    context,
    this.img,
    spacing * this.getX(),
    spacing * this.getY(),
    spacing,
    spacing
  );
};

Snake.prototype.init = function(maxX, maxY) {
  this.setupListeners();
  this.setupSnake(maxX, maxY);
};

Snake.prototype.setupListeners = function() {
  this.direction = UP;
  this.nextDirection = UP;
  var objectRef = this
  document.addEventListener('keydown', function(e) {
    e.preventDefault();
    // Set snake's nextDirection based on keypress.
    const currentKeyCode = e.keyCode
    let newNextDirection = UP
    switch(currentKeyCode) {
      case 37:
        newNextDirection = LEFT
        break
      case 38:
        newNextDirection = UP
        break
      case 39:
        newNextDirection = RIGHT
        break
      case 40:
        newNextDirection = DOWN
    }
    objectRef.nextDirection = newNextDirection
  });
};
