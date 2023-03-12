const express = require("express");

const router = express.Router();

const db = require("../data/database.js");

router.get("/", function (req, res) {
  res.redirect("posts");
});

router.get("/posts", async function (req, res) {
  const [postList] = await db.query("SELECT * FROM posts");
  await res.render("posts-list", { postList: postList });
});

router.get("/new-post", async function (req, res) {
  const [authors] = await db.query("SELECT * FROM authors");
  res.render("create-post", { authors: authors });
});

router.post("/posts", async function (req, res) {
  const data = [
    req.body.title,
    req.body.summary,
    req.body.content,
    req.body.author,
  ];
  await db.query(
    "INSERT INTO posts (title, summary, body, author_id) VALUES (?)",
    [data]
  );
  res.redirect("/posts");
});

// router.get("/details/:id", function (req, res) {
//   const postid = req.params.id;

//   const restaurantData = resData.getStoredRestaurants();
//   for (const k of restaurantData) {
//     if (k.id === restaurantId) {
//       return res.render("restaurant-detail", {
//         restaurantDetails: k,
//       });
//     }
//   }
//   res.render("post-detail");

// };

router.get("/details/:id", async function (req, res) {
  const postId = req.params.id;
  const [postDetails] = await db.query(
    "SELECT * FROM POSTS JOIN  authors ON posts.author_id = authors.id  WHERE posts.id= ?",
    [postId]
  );
  res.render("post-detail", { postDetails: postDetails[0] });
});

module.exports = router;
