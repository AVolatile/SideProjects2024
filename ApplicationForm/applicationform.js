// Import required modules
const express = require('express'); // Express.js framework for building web applications
const mysql = require('mysql2'); // MySQL database driver
const bodyParser = require('body-parser'); // Middleware for parsing request bodies
const session = require('express-session'); // Middleware for session management
require('dotenv').config(); // Load environment variables from a .env file

// Set up a connection to the MySQL database using environment variables
const connection = mysql.createConnection({
  host: process.env.DB_HOST, // MySQL host name
  user: process.env.DB_USER, // MySQL username
  password: process.env.DB_PASSWORD, // MySQL password
  database: process.env.DB_NAME, // MySQL database name
});

// Connect to the MySQL server
connection.connect(err => {
  if (err) throw err; // Throw an error if connection fails
  console.log('Connected to MySQL Server!'); // Log successful connection
});

// Initialize an Express application
const app = express();

// Middleware to parse URL-encoded bodies (for form data)
app.use(bodyParser.urlencoded({ extended: true }));

// Retrieve environment variables
const PORT = process.env.PORT || 3000; // Port number from environment variable or default to 3000

// Route to handle job application submission
app.post('/applyJob', (req, res) => {
  // Extract job application details from request body
  const { FirstName, LastName, DateOfBirth, Email, PhoneNumber, Address, PositionApplied, ResumeLink, CoverLetter } = req.body;

  const applicationDetails = {
    FirstName: FirstName,
    LastName: LastName,
    DateOfBirth: DateOfBirth,
    Email: Email,
    PhoneNumber: PhoneNumber,
    Address: Address,
    PositionApplied: PositionApplied,
    ResumeLink: ResumeLink,
    CoverLetter: CoverLetter
  };

  // Insert job application details into the MySQL database
  connection.query('INSERT INTO job_applications SET ?', applicationDetails, (err, result) => {
    if (err) {
      console.error(err); // Log detailed error message
      res.status(500).send('Error inserting data into database'); // Send error response
    } else {
      res.status(200).send('Job application submitted successfully'); // Send success response
    }
  });
});

// Route to display the table of job applications
app.get('/applications', (req, res) => {
  // Fetch all job application data from the database
  connection.query('SELECT * FROM job_applications', (err, results) => {
    if (err) {
      console.error('Error fetching data:', err); // Log detailed error message
      res.status(500).send('Error fetching data from database'); // Send error response
      console.log(err.message); // Log error message
      return;
    }

    let tableHTML = `<h2 style="color: #ffffff;">Job Applications Table</h2>
          <table border="2" style="background-color: #333333; color: #ffffff;"> <!-- Table background color -->
            <tr>
              <th>ApplicationID</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>DateOfBirth</th>
              <th>Email</th>
              <th>PhoneNumber</th>
              <th>Address</th>
              <th>PositionApplied</th>
              <th>ResumeLink</th>
              <th>CoverLetter</th>
            </tr>`;

    // Generate HTML table rows for each job application record
    results.forEach(row => {
      tableHTML += `<tr>
          <td>${row.ApplicationID}</td>
          <td>${row.FirstName}</td>
          <td>${row.LastName}</td>
          <td>${row.DateOfBirth}</td>
          <td>${row.Email}</td>
          <td>${row.PhoneNumber}</td>
          <td>${row.Address}</td>
          <td>${row.PositionApplied}</td>
          <td>${row.ResumeLink}</td>
          <td>${row.CoverLetter}</td>
        </tr>`;
    });

    tableHTML += `</table>`;
    res.send(`<div style="background-color: #3b3b3b; color: #ffffff; padding: 20px;">${tableHTML}</div>`); // Wrap table in a div with page background color
  });
});

// Start the Express server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`); // Log server start message
});
