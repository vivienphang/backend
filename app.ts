require("dotenv").config();
import express from "express";
import connectDB from "./config/config";
import cors from "cors";
import jobRouter from "./router/job.router";

// Initialise app
const app: express.Application = express();

// Initialise main routes
app.get("/", (req, res) => {
  res.send("This is the main page consisting job list");
});

// Set express to listen to PORT
const PORT: string | number = process.env.PORT || 3003;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);
app.use("/job", jobRouter);
// Connect to mongo
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`app is listening at port ${PORT}`);
  });
});
