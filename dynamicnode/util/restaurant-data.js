const fs = require("fs");
const path = require("path");
const uuid = require("uuid");

// const { connected } = require("process");
const dataFilePath = path.join(__dirname, "..", "data", "restaurants.json");

function getStoredRestaurants() {
  const fileData = fs.readFileSync(dataFilePath);
  const restaurantData = JSON.parse(fileData);

  return restaurantData;
}

function writeRestaurants(restaurant) {
  restaurant.id = uuid.v4();
  const fileData = fs.readFileSync(dataFilePath);
  const restaurantData = JSON.parse(fileData);
  restaurantData.push(restaurant);
  fs.writeFileSync(dataFilePath, JSON.stringify(restaurantData));
}

module.exports = {
  getStoredRestaurants: getStoredRestaurants,
  writeRestaurants: writeRestaurants,
};
