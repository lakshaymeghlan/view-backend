import express from "express";
import _ from "lodash";
import mediaCtrl from "../Controller/MediaController.js";
import multer from "multer";
import fs from "fs";
import path from "path";

const videoStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync("public")) {
      fs.mkdirSync("public");
    }
    if (!fs.existsSync("public/videos")) {
      fs.mkdirSync("public/videos");
    }

    cb(null, "public/videos");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: videoStorage,
  fileFilter: function (req, file, cb) {
    var ext = path.extname(file.originalname);

    if (ext !== ".mkv" && ext !== ".mp4") {
      return cb(new Error("only videos are allowed!"));
    }

    cb(undefined, true);
  },
});

const router = express.Router();

//get all media
router.get("/all", mediaCtrl.getAll);
router.post("/create", mediaCtrl.create);
router.get("/get/:id", mediaCtrl.getOne);
router.get("/getByUser/:id", mediaCtrl.getByUser);

export default router;
