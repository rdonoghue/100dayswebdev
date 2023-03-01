"use strict";

let setMax = 60;
let yellow = setMax / 2;
let orange = setMax / 5;
let remainingChar = setMax;

let textForm = document.querySelector("#maintext");
let warningArea = document.querySelector("#remaining");

let resetButton = document.getElementById("resetSpread");
textForm.addEventListener("input", updateWarning);
setup();

function updateWarning() {
  let myLength = textForm.value.length;
  let myRemaining = setMax - myLength;
  warningArea.textContent = myRemaining + " characters remaining";
  if (myRemaining == 0) {
    warningArea.className = "red";
  } else if (myRemaining < yellow && myRemaining > orange) {
    warningArea.className = "yellow";
  } else if (myRemaining <= orange && myRemaining > 0) {
    warningArea.className = "orange";
  } else warningArea.className = "green";
}

function setup() {
  textForm.setAttribute("maxLength", setMax);
  warningArea.className = "green";
  warningArea.textContent = setMax + " characters remaining";
}
