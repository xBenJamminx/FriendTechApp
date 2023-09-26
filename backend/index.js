// Import the necessary modules
const express = require('express');
const cors = require('cors');

// Import the Item model
const Item = require('./models/Item');

// Import DB Connection
const connectDB = require('./db');

// Initialize the express application
const app = express();
const port = 3001;

// Use middleware to parse JSON payloads
app.use(express.json());

// Use CORS middleware to handle cross-origin issues
app.use(cors());

// Connect to MongoDB
connectDB();

// Define an API endpoint for fetching all items
app.get('/api/items', async (req, res) => {
  const items = await Item.find(); // Find all items in the DB
  res.json(items);
});

// Define an API endpoint for creating a new item
app.post('/api/items', async (req, res) => {
  const newItem = new Item({
    name: req.body.name, // This will come from the frontend form
  });

  newItem.save().then(item => res.json(item));
});

// Define an API endpoint for deleting an item
app.delete('/api/items/:id', async (req, res) => {
  const item = await Item.findById(req.params.id); // Find the item by its ID
  item.remove().then(() => res.json({ success: true }));
});

// Listen on the specified port
app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}/`);
});
