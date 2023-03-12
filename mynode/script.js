"use strict";
const fs = require("fs");
const cards = require("./trumpdata.js");

const cardList = cards.amberCards;

console.log(Object.keys(cardList).length);

const cardJSON = JSON.stringify(cardList);

// const dataFilePath = path.join(__dirname, "data", "cards.json");
const dataFilePath = ".";

// const fileData = fs.readFileSync(dataFilePath);

// fs.open("cards.json");

fs.writeFileSync("cards.json", cardJSON);
