const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Handle form submission
app.post('/submit-feedback', (req, res) => {
    const { firstName, lastName, email, phoneNumber } = req.body;
    // Here you can handle the form data, like storing it in a database
    // For now, let's just send a simple response
    res.send('Feedback submitted successfully!');
});
