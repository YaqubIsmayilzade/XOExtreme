let gamePlay = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
];

let board = document.getElementById("board");
let game = board.getElementsByTagName("button");

const modal = document.getElementById("modal");
const winner = document.getElementById("winner");

let player = "X";

let XCord = [];
let OCord = [];

function changeValue(x, y) {
  if (checkWinner() == null && gamePlay[x][y] != "X" && gamePlay[x][y] != "O") {
    gamePlay[x][y] = player;
    game[x * 3 + y].textContent = player;

    if (player === "X") {
      XCord.push([x, y]);
    } else {
      OCord.push([x, y]);
    }
    player = player === "X" ? "O" : "X";

    console.log(XCord, OCord);

    if (XCord.length == 4) {
      game[XCord[0][0] * 3 + XCord[0][1]].textContent = "";
      gamePlay[XCord[0][0]][XCord[0][1]] = "";
      XCord.shift();
    } else if (OCord.length == 4) {
      game[OCord[0][0] * 3 + OCord[0][1]].textContent = "";
      gamePlay[OCord[0][0]][OCord[0][1]] = "";
      OCord.shift();
    }
  }

  if (checkWinner() != null) {
    modal.style.display = "flex";
    winner.textContent = checkWinner() + " is the winner";
  } else if (gamePlay.flat().every((val) => val === "X" || val === "O")) {
    modal.style.display = "flex";
    winner.textContent = "It's a draw";
  }
}

function checkWinner() {
  if (
    gamePlay[0][0] === gamePlay[0][1] &&
    gamePlay[0][0] === gamePlay[0][2] &&
    gamePlay[0][0] != ""
  ) {
    return gamePlay[0][0];
  }
  if (
    gamePlay[1][0] === gamePlay[1][1] &&
    gamePlay[1][0] === gamePlay[1][2] &&
    gamePlay[1][0] != ""
  ) {
    return gamePlay[1][0];
  }
  if (
    gamePlay[2][0] === gamePlay[2][1] &&
    gamePlay[2][0] === gamePlay[2][2] &&
    gamePlay[2][0] != ""
  ) {
    return gamePlay[2][0];
  }
  if (
    gamePlay[0][0] === gamePlay[1][0] &&
    gamePlay[0][0] === gamePlay[2][0] &&
    gamePlay[0][0] != ""
  ) {
    return gamePlay[0][0];
  }
  if (
    gamePlay[0][1] === gamePlay[1][1] &&
    gamePlay[0][1] === gamePlay[2][1] &&
    gamePlay[0][1] != ""
  ) {
    return gamePlay[0][1];
  }
  if (
    gamePlay[0][2] === gamePlay[1][2] &&
    gamePlay[0][2] === gamePlay[2][2] &&
    gamePlay[0][2] != ""
  ) {
    return gamePlay[0][2];
  }
  if (
    gamePlay[0][0] === gamePlay[1][1] &&
    gamePlay[0][0] === gamePlay[2][2] &&
    gamePlay[0][0] != ""
  ) {
    return gamePlay[0][0];
  }
  if (
    gamePlay[0][2] === gamePlay[1][1] &&
    gamePlay[0][2] === gamePlay[2][0] &&
    gamePlay[0][2] != ""
  ) {
    return gamePlay[0][2];
  }
  return null;
}

function reset() {
  gamePlay = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
  ];
  for (let i = 0; i < game.length; i++) {
    game[i].textContent = "";
  }
  XCord = [];
  OCord = [];
  modal.style.display = "none";
  player = "X";
}
