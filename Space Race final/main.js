import { Obstacles } from "./obstacles.js";
import { Position, Velocity } from "./shapes.js";
import { Player } from "./player.js";
import { keyPressOne, keyPressTwo, keyUpOne, keyUpTwo } from "./event.js";
import { Background } from "./background.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

window.addEventListener("keypress", keyPressOne);
window.addEventListener("keypress", keyPressTwo);
window.addEventListener("keyup", keyUpOne);
window.addEventListener("keyup", keyUpTwo);


class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;
    this.background = new Background(canvas.width, canvas.height);

    this.lastTime = 0;
    this.deltaTime = 0;
    this.lastTime = Date.now();
    this.addPlayer(this);
  }

  // Adds player, creates entities array
  addPlayer(){
    this.entities = [
      new Player(
        new Position(canvas.width / 4, canvas.height - 90),
        { w: 15, h: 60 },
        "green",
        0,
        new Position(canvas.width / 4, canvas.height - 90),
        document.getElementById("source")
      ),
      new Player(
        new Position((canvas.width / 4) * 3, canvas.height - 90),
        { w: 15, h: 60 },
        "red",
        0,
        new Position((canvas.width / 4) * 3, canvas.height - 90),  
        document.getElementById("source2")
      )
    ]
    this.playerOne = this.entities[0];
    this.playerTwo = this.entities[1];
  }

  //Generates a random number for radius, position and velocity in Obstacles
  rand(max, min) {
    return Math.random() * max + min;
  }

  // Draws line in middle of screen
  drawLine(){
    this.context.beginPath();
    this.context.strokeStyle = "white";
    this.context.moveTo(this.canvas.width / 2, 0);
    this.context.lineTo(this.canvas.width / 2, this.canvas.height);
    this.context.stroke();
    this.context.closePath();
  }

  // Adds background
  addBackground(){
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.background.backgroundDraw(context);
    this.background.updateBackground();
  }

  // Adds obstacles
  addObstacles() {
    if (this.entities.length < 17) {
      let num = 0;
      let num2 = 1;
      if (this.rand(2, 0) < 1) {
        num = 0;
        num2 = 1;
      } else {
        num = this.canvas.width;
        num2 = -1;
      }
      this.entities.push(
        new Obstacles(
          new Position(num, this.rand(this.canvas.height / 2, 20)),
          new Velocity(this.rand(200, 100) * num2, 0),
          "grey",
          this.rand(8,3)
        )
      );
    }
  }

  // Starts game
  start() {
    animate();
  }
}

export const game = new Game(canvas, context);

// Main function, calling other functions
function animate() {

  let currentTime = Date.now();
  game.deltaTime = (currentTime - game.lastTime) / 1000;
  game.lastTime = currentTime;

  //Adds moving background
  game.addBackground()
  game.drawLine()

  //Loop through entities in a polymorphism manner
  for(let i = 0; i < game.entities.length; i++) {
    let entity = game.entities[i];
    entity.move(game);
    entity.draw(game);
    game.addObstacles();
    if ( entity instanceof Obstacles ){
      if ( entity.tickCollision(game, game.playerOne) || entity.tickCollision(game, game.playerTwo) ){
        game.entities.splice(i, 1);
      }
    }
  }

  requestAnimationFrame(animate);
}

//Starts game
game.start();
