"use strict";
const fs = require("fs");
const cards = require("./trumpdata.js");
const cardList = cards.allCards;
// console.log(cardList);

const cardJSON = JSON.stringify(cardList);
// console.log(cardJSON);

// const dataFilePath = path.join(__dirname, "data", "cards.json");
const dataFilePath = ".";

// const fileData = fs.readFileSync(dataFilePath);
fs.writeFile("cards.json", cardJSON, function (err, file) {
  if (err) throw err;
  console.log("Saved!");
});
// fs.appendFile("cards.json", cardJSON);

// fs.writeFileSync("cards.json", cardJSON);
