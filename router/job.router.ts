import express, { Router } from "express";
const router: Router = express.Router();

// Get all jobs
router.get("/:id", function (req, res) {
  res.send("See selected job ID here");
});

export default router;
