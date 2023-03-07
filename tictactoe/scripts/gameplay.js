"use strict";

function resetBoxes() {
  if (players[0].name == "Player 1" || players[1].name == "Player 2") {
    alert("Please enter player names before you start");
    return;
  }

  for (let k of allBoxes) {
    k.classList.remove("filled");
    k.classList.remove("winbox");
    k.classList.remove("tiebox");
    k.classList.add("empty");
    k.addEventListener("click", setBox);
    k.innerText = "";
  }
  playSpace.classList.remove("hidden");
  tttNums = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  currentTurn = 0;
  turnsTaken = 0;
  messageBox.classList.remove("hidden");
  winnerBox.classList.add("hidden");
  tieMessageBox.classList.add("hidden");
  updateNames();
}

function changeTurn() {
  currentTurn = (currentTurn + 1) % 2;
  currentPlayerName.textContent = players[currentTurn].name;
}

function checkWinner() {
  // console.log("Checking Winner");
  // console.table(tttList);
  // console.table(tttNums);
  turnsTaken++;

  for (let k in tttWinSets) {
    let winRow = tttWinSets[k].row;
    let winValue =
      tttNums[tttWinSets[k].squares[0]] +
      tttNums[tttWinSets[k].squares[1]] +
      tttNums[tttWinSets[k].squares[2]];
    // console.log(winRow + ": " + winValue);
    if (Math.abs(winValue) == 3) {
      declareWinner(winRow);
      break;
    }
  }
  if (turnsTaken < 9) {
    changeTurn();
  } else {
    declareTie();
  }
}

function declareWinner(winRow) {
  winnerName.textContent = players[currentTurn].name;
  messageBox.classList.add("hidden");
  winnerBox.classList.remove("hidden");

  let rowsToHighlight = winPattern[winRow];
  for (let k = 0; k < rowsToHighlight.length; k++) {
    rowsToHighlight[k].classList.add("winbox");
  }

  freezeBoard();
}

function declareTie() {
  winnerName.textContent = players[currentTurn].name;
  messageBox.classList.add("hidden");
  tieMessageBox.classList.remove("hidden");
  for (let k of allBoxes) {
    k.classList.add("tiebox");
  }

  freezeBoard();
}

function freezeBoard() {
  for (let k of allBoxes) {
    k.removeEventListener("click", setBox);
  }
}

function setBox() {
  let currentBox = this;
  currentBox.classList.remove("empty");
  currentBox.innerText = players[currentTurn].symbol;
  currentBox.classList.add("filled");
  currentBox.removeEventListener("click", setBox);
  // tttList[currentBox.id] = players[currentTurn].value;
  tttNums[currentBox.dataset.num] += players[currentTurn].value;

  checkWinner();
}
