import connectDB from "../config/config";
import JobModel from "../models/job";
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
const randomizeIndex = (arrLength) => {
  return Math.floor(Math.random() * arrLength);
};

// loremIpsum({
//   count: 1,
//   // Number of "words", "sentences", or "paragraphs"
//   format: "plain",
//   // "plain" or "html"
//   random: Math.random,
//   // A PRNG function
//   sentenceLowerBound: 5,
//   // Min. number of words per sentence.
//   sentenceUpperBound: 15, // Max. number of words per sentence.
// });

connectDB().then(async () => {
  for (let i = 0; i < 10; i++) {
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
