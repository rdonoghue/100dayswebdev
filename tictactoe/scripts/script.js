"use strict";

// 0 1 2
// 3 4 5
// 6 7 8

let turnsTaken = 0;
let tttNums = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let tttWinSets = [
  { row: "th", value: 0, squares: [0, 1, 2] },
  { row: "mh", value: 0, squares: [3, 4, 5] },
  { row: "bh", value: 0, squares: [6, 7, 8] },
  { row: "lv", value: 0, squares: [0, 3, 6] },
  { row: "cv", value: 0, squares: [1, 4, 7] },
  { row: "rv", value: 0, squares: [2, 5, 8] },
  { row: "d1", value: 0, squares: [0, 4, 8] },
  { row: "d2", value: 0, squares: [2, 4, 6] },
];

let currentTurn = 0;
const players = [
  {
    name: "Player 1",
    symbol: "X",
    value: 1,
  },
  {
    name: "Player 2",
    symbol: "O",
    value: -1,
  },
];
let currentlyEditing;
let player1 = "Player 1";
let player2 = "Player 2";

let allBoxes = document.getElementsByClassName("ttsquare");
let playSpace = document.getElementById("playSpace");
let buttonReStart = document.querySelector("#restart");
let messageBox = document.getElementById("playmessage");
let winnerBox = document.getElementById("winmessage");
let tieMessageBox = document.getElementById("tiemessage");
let player1Name = document.getElementById("p1");
let player2Name = document.getElementById("p2");
let currentPlayerName = document.getElementById("currentPlayer");
let modalOverlay = document.getElementById("overlay");
let modalForm = document.getElementById("modalform");
let nameForm = document.getElementById("entername");
let nameField = document.getElementById("submitname");
let buttonEditPlayerOne = document.getElementById("editPlayerOne");
let buttonEditPlayerTwo = document.getElementById("editPlayerTwo");
let buttonCancelModal = document.getElementById("resetButton");
let buttonCloseModal = document.querySelector(".closex");
let typingPlayer = document.getElementById("typingPlayer");
let winnerName = document.getElementById("winnerName");
let player1Symbol = document.getElementById("player1Symbol");
let player2Symbol = document.getElementById("player2Symbol");

var winPattern = {
  d1: document.getElementsByClassName("d1"),
  d2: document.getElementsByClassName("d2"),
  th: document.getElementsByClassName("th"),
  mh: document.getElementsByClassName("mh"),
  bh: document.getElementsByClassName("bh"),
  lv: document.getElementsByClassName("lv"),
  cv: document.getElementsByClassName("cv"),
  rv: document.getElementsByClassName("rv"),
};

let messageFormProblem = document.getElementById("formMessage");
nameForm.addEventListener("submit", getName);
// nameForm.addEventListener("reset", hideModal);

buttonEditPlayerOne.addEventListener("click", showModal);
buttonEditPlayerTwo.addEventListener("click", showModal);
buttonCloseModal.addEventListener("click", hideModal);
buttonCancelModal.addEventListener("click", hideModal);

buttonReStart.addEventListener("click", resetBoxes);

modalOverlay.addEventListener("click", hideModal);

// resetBoxes();
setSymbols();
