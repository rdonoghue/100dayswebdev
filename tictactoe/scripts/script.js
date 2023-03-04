"use strict";

let allBoxes = document.getElementsByClassName("ttsquare");
let buttonReStart = document.querySelector("#restart");
let messageBox = document.getElementById("message");
let player1Name = document.getElementById("p1");
let player2Name = document.getElementById("p2");

let modalOverlay = document.getElementById("overlay");
let modalForm = document.getElementById("modalform");
let nameForm = document.getElementById("entername");
let nameField = document.getElementById("submitname");
let buttonEditPlayerOne = document.getElementById("editPlayerOne");
let buttonEditPlayerTwo = document.getElementById("editPlayerTwo");
let buttonCloseModal = document.querySelector(".closex");

let messageFormProblem = document.getElementById("formMessage");

nameForm.addEventListener("submit", getName);
// nameForm.addEventListener("reset", hideModal);

buttonEditPlayerOne.addEventListener("click", showModal);
buttonEditPlayerTwo.addEventListener("click", showModal);
buttonCloseModal.addEventListener("click", hideModal);
buttonReStart.addEventListener("click", resetBoxes);

modalOverlay.addEventListener("click", hideModal);

resetBoxes();
