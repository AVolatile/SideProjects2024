const Post = require("../models/postModel");

const createPost = (req, res) => {
  const newPost = {
    user_id: req.body.user_id,
    content: req.body.content,
  };

  Post.create(newPost, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).send("Post created successfully");
  });
};

const getPosts = (req, res) => {
  Post.getAll((err, results) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(results);
  });
};

const likePost = (req, res) => {
  const postId = req.params.id;

  Post.like(postId, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(200).send("Post liked");
  });
};

const dislikePost = (req, res) => {
  const postId = req.params.id;

  Post.dislike(postId, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(200).send("Post disliked");
  });
};

module.exports = { createPost, getPosts, likePost, dislikePost };
