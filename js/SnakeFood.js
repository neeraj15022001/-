function SnakeFood() {
  this.img = document.createElement("img");
  this.img.src = "images/food2.png";
}
SnakeFood.prototype = new SnakeWorldObject();

SnakeFood.prototype.randomizePosition = function (maxX, maxY) {
  // Set snake food at random positions.
  this.setX(Math.floor(Math.random() * maxX));
  this.setY(Math.floor(Math.random() * maxY));
};

SnakeFood.prototype.draw = function (context, spacing) {
  DrawUtil.drawImage(
    context,
    this.img,
    spacing * this.getX(),
    spacing * this.getY(),
    spacing,
    spacing
  );
};