const fs = require("fs");

function readFile() {
  try {
    const fileData = fs.readFileSync("data.json");
  } catch {
    console.log("An error occoured!");
  }
  console.log("hello");
}

function doSomething(word = "there") {
  console.log(`Hello ${wor}`);
}

function deBug(testFunct) {
  var functionName = testFunct.toString().split("(");
  try {
    testFunct();
  } catch (error) {
    console.log(`Error with ${functionName[0]}`);
    console.log(error.message);
  }
}

deBug(doSomething);
