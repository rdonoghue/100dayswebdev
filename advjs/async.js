const fs = require("fs/promises");

function readFile() {
  const fileData = fs.readFileSync("data.txt");
  console.log(fileData.toString());
}

function readFileAsync() {
  fs.readFile("data.txt", function (error, fileData) {
    console.log(fileData);
    console.log(fileData.toString()); // Succeeds because it DOES wait for completion
    // what abotu starting another async task?  You woudl put a CALLBACK inside a callback, which can
    // get crazily nested.  The alternative is "Promises"
  });
  // console.log(fileData.toString()); (Fails because it doesn't wait for read to complete)
  console.log("Hi There!"); //appears first, because the async is still running.
}

function readFilePromise() {
  let fileData;
  fs.readFile("data.txt")
    .then(function (fileData) {
      console.log(fileData);
      console.log(fileData.toString());
    })
    .catch(function (error) {
      console.log(error);
    });
  // could keep appending .then() issues as a "promise chain"
  console.log("Hi There!");
}

// try/catch doesn't help much with async problems
// callbacks have an error object, and you can check if it exiutis.
// promises have a ".catch" method

// If you just have one big async process that you want to wait for, one other option is "async await"
//if you put "async" before a function, it automatically becomes a promise that can bes accessed by "await"

async function readFileAwait() {
  let fileData;
  fileData = await fs.readFile("data.txt");
  console.log(fileData);
  console.log(fileData.toString());
  console.log("Hi There!");
  console.log("Notice these are now happening at the END");
}

readFileAwait();

// Note, with Await, try/catch starts being useful again.
// one limiter: no simultaneous operations
