require("dotenv").config();
const express = require("express");
const app = express();

// Set express to listen to PORT
const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}`);
});
