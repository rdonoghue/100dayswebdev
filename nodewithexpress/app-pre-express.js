"use strict";

const http = require("http");
const server = http.createServer(handleRequest);
server.listen(3000);

// localhost:3000/currenttime should show current time
// localhouse:3000  should return the hello world page

function handleRequest(request, response) {
  if (request.url === "/currenttime") {
    response.statusCode = 200;
    response.end(
      "<html><h1>Current Time: " + new Date().toISOString() + "</h1></html>"
    );
    //code1
  } else if (request.url === "/") {
    response.statusCode = 200; // success
    response.end("<html><h1>Very Basic Code</h1></html>"); // needed in Safari
    //   response.end("<h1>Very Basic Code</h1>"); // works in non-safari
  }
}
