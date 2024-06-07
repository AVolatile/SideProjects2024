const User = require("../models/userModel");

const getUserById = (req, res) => {
  const userId = req.params.id;

  User.findById(userId, (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length === 0) return res.status(404).send("User not found");
    res.status(200).json(results[0]);
  });
};

module.exports = { getUserById };
