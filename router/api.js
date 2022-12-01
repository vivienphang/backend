const express = require("express");
const router = express.Router();
const JobModel = require("../models/job");

// Get all jobs
router.get("/jobs", function (req, res) {
  console.log("Lets go fetch jobs");
  res.send("See all jobs here");
});

module.exports = router;
