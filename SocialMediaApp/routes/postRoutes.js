const express = require("express");
const router = express.Router();
const {
  createPost,
  getPosts,
  likePost,
  dislikePost,
} = require("../controllers/postController");

router.post("/", createPost);
router.get("/", getPosts);
router.post("/:id/like", likePost);
router.post("/:id/dislike", dislikePost);

module.exports = router;
