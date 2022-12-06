require("dotenv").config();
import express from "express";
import connectDB from "./config/config";
import cors from "cors";

// Initialise app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Initialise main routes

// Set express to listen to PORT
const { PORT } = process.env;

// Connect to mongo
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`app is listening at port ${PORT}`);
  });
});
