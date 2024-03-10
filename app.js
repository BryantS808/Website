const express = require('express');
const path = require('path');

const express = require("express"); const app = express(); app.get("/", (req, res) => { res.send("Express on Vercel"); }); const PORT = process.env.PORT || 5000; app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });
module.exports = app
//const port = process.env.PORT || 3000;
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Set up a route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const plantsensorRouter = require('./routes/plantsensor');
app.use('/plantsensor', plantsensorRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});