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

// View/route handling

app.get("/", function (req, res) {
  res.render("index");
  //   const HTMLFilePath = path.join(__dirname, "views", "index.html");
  //   res.sendFile(HTMLFilePath);
});

app.get("/index.html", function (req, res) {
  res.render("index");
  //   const HTMLFilePath = path.join(__dirname, "views", "index.html");
  //   res.sendFile(HTMLFilePath);
});

app.get("/restaurants", function (req, res) {
  const dataFilePath = path.join(__dirname, "data", "restaurants.json");
  const fileData = fs.readFileSync(dataFilePath);
  const restaurantData = JSON.parse(fileData);
  res.render("restaurants", {
    numberofRestaurants: restaurantData.length,
    restaurants: restaurantData,
  });
});

app.get("/about", function (req, res) {
  res.render("about");
  //   const HTMLFilePath = path.join(__dirname, "views", "about.html");
  //   res.sendFile(HTMLFilePath);
});

app.get("/confirm", function (req, res) {
  res.render("confirm");
  //   const HTMLFilePath = path.join(__dirname, "views", "confirm.html");
  //   res.sendFile(HTMLFilePath);
});

app.get("/recommend", function (req, res) {
  res.render("recommend");
  //   const HTMLFilePath = path.join(__dirname, "views", "recommend.html");
  //   res.sendFile(HTMLFilePath);
});

app.post("/recommend", function (req, res) {
  const restaurant = req.body;
  const dataFilePath = path.join(__dirname, "data", "restaurants.json");
  const fileData = fs.readFileSync(dataFilePath);
  const restaurantData = JSON.parse(fileData);
  restaurantData.push(restaurant);
  fs.writeFileSync(dataFilePath, JSON.stringify(restaurantData));

  res.redirect("/confirm");
});

// kick off
app.listen(3000);
