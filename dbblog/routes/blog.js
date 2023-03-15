const express = require("express");

const router = express.Router();

const db = require("../data/database.js");

console.log("starting");

router.get("/", function (req, res) {
  res.redirect("posts");
});

// List of Posts

router.get("/posts", async function (req, res) {
  const [postList] = await db.query(`
  SELECT posts.*, posts.id as id, authors.name as authorname 
  FROM posts 
  JOIN authors on posts.author_id = authors.id `);
  await res.render("posts-list", { postList: postList });
});

// New Post Form

router.get("/new-post", async function (req, res) {
  const [authors] = await db.query("SELECT * FROM authors");
  res.render("create-post", { authors: authors });
});

// Edit Post Form

router.get("/edit-post/:id", async function (req, res) {
  const postId = req.params.id;
  const [postDetails] = await db.query(
    `SELECT posts.*, authors.name as name 
    FROM POSTS JOIN authors ON posts.author_id = authors.id 
    WHERE posts.id= ?`,
    [postId]
  );
  res.render("edit-post", { postDetails: postDetails[0] });
});

// Write New Post Entry to DB

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

// router.post("/edit", async function (req, res) {
//   const data = [
//     req.body.title,
//     req.body.summary,
//     req.body.content,
//     req.body.author_id,
//     req.body.id,
//   ];

//   console.log(req.body);
//   console.log(data);

//   await db.query(
//     "UPDATE posts SET title=?, summary=?, body=?, author_id=? WHERE id=?",
//     [data[0], data[1], data[2], data[3], data[4]]
//   );
// });

router.post("/edit", async function (req, res) {
  const data = [
    req.body.title,
    req.body.summary,
    req.body.content,
    req.body.author_id,
    req.body.id,
  ];
  console.log(data);

  await db
    .query(
      "UPDATE posts SET title=?, summary=?, body=?, author_id=? WHERE id=?",
      [data[0], data[1], data[2], data[3], data[4]],
      function () {
        console.log("It ran");
      }
    )
    .catch(handleError);

  res.redirect("/posts");
});

router.post("/delete", async function (req, res) {
  const data = [req.body.delete_id];

  await db.query("DELETE FROM posts WHERE id=?", [data[0]]);
  res.redirect("/posts");
});

router.get("/details/:id", async function (req, res) {
  const postId = req.params.id;
  const [postDetails] = await db.query(
    "SELECT posts.*, authors.name as name FROM POSTS JOIN  authors ON posts.author_id = authors.id  WHERE posts.id= ?",
    [postId]
  );
  res.render("post-detail", { postDetails: postDetails[0] });
});

module.exports = router;

function handleError(err) {
  console.log("Crud");
  console.log(err);
}
