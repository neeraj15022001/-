var SNAKE_SECTION_GREEN = "#758520";

function SnakeSection(x, y) {
  // Set snake section coordinates
  this.setX(x);
  this.setY(y);
}

SnakeSection.prototype = new SnakeWorldObject();

SnakeSection.prototype.draw = function (context, spacing) {
  DrawUtil.drawCircle(
    context,
    spacing * this.getX() + spacing / 2,
    spacing * this.getY() + spacing / 2,
    spacing / 2,
    SNAKE_SECTION_GREEN
  );
};