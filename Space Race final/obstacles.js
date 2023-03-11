import { Circle, Position } from "./shapes.js";

export class Obstacles extends Circle {
  constructor(position, velocity, color, radius) {
    super(position, velocity, color, radius);
  }

  // Moves obstacles
  move(game) {
    this.position.x += this.velocity.dx * game.deltaTime;
    this.position.y -= this.velocity.dy * game.deltaTime;
  }

  // Prints obstacles
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
      Math.PI * 2);
    game.context.fill();
    game.context.stroke();
    game.context.closePath();
  }

  // If collision
  tickCollision(game, player) {
    if ( this.collision(player) ) {
      player.position = new Position(player.startPos.x, player.startPos.y);
      return true
    }
    if ( this.checkFrame(game) ){
      return true
    }
    else { return false }
  }

  // Check collision with player
  collision(player) {
    let cdx = Math.abs(
      this.position.x - player.position.x - player.sides.w / 2
    );
    let cdy = Math.abs(
      this.position.y - player.position.y - player.sides.h / 2
    );

    if (cdx > player.sides.w / 2 + this.radius) {
      return false;
    }
    if (cdy > player.sides.h / 2 + this.radius) {
      return false;
    }

    if (cdx <= player.sides.w / 2) {
      return true;
    }
    if (cdy <= player.sides.h / 2) {
      return true;
    }

    let distSquared =
      (cdx - player.sides.w / 2) ** 2 + (cdy - player.sides.h / 2) ** 2;
    return distSquared <= this.radius ** 2;
  }

  // Check collision with frame
  checkFrame(game) {
    if (
      this.position.x < -this.radius ||
      this.position.x - this.radius > game.canvas.width
    ) {
      return true;
    }
  }
}
