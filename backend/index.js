// Import the necessary modules
import express from 'express';
import cors from 'cors';

// Import connectDB using ES6 import syntax
import connectDB from './db';

// Connect to MongoDB
connectDB();

// Initialize the express application
const app = express();
const port = 3001;

// Use CORS middleware to handle cross-origin issues
app.use(cors());

// Create a test API route
app.get('/api/test', (req, res) => {
  // Sending a JSON response
  res.json({ message: 'This is a test API endpoint' });
});

// Listen on the specified port
app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}/`);
});
