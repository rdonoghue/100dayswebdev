const express = require("express");
const resData = require("../util/restaurant-data");

const router = express.Router();

router.get("/restaurants/:id", function (req, res) {
  // id is availabler in this function so we need to have that ID in the data
  const restaurantId = req.params.id;
  const restaurantData = resData.getStoredRestaurants();
  for (const k of restaurantData) {
    if (k.id === restaurantId) {
      return res.render("restaurant-detail", {
        restaurantDetails: k,
      });
    }
  }

  res.status(404).render("404");
});

router.get("/restaurants", function (req, res) {
  let order = req.query.order;
  let arrow;
  const restaurantData = resData.getStoredRestaurants();
  let newOrder;
  if (order === "desc") {
    newOrder = "asc";
    arrow = "&#9650;";
  } else {
    order = "asc";
    newOrder = "desc";
    arrow = "&#9660;";
  }

  restaurantData.sort(function (resA, resB) {
    var result = 0;
    if (resA.name > resB.name) {
      result = 1;
    } else {
      result = -1;
    }
    if (order === "desc") {
      result *= -1;
    }
    return result;
  });

  res.render("restaurants", {
    numberofRestaurants: restaurantData.length,
    restaurants: restaurantData,
    buttonOrder: newOrder,
    arrow: arrow,
  });
});

router.get("/recommend", function (req, res) {
  res.render("recommend");
  //   const HTMLFilePath = path.join(__dirname, "views", "recommend.html");
  //   res.sendFile(HTMLFilePath);
});

router.post("/recommend", function (req, res) {
  const restaurant = req.body;
  resData.writeRestaurants(restaurant);
  res.redirect("/confirm");
});

module.exports = router;
