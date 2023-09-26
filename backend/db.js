// Import mongoose using ES6 import syntax
import mongoose from 'mongoose';

// Import ENV to hide MongoDB password
import dotenv from 'dotenv';
dotenv.config();

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    // Replace db_uri with your actual MongoDB URI
    const db_uri = "mongodb+srv://xBenJamminx:<Backsh0tz27!@>@friendtechcluster.lveoxdf.mongodb.net/?retryWrites=true&w=majority";
    const uri = process.env.MONGODB_URI;

    // Connect to MongoDB
    await mongoose.connect(db_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

// Export the function using ES6 export syntax
export default connectDB;
