const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "social_media",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("MySQL connected...");
});

module.exports = connection;
