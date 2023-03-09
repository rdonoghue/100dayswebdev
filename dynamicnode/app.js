"use strict";
// Boilerplate
const testFlag = true;
const path = require("path");
const express = require("express");
const app = express();

const defaultRoutes = require("./routes/default");
const restaurantRoutes = require("./routes/restaurants");
const tester = require("./util/tester.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public")); //pointer to any static filenames

app.use("/", defaultRoutes);
app.use("/", restaurantRoutes);

//catches all requests that haven't been picked up.
// 404 errors
app.use(function (req, res) {
  res.status(404).render("404");
});

app.use(function (error, req, res, next) {
  res.status(500).render("500");
});

// kick off
app.listen(3000);
tester.test(1);
