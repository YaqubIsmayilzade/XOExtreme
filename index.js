let gamePlay = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
];

const line = document.getElementById("line");

let board = document.getElementById("board");
let game = board.getElementsByTagName("button");
let lines = board.getElementsByTagName("div");

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

    if (OCord.length == 3 && player == "O") {
      resetColor();
      game[XCord[0][0] * 3 + XCord[0][1]].style.backgroundColor =
        "rgb(255, 162, 163)";
    }
    if (OCord.length == 3 && player == "X") {
      resetColor();
      game[OCord[0][0] * 3 + OCord[0][1]].style.backgroundColor =
        "rgb(255, 162, 163)";
    }

    player = player === "X" ? "O" : "X";

    checkWinner();
  }
}

function resetColor() {
  for (let i = 0; i < game.length; i++) {
    game[i].style.color = "black";
    game[i].style.backgroundColor = "white";
  }
}

function checkWinner() {
  if (
    gamePlay[0][0] === gamePlay[0][1] &&
    gamePlay[0][0] === gamePlay[0][2] &&
    gamePlay[0][0] != ""
  ) {
    lines[0].style.width = "80%";
    resetColor();
    return gamePlay[0][0];
  }
  if (
    gamePlay[1][0] === gamePlay[1][1] &&
    gamePlay[1][0] === gamePlay[1][2] &&
    gamePlay[1][0] != ""
  ) {
    lines[1].style.width = "80%";
    resetColor();
    return gamePlay[1][0];
  }
  if (
    gamePlay[2][0] === gamePlay[2][1] &&
    gamePlay[2][0] === gamePlay[2][2] &&
    gamePlay[2][0] != ""
  ) {
    lines[2].style.width = "80%";
    resetColor();
    return gamePlay[2][0];
  }
  if (
    gamePlay[0][0] === gamePlay[1][0] &&
    gamePlay[0][0] === gamePlay[2][0] &&
    gamePlay[0][0] != ""
  ) {
    lines[5].style.height = "80%";
    resetColor();
    return gamePlay[0][0];
  }
  if (
    gamePlay[0][1] === gamePlay[1][1] &&
    gamePlay[0][1] === gamePlay[2][1] &&
    gamePlay[0][1] != ""
  ) {
    lines[6].style.height = "80%";
    resetColor();
    return gamePlay[0][1];
  }
  if (
    gamePlay[0][2] === gamePlay[1][2] &&
    gamePlay[0][2] === gamePlay[2][2] &&
    gamePlay[0][2] != ""
  ) {
    lines[7].style.height = "80%";
    resetColor();
    return gamePlay[0][2];
  }
  if (
    gamePlay[0][0] === gamePlay[1][1] &&
    gamePlay[0][0] === gamePlay[2][2] &&
    gamePlay[0][0] != ""
  ) {
    lines[4].style.width = "100%";
    resetColor();
    return gamePlay[0][0];
  }
  if (
    gamePlay[0][2] === gamePlay[1][1] &&
    gamePlay[0][2] === gamePlay[2][0] &&
    gamePlay[0][2] != ""
  ) {
    lines[3].style.width = "100%";
    resetColor();
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
  player = "X";
  resetColor();

  for (let i = 0; i < 5; i++) {
    lines[i].style.width = "0%";
  }
  lines[5].style.height = "0%";
  lines[6].style.height = "0%";
  lines[7].style.height = "0%";
}
