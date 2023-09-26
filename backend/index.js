// Import the necessary modules
const express = require('express');
const cors = require('cors');

// Import connectDB using ES6 import syntax
const connectDB = require('./db');

// Import routes
const items = require('./routes/api/items');

// Connect to MongoDB
connectDB();

// Initialize the express application
const app = express();
const port = 3001;

// Use CORS middleware to handle cross-origin issues
app.use(cors()); // Move this line before app.use('/api/items', items);

// Use Routes
app.use('/api/items', items);  // This comes after CORS middleware

// Create a test API route
app.get('/api/test', (req, res) => {
  // Sending a JSON response
  res.json({ message: 'This is a test API endpoint' });
});

// Listen on the specified port
app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}/`);
});
