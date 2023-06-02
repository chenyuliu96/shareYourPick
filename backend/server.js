const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8000; // Specify the desired port number

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Logging middleware to log the request body
app.use((req, res, next) => {
    console.log('Request Body:', req.body);
    next();
});

// Define an API endpoint to handle the incoming request
app.post('/api/putMyPicks', (req, res) => {
    const pictureData = req.body; // Assuming the picture data is sent in the request body
    console.log(pictureData)
    // Perform database operation to add the picture entry
    // Replace this code with your actual database integration code

    // Example response indicating success
    res.status(200).json({ message: 'Picture added successfully' });
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});