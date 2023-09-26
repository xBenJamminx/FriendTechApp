// Import mongoose 
const mongoose = require('mongoose');

// Import ENV to hide MongoDB password
const dotenv = require('dotenv');
dotenv.config();

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    // Replace db_uri with your actual MongoDB URI
    const uri = process.env.MONGODB_URI;

    // Connect to MongoDB
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

// Export the function 
module.exports = connectDB;