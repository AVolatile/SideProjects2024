const db = require("./db");

const Post = {
  create: (post, callback) => {
    const query = "INSERT INTO posts (user_id, content) VALUES (?, ?)";
    db.query(query, [post.user_id, post.content], callback);
  },
  getAll: (callback) => {
    const query = "SELECT * FROM posts";
    db.query(query, callback);
  },
  like: (postId, callback) => {
    const query = "UPDATE posts SET likes = likes + 1 WHERE id = ?";
    db.query(query, [postId], callback);
  },
  dislike: (postId, callback) => {
    const query = "UPDATE posts SET dislikes = dislikes + 1 WHERE id = ?";
    db.query(query, [postId], callback);
  },
};

module.exports = Post;
