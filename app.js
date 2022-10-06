//npm module
import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

//helpers

//constants
const port = process.env.PORT || 8080;
//mongoDB connection

// routing
app.get("/", (req, res) => {
  res.send("server online");
});

//server
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connected to database");
  })
  .catch((e) => console.log(e));

app.listen(port, () => {
  console.log(`listen to ${port}`);
});
