import express from "express";
import JobModel from "../models/job";
const router = express.Router();

// Get all jobs
router.get("/jobs", function (req, res) {
  console.log("Lets go fetch jobs");
  res.send("See all jobs here");
});

module.exports = router;
