import connectDB from "../config/config";
import { JobModel } from "../models/model";

const loremIpsum = require("lorem-ipsum").loremIpsum;
const jobTitle = ["Frontend Developer", "Backend Developer"];
const salary = [2000, 3500, 4000, 4500, 5000];
const technologies = [
  "React",
  "Vue.js",
  "Angular",
  "JavaScript",
  "Python",
  "Java",
  "TypeScript",
  "MongoDB",
];
const NUM_OF_JOBS = 10;
const randomizeIndex = (arrLength: any) => {
  return Math.floor(Math.random() * arrLength);
};

connectDB().then(async () => {
  for (let i = 0; i < NUM_OF_JOBS; i++) {
    const newJob = await JobModel.create({
      title: jobTitle[randomizeIndex(jobTitle.length)],
      description: loremIpsum(),
      responsibilities: loremIpsum(),
      requirements: loremIpsum(),
      salary: salary[randomizeIndex(salary.length)],
      technologies: technologies[randomizeIndex(technologies.length)],
    });
    console.log("newJob", newJob);
  }
});
