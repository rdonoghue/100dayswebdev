"use strict";

let player1 = "Player 1";
let player2 = "Player 2";

function showModal() {
  modalOverlay.style.visibility = "visible";
  modalForm.style.visibility = "visible";
}

function hideModal() {
  modalOverlay.style.visibility = "hidden";
  modalForm.style.visibility = "hidden";
  messageFormProblem.style.visibility = "hidden";
}

function getName(event) {
  event.preventDefault();
  //   console.log(event);
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("submitname").trim();
  console.log(enteredPlayerName);
  if (!enteredPlayerName) {
    // Need to throw an error
    messageFormProblem.style.visibility = "visible";
    nameField.value = "";
    return;
  }

  player1 = enteredPlayerName;

  updateNames();
  hideModal();
}

function updateNames() {
  console.log("P1: " + player1);
  console.log("P2: " + player2);

  player1Name.innerText = player1;
  player2Name.innerText = player2;
}
