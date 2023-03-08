"use strict";
const fs = require("fs"); //native filesystem package.
const path = require("path"); //native path navigation

const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false })); //sets up parser for information in the request

app.get("/currenttime", function (req, res) {
  res.send(
    "<html><h1>Current Time: " + new Date().toISOString() + "</h1></html>"
  );
}); // same as localhost:3000/currenttime

app.get("/", function (req, res) {
  res.send(
    "<h2><form action='/store-user' method='POST'><label>Your Name</label><input type='text' name='username'><button>Submit</button></form></h2>"
  );
});

app.post("/store-user", function (req, res) {
  const userName = req.body.username;
  const filePath = path.join(__dirname, "data", "users.json"); //built in absolute path variable
  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData);
  existingUsers.push(userName);

  fs.writeFileSync(filePath, JSON.stringify(existingUsers));
  console.log(userName);
  res.send("<h2>Username " + userName + " stored</h2>");
});

app.get("/list-users", function (req, res) {
  const filePath = path.join(__dirname, "data", "users.json");
  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData);
  console.log(existingUsers);
  let responseString = "<H1>Name List</h1><ul>";
  for (const k of existingUsers) {
    responseString += "<li>" + k + "</li>";
  }
  responseString += "<ul><p>and a little more</p>";
  console.log(responseString);
  res.send(responseString);
});

app.listen(3000);
