import express from "express";
import _ from "lodash";
import mediaCtrl from "../Controller/MediaController.js";
import multer from "multer";
import fs from "fs";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync("public")) {
      fs.mkdirSync("public");
    }
    if (!fs.existsSync("public/videos")) {
      fs.mkdirSync("public/videos");
    }

    cb(null, "public/videos");
  },
});

const upload = multer({
  storage: storage,
});

const router = express.Router();

//get all media
router.get("/all", mediaCtrl.getAll);
// router.post ("/create"mediaCtrl.create)

export default router;
