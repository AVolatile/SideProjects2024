// Import required modules
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
require('dotenv').config();

// Set up a connection to the MySQL database using environment variables
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Connect to the MySQL server
connection.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL Server!');
});

// Initialize an Express application
const app = express();

// Middleware to parse URL-encoded bodies (for form data)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // This is important to parse JSON bodies as well

// Retrieve environment variables
const PORT = process.env.PORT || 3000;

// Route to handle patient creation
app.post('/createPatient', (req, res) => {
  const { FirstName, LastName, Birthday, PhoneNumber, Address, ReasonForVisit } = req.body;

  const patientDetails = {
    FirstName: FirstName,
    LastName: LastName,
    Birthday: Birthday,
    PhoneNumber: PhoneNumber,
    Address: Address,
    ReasonForVisit: ReasonForVisit
  };

  connection.query('INSERT INTO patientinfo SET ?', patientDetails, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error inserting data into database');
    } else {
      res.status(200).send('Patient added successfully');
    }
  });
});

// Route to fetch patient info
app.get('/patientInfo', (req, res) => {
  connection.query('SELECT * FROM patientinfo', (err, results) => {
    if (err) {
      console.error('Error fetching patient info:', err);
      res.status(500).send('Error fetching patient info');
    } else {
      res.status(200).json(results);
    }
  });
});

// Start the Express server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
