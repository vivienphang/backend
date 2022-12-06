const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title field is required"],
  },
  description: {
    type: String,
    required: [true, "Description field is required"],
  },
  responsibilities: {
    type: String,
    required: [true, "Responsibilities field is required"],
  },
  requirements: {
    type: String,
    required: [true, "Requirements field is required"],
  },
  salary: {
    type: Number,
    required: [true, "Salary field is required"],
  },
  technologies: {
    type: String,
    required: [true, "Technologies field is required"],
  },
});

const JobModel = mongoose.model("jobs", JobSchema);
module.exports = JobModel;
