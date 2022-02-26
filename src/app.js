const express = require("express");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");

dotEnv.config({ path: `${__dirname}/../config.env` });

const app = express();

app.use(express.json());
console.log(process.env.DATABASE);
const DB = process.env.DATABASE || "mongodb://localhost:27017/todoApp";
mongoose.connect(DB).then(() => {
  console.log("MONGODB Connection success...");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express is running on port ${port}`);
});
