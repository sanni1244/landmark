const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://ope:4tSpeokpg@world.t47lw.mongodb.net/?retryWrites=true&w=majority&appName=world`); 
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
