function SnakeGame($outerContainer, maxX, maxY, spacing) {
    this.maxX = maxX;
    this.maxY = maxY;
    this.spacing = spacing;
  
    this.$snakeCanvas = $outerContainer.find('canvas');  //canvas tag
    this.$message = $outerContainer.find('.message'); //press to start button
    this.$score = $outerContainer.find('.scores .current .score'); //current score
    this.$highScore = $outerContainer.find('.scores .high .score'); //high score
  
    var context = this.$snakeCanvas.get(0).getContext('2d'); //render canvas as 2d
    context.canvas.width = maxX * spacing; //canvas width
    context.canvas.height = maxY * spacing; //canvas height
    // updating high score
    if (window.localStorage.getItem('snake-high-score')) {
      this.$highScore.html(window.localStorage.getItem('snake-high-score')); //setting value in localStorage
    }
    // current Object reference
    var game = this;
    // event listener to start game
    this.$message.click(function(e) {
      game.start(); //start method
    });
  }
  
  SnakeGame.prototype.update = function() {
    this.snake.startMove(); //Starting the snake
    const collided = this.snake.hasCollided(this.maxX,this.maxY)
    if(collided) {
      return false
    }
    var didGrow = this.snake.isSameLocation(this.food); //Detecting if food and snake are at same coordinate
    this.snake.endMove(didGrow); //
    var objRef = this
    // console.log(objRef.score)
    if (didGrow) {
      // code reaches here when the snake has grown
      // increment score by 1
      objRef.score += 1
      // create the food at a new random location
      this.food.randomizePosition(this.maxX, this.maxY)
    }
  
    // return if the snake is alive or dead, i.e. is game over?
    if(objRef.score < 0) {
      return false
    } else {
      return true
    }
  };
  
  SnakeGame.prototype.start = function() {
    this.score = 0; //set initial score to 0
    this.$message.hide(); //hide message container
    this.snake = new Snake(); //Instance of Snake Class 
    this.snake.init(this.maxX, this.maxY); //Initializer method for this class
  
    this.food = new SnakeFood(); //Snake's Food Instance
    this.food.randomizePosition(this.maxX, this.maxY); //Placing Food Object at random place
    this.loop();
  };
  
  
  SnakeGame.prototype.draw = function() {
    this.$score.html(this.score); //setting score to current score if snake is still alive
    this.$highScore.html(window.localStorage.getItem('snake-high-score')); //setting current score as new high score in local storage
    var context = this.$snakeCanvas.get(0).getContext('2d'); // render canvas as 2d
    context.clearRect(0, 0, this.spacing * this.maxX, this.spacing * this.maxX); //clearing the snake canvas
    this.snake.draw(context, this.spacing); //drawing complete snake
    this.food.draw(context, this.spacing); //drawing food
  };
  
  SnakeGame.prototype.loop = function() {
    var alive = this.update();
    // console.log(alive)
    if (alive) {
      this.draw();
      var game = this;
      setTimeout(function() {
        game.loop();
      }, 200);
    } else {
      this.recordHighScore();
      this.$message.html("Game over. Press to restart.");
      this.$message.show();
    }
  };
  
  SnakeGame.prototype.recordHighScore = function() {
    // check local storage for stored high score, data key is: 'snake-high-score'
    let highScore = localStorage.getItem("snake-high-score")
    if(!highScore) {
      highScore = 0
      window.localStorage.setItem('snake-high-score',highScore)
    }
    // set the initial high score from local storage, else set it to 0
    if (this.score > highScore) {
      // update the high score in local storage
      window.localStorage.setItem('snake-high-score',highScore)

      // this.$highScore.html(window.localStorage.setItem('snake-high-score'));
    }
  };
  