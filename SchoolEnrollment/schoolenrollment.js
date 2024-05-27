// Import required modules
const express = require('express'); // Express.js framework for building web applications
const mysql = require('mysql2'); // MySQL database driver
const bodyParser = require('body-parser'); // Middleware for parsing request bodies
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

// Route to handle student enrollment
app.post('/enrollStudent', (req, res) => {
  // Extract student details from request body
  const { firstName, lastName, dateOfBirth, grade, parentName, parentEmail, address } = req.body;

  const studentDetails = {
    firstName: firstName,
    lastName: lastName,
    dateOfBirth: dateOfBirth,
    grade: grade,
    parentName: parentName,
    parentEmail: parentEmail,
    address: address
  };

  // Insert student details into the MySQL database
  connection.query('INSERT INTO students SET ?', studentDetails, (err, result) => {
    if (err) {
      console.error(err); // Log detailed error message
      res.status(500).send('Error inserting data into database'); // Send error response
    } else {
      res.status(200).send('Student enrolled successfully'); // Send success response
    }
  });
});

// Route to display the table of students
app.get('/students', (req, res) => {
  // Fetch all student data from the database
  connection.query('SELECT studentID, firstName, lastName, dateOfBirth, grade, parentName, parentEmail, address FROM students', (err, results) => {
    if (err) {
      console.error('Error fetching data:', err); // Log detailed error message
      res.status(500).send('Error fetching data from database'); // Send error response
      return;
    }

    let tableHTML = `<h2 style="color: #ffffff;">Student Table</h2>
          <table border="2" style="background-color: #333333; color: #ffffff;"> <!-- Table background color -->
            <tr>
              <th>StudentID</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>DateOfBirth</th>
              <th>Grade</th>
              <th>ParentName</th>
              <th>ParentEmail</th>
              <th>Address</th>
            </tr>`;

    // Generate HTML table rows for each student record
    results.forEach(row => {
      tableHTML += `<tr>
          <td>${row.studentID}</td>
          <td>${row.firstName}</td>
          <td>${row.lastName}</td>
          <td>${row.dateOfBirth}</td>
          <td>${row.grade}</td>
          <td>${row.parentName}</td>
          <td>${row.parentEmail}</td>
          <td>${row.address}</td>
        </tr>`;
    });

    tableHTML += `</table>`;
    res.send(`<div style="background-color: #3b3b3b; color: #ffffff; padding: 20px;">${tableHTML}</div>`); // Wrap table in a div with page background color
  });
});

// Serve the enrollment form HTML
app.get('/enroll', (req, res) => {
  res.sendFile(__dirname + '/enroll.html');
});

// Start the Express server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`); // Log server start message
});
