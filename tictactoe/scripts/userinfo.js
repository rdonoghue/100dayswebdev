"use strict";

function setSymbols() {
  player1Symbol.textContent = players[0].symbol;
  player2Symbol.textContent = players[1].symbol;
}

function showModal(event) {
  const clickedButton = event.target.dataset.playerid;
  currentlyEditing = clickedButton;
  nameField.value = "";

  if (clickedButton == 1) {
    typingPlayer.textContent = "Player 1, ";
  } else if (clickedButton == 2) {
    typingPlayer.textContent = "Player 2, ";
  } else {
    typingPlayer.textContent = "";
  }
  modalOverlay.style.visibility = "visible";
  modalForm.style.visibility = "visible";
}
function hideModal() {
  modalOverlay.style.visibility = "hidden";
  modalForm.style.visibility = "hidden";
  messageFormProblem.style.visibility = "hidden";
  nameField.value = "";
}

function getName(event) {
  event.preventDefault();
  //   console.log(event);
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("submitname").trim();
  if (!enteredPlayerName) {
    // Need to throw an error
    messageFormProblem.style.visibility = "visible";
    nameField.value = "";
    return;
  }
  if (currentlyEditing == 1) {
    player1 = enteredPlayerName;
  } else if (currentlyEditing == 2) {
    player2 = enteredPlayerName;
  }
  players[currentlyEditing - 1].name = enteredPlayerName;

  updateNames();
  hideModal();
}

function updateNames() {
  player1Name.innerText = players[0].name;
  player2Name.innerText = players[1].name;
  currentPlayerName.textContent = players[currentTurn].name;
}
