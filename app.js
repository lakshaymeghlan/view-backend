import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

/*********** helpers **************/

import authenticationRoutes from "./src/Routes/authenticationRoutes";

/********** constants ********/

const port = process.env.PORT || 8080;

/************* routing *************/

app.use(express.json());
app.use(cors());
app.use("/auth", authenticationRoutes);

/********** server ***********/
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
