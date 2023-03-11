export class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

export class Velocity {
  constructor(dx, dy) {
    this.dx = dx;
    this.dy = dy;
  }
}
class Entity {
  constructor(position, velocity, color) {
    this.position = position;
    this.velocity = velocity;
    this.color = color;
  }
  move(game) { return }
  draw(game) { return }
}

export class Rectangle extends Entity {
  constructor(position, velocity, sides, color) {
    super(position, velocity, color);
    this.sides = sides;
  }
  move(game) { return }
  draw(game) { return }
}

export class Circle extends Entity {
  constructor(position, velocity, color, radius) {
    super(position, velocity, color);
    this.radius = radius;
  }
  move(game) { return }
  draw(game) { return }
  
  checkFrame(game) {
    if (
      this.position.x < -this.radius ||
      this.position.x - this.radius > game.canvas.width
    ) {
      return true;
    }
  }
}
