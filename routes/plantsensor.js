const express = require('express');
const router = express.Router();

// Define routes related to the plant sensor functionality
router.get('/', (req, res) => {
  // Handle the request for the plant sensor page
  res.send('This is plantsensor page');
});

let dataArray = [];
router.post('/data', (req, res) => {
    // Extract the data from the request body
    const sensorData = req.body;

    // Process the received data as needed
    // For example, you could store it in a database
    // or perform other actions based on the data
    alert('Received sensor data:', sensorData);

    // Send a response back to acknowledge the data receipt
    res.send('Data received successfully');
});

module.exports = router;