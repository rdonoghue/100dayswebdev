"use strict";
console.log(location.href);

let currentTurn = "x";
let tttBoard = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let player1 = "Player 1";
let player2 = "Player 2";

let allBoxes = document.getElementsByClassName("ttsquare");
let reStart = document.querySelector("#restart");
let messageBox = document.getElementById("message");
let player1Name = document.getElementById("p1");
let player2Name = document.getElementById("p2");
let nameForm = document.getElementById("entername");
let nameField = document.getElementById("submitname");

let nameForm2 = document.getElementById("entername2");
let nameField2 = document.getElementById("submitname2");

nameForm.addEventListener("submit", getName);
nameForm2.addEventListener("submit", getName2);
reStart.addEventListener("click", resetBoxes);

resetBoxes();

function getName() {
  console.log(nameField.value);
  player1 = nameField.value;
  nameField.value = player1;
  updateNames();
  location.assign("index.html?#top");
}

function getName2() {
  console.log(nameField2.value);
  player2 = nameField2.value;
  nameField2.value = player2;
  updateNames();
  location.assign("index.html?#top");
}

function updateNames() {
  console.log("P1: " + player1);
  console.log("P2: " + player2);

  player1Name.innerText = player1;
  player2Name.innerText = player2;
}

function resetBoxes() {
  for (let k of allBoxes) {
    k.classList = "ttsquare empty";
    k.addEventListener("click", setBox);
    k.innerText = "";
  }
  tttBoard = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  message.innerHTML = "It's your turn <b>" + player1 + "</b>!";
  player1Name.innerText = player1;
  player2Name.innerText = player2;
  currentTurn = "x";
}

function changeTurn(xo) {
  currentTurn = xo;
  let turnMessage = "It's your turn, " + xo.toUpperCase() + "!";
  messageBox.innerHTML = turnMessage;
}

function checkWinner() {
  console.log("Checking Winner");
  console.log(tttBoard[0][0] + tttBoard[0][1] + tttBoard[0][2]);
  console.table(tttBoard);
  if (
    tttBoard[0][0] + tttBoard[0][1] + tttBoard[0][2] == 3 ||
    tttBoard[1][0] + tttBoard[1][1] + tttBoard[1][2] == 3 ||
    tttBoard[2][0] + tttBoard[2][1] + tttBoard[2][2] == 3 ||
    tttBoard[0][0] + tttBoard[1][0] + tttBoard[2][0] == 3 ||
    tttBoard[0][1] + tttBoard[1][1] + tttBoard[2][1] == 3 ||
    tttBoard[0][2] + tttBoard[1][2] + tttBoard[2][2] == 3 ||
    tttBoard[0][0] + tttBoard[1][1] + tttBoard[2][2] == 3 ||
    tttBoard[0][2] + tttBoard[1][1] + tttBoard[2][0] == 3
  ) {
    declareWinner("x");
  } else if (
    tttBoard[0][0] + tttBoard[0][1] + tttBoard[0][2] == -3 ||
    tttBoard[1][0] + tttBoard[1][1] + tttBoard[1][2] == -3 ||
    tttBoard[2][0] + tttBoard[2][1] + tttBoard[2][2] == -3 ||
    tttBoard[0][0] + tttBoard[1][0] + tttBoard[2][0] == -3 ||
    tttBoard[0][1] + tttBoard[1][1] + tttBoard[2][1] == -3 ||
    tttBoard[0][2] + tttBoard[1][2] + tttBoard[2][2] == -3 ||
    tttBoard[0][0] + tttBoard[1][1] + tttBoard[2][2] == -3 ||
    tttBoard[0][2] + tttBoard[1][1] + tttBoard[2][0] == -3
  ) {
    declareWinner("o");
  }
}

function declareWinner(winner) {
  let winMessage = winner.toUpperCase() + " wins!";
  messageBox.innerHTML = winMessage;
  console.log(winMessage);
  console.log(messageBox);
  freezeBoard();
}

function freezeBoard() {
  for (let k of allBoxes) {
    k.classList = "ttsquare empty";
    k.removeEventListener("click", setBox);
  }
}

function setBox() {
  let currentBox = this;

  currentBox.classList.remove("empty");
  if (currentTurn == "x") {
    currentBox.classList.add("x");
    currentBox.innerText = "X";
    changeTurn("o");
    currentBox.removeEventListener("click", setBox);
    switch (currentBox.id) {
      case "nw":
        tttBoard[0][0] = 1;
        break;
      case "nn":
        tttBoard[0][1] = 1;
        break;
      case "ne":
        tttBoard[0][2] = 1;
        break;
      case "ww":
        tttBoard[1][0] = 1;
        break;
      case "cc":
        tttBoard[1][1] = 1;
        break;
      case "ee":
        tttBoard[1][2] = 1;
        break;
      case "sw":
        tttBoard[2][0] = 1;
        break;
      case "ss":
        tttBoard[2][1] = 1;
        break;
      case "se":
        tttBoard[2][2] = 1;
        break;
    }
  } else {
    currentBox.classList.add("o");
    currentBox.innerText = "O";
    changeTurn("x");
    currentBox.removeEventListener("click", setBox);

    switch (currentBox.id) {
      case "nw":
        tttBoard[0][0] = -1;
        break;
      case "nn":
        tttBoard[0][1] = -1;
        break;
      case "ne":
        tttBoard[0][2] = -1;
        break;
      case "ww":
        tttBoard[1][0] = -1;
        break;
      case "cc":
        tttBoard[1][1] = -1;
        break;
      case "ee":
        tttBoard[1][2] = -1;
        break;
      case "sw":
        tttBoard[2][0] = -1;
        break;
      case "ss":
        tttBoard[2][1] = -1;
        break;
      case "se":
        tttBoard[2][2] = -1;
        break;
    }
  }
  checkWinner();
}
