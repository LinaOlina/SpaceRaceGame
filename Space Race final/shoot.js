import { Obstacles } from "./obstacles.js";

export class PlayerBall extends Obstacles {
  constructor(position, velocity, color, radius) {
    super(position, velocity, color, radius);
  }

  move(game) {
    this.position.x += this.velocity.dx * game.deltaTime;
    this.position.y -= this.velocity.dy * game.deltaTime;
  }

  draw(game) {
    game.context.beginPath();
    game.context.fillStyle = this.color;
    game.context.strokeStyle = "yellow";
    game.context.lineWidth = 2;
    game.context.arc(
      this.position.x,
      this.position.y,
      this.radius,
      0,
      Math.PI * 2
    );
    game.context.fill();
    game.context.stroke();
    game.context.closePath();
  }
}