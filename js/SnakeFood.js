function SnakeFood() {
  this.img = document.createElement('img');
  this.img.src = 'images/food1.png';
}
SnakeFood.prototype = new SnakeWorldObject();

SnakeFood.prototype.randomizePosition = function(maxX, maxY) {
  // Set snake food at random positions.
  let randomX = Math.floor(Math.random() * maxX)
  let randomY = Math.floor(Math.random() * maxY)
  console.log(randomX,randomY)
  if(randomX === 0) {
    randomX += 1
  } else if(randomX === 20) {
    randomX -= 1
  } else if(randomY === 0) {
    randomY += 1
  } else if(randomY === 20) {
    randomY -= 1
  }
  // console.log(this)
  this.setX(randomX)
  this.setY(randomY)
  // console.log(maxX,maxY,randomX,randomY)
};

SnakeFood.prototype.draw = function(context, spacing) {
  DrawUtil.drawImage(
    context,
    this.img,
    spacing * this.getX(),
    spacing * this.getY(),
    spacing,
    spacing
  );
};
