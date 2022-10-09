import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
/*********** helpers **************/

import authenticationRoutes from "./src/Routes/authenticationRoutes.js";
import MediaRoutes from "./src/Routes/MediaRoutes.js";

/********** constants ********/

const port = process.env.PORT || 8080;

/************* routing *************/

app.use(express.json());
app.use(cors());
app.use("/auth", authenticationRoutes);
app.use("/media", MediaRoutes);
// console.log(__dirname + "/public/uploads");
app.use("/videos", express.static(__dirname + "/public/uploads"));
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
