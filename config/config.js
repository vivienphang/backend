require("dotenv").config();
const mongoose = require("mongoose");

// Create a new MongoClient
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`db connected, ${conn.connection.host}`);
  } catch (error) {
    console.log("error in connecting to db");
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
