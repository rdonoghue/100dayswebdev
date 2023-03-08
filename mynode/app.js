"use strict";
// Boilerplate
const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public")); //pointer to any static filenames

// Actual Code
const messageText = "this is a <b>message</b> for node";

// Views
app.get("/", function (req, res) {
  const dataFilePath = path.join(__dirname, "data", "colors.json");
  const fileData = fs.readFileSync(dataFilePath);
  const colorData = JSON.parse(fileData);
  res.render("index", { messageText: messageText, colorData: colorData });
});

// Start Server
app.listen(3000);
