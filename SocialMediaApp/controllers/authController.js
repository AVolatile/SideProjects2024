const User = require("../models/userModel");

const register = (req, res) => {
  const newUser = {
    username: req.body.username,
    password: req.body.password,
  };

  User.create(newUser, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).send("User created successfully");
  });
};

const login = (req, res) => {
  const { username, password } = req.body;

  User.findByUsername(username, (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length === 0 || results[0].password !== password) {
      return res.status(401).send("Invalid credentials");
    }
    res.status(200).send("Login successful");
  });
};

module.exports = { register, login };
