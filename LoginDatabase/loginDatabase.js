const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const session = require('express-session');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL Server!');
});

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Note: secure should be true in production with HTTPS
}));

const PORT = process.env.PORT || 3000;

app.post('/createUser', (req, res) => {
  const { FirstName, LastName, Department, StartDate, EndDate, Salary, JobTitle, Username, Password } = req.body;

  const userDetails = {
    FirstName,
    LastName,
    Department,
    StartDate,
    EndDate,
    Salary,
    JobTitle,
    Username,
    Password
  };

  connection.query('INSERT INTO employees SET ?', userDetails, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error inserting data into database');
    } else {
      res.status(200).send('User added successfully');
    }
  });
});

app.post('/login', (req, res) => {
  const { Username, Password } = req.body;

  connection.query('SELECT * FROM employees WHERE Username = ?', [Username], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error during login');
      return;
    }

    if (results.length === 0) {
      res.status(401).send('User not found');
      return;
    }

    const user = results[0];

    if (Password === user.Password) {
      req.session.userId = user.id;
      res.status(200).send('Login successful');
    } else {
      res.status(401).send('Invalid credentials');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
