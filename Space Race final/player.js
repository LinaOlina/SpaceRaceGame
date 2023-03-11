import { Rectangle, Velocity, Position } from "./shapes.js";
import { PlayerBall } from "./shoot.js";

export class Player extends Rectangle {
    constructor(position, sides, color, points, startPos, id) {
      super(position, new Velocity(300, 400), sides, color);

      this.points = points;
      this.startPos = startPos;
      this.id = id;
      this.timer = 0;
      this.timerTwo = 0

      this.up = false;
      this.down = false;
      this.left = false;
      this.right = false;
      this.fire = false;
  }
  
  // Handles player movement
  move(game) {
    if (this.up) {
      this.position.y -= this.velocity.dy * game.deltaTime;
    } else if (this.down) {
      this.position.y += this.velocity.dy * game.deltaTime;
    } else if (this.left) {
      this.position.x -= this.velocity.dx * game.deltaTime;
    } else if (this.right) {
      this.position.x += this.velocity.dx * game.deltaTime;
    }
  }

  // Draws player
  draw(game){
    game.context.drawImage(this.id, this.position.x-17.5, this.position.y-20, this.sides.w +30, this.sides.h +20);
    this.fireBall(game);
    this.outOfBounds(game);
    this.calculatePoints(game);
    this.pointIncrease(game);
    this.instructions(game);
  }

  // Player fires ball
  fireBall(game) {
    this.timer += game.deltaTime;
    if (this.timer > 3 && this.fire === true) {
      if (this.position.x < game.canvas.width / 2) {
        game.entities.push(
          new PlayerBall(
            new Position(this.position.x + this.sides.w, this.position.y - 20),
            new Velocity(700, 0),
            "red",
            5
          )
        );
      } else {
        game.entities.push(
          new PlayerBall(
            new Position(this.position.x + this.sides.w, this.position.y - 20),
            new Velocity(-700, 0),
            "red",
            5
   
            )
        );
      }
      this.timer = 0;
    }
  }

  // Calculate points
  calculatePoints(game) {
    game.context.font = "20px Castellar";
    game.context.fillStyle = "white";
    game.context.fillText("Points: " + game.playerOne.points, 365, 100);
    game.context.fillText("Points: " + game.playerTwo.points, 525, 100);
  }

  // Prints player instructions
  instructions(game){
    this.timerTwo += game.deltaTime
    
    if (this.timerTwo < 10) {
      if ( this.position.x < 500 ){
        game.context.font = "20px Castellar";
        game.context.fillStyle = "white"; 
        canvas.width / 4, canvas.height - 90
        game.context.fillText("Up: W  Down: S", 10, canvas.height - 100 );
        game.context.fillText("Left: A  Right: D", 10, canvas.height - 80);
        game.context.fillText("Fire: F", 10, canvas.height - 60);

      }
      if ( this.position.x > 500) {
          game.context.font = "20px Castellar";
          game.context.fillStyle = "white";
          game.context.fillText("Up: I  Down: K", canvas.width/2 +10, canvas.height - 100 );
          game.context.fillText("Left: J  Right: L", canvas.width / 2 + 10, canvas.height - 80);
          game.context.fillText("Fire: H", canvas.width / 2 + 10, canvas.height - 60)
      }
    }
  }

  // Implement point increase
  pointIncrease(game) {
    if (this.position.y + this.sides.h <= 0) {
      this.position.y = game.canvas.height;
      this.points += 1;
    }
  }

  // Makes so player cannot move outside of canvas
  outOfBounds(game) {
    if (this.position.x <= this.startPos.x - game.canvas.width / 4) {
      this.position.x = this.startPos.x - game.canvas.width / 4;
    } 
    if (
      this.position.x + this.sides.w >
      this.startPos.x + game.canvas.width / 4
    ) {
      this.position.x = this.startPos.x - this.sides.w + game.canvas.width / 4;
    } 
    if (this.position.y >= game.canvas.height - this.sides.h) {
      this.position.y = this.startPos.y + 30;
    }
  }
}
