import { game } from "./main.js";

//Player one key movement
export function keyPressOne(event) {
  if (event.repeat) {
    return;
  } else if (event.key === "w") {
    game.playerOne.up = true;
  } else if (event.key === "s") {
    game.playerOne.down = true;
  } else if (event.key === "a") {
    game.playerOne.left = true;
  } else if (event.key === "d") {
    game.playerOne.right = true;
  } else if (event.key === "f") {
    game.playerOne.fire = true;
  } 
}
export function keyUpOne(event) {
  if (event.repeat) {
    return;
  } else if (event.key === "w") {
    game.playerOne.up = false;
  } else if (event.key === "s") {
    game.playerOne.down = false;
  } else if (event.key === "a") {
    game.playerOne.left = false;
  } else if (event.key === "d") {
    game.playerOne.right = false;
  } else if (event.key === "f") {
    game.playerOne.fire = false;
  } 
}

//Player Two key movement
export function keyPressTwo(event) {
  if (event.repeat) {
    return;
  } else if (event.key === "i") {
    game.playerTwo.up = true;
  } else if (event.key === "k") {
    game.playerTwo.down = true;
  } else if (event.key === "j") {
    game.playerTwo.left = true;
  } else if (event.key === "l") {
    game.playerTwo.right = true;
  } else if (event.key === "h") {
    game.playerTwo.fire = true;
  }
}
export function keyUpTwo(event) {
  if (event.repeat) {
    return;
  } else if (event.key === "i") {
    game.playerTwo.up = false;
  } else if (event.key === "k") {
    game.playerTwo.down = false;
  } else if (event.key === "j") {
    game.playerTwo.left = false;
  } else if (event.key === "l") {
    game.playerTwo.right = false;
  } else if (event.key === "h") {
    game.playerTwo.fire = false;
  }
}
