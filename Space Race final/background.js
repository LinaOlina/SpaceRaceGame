export class Background {
  constructor(backgroundWidth, backgroundHeight) {
    this.backgroundWidth = backgroundWidth;
    this.backgroundHeight = backgroundHeight;
    this.image = new Image();
    this.image.src = "natthimmel.jpg";
    this.x = 0;
    this.y = 0;
    this.width = 500;
    this.height = 800;
    this.speed = 5;
  }
// Prints out background
  backgroundDraw(context) {
    context.drawImage(
      this.image, 
      this.x, 
      this.y - this.height, 
      this.width, 
      this.height);
    context.drawImage(
      this.image,
      this.x,
      this.y,
      this.width,
      this.height
    );
    context.drawImage(
      this.image,
      this.x + 500,
      this.y - this.height,
      this.width,
      this.height
    );
    context.drawImage(
      this.image,
      this.x + 500,
      this.y ,
      this.width,
      this.height
    );
  }
// Makes background move/scroll
  updateBackground() {
    this.y += this.speed;
    if (this.y > 0 + this.height) {
      this.y = 0;
    }
  }
}
