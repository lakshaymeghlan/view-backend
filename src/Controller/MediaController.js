import Media from "../Schema/MediaSchema.js";
import _ from "lodash";
// const upload = require("../Helpers/media");
import upload from "../Helpers/media.js";
let host = "http://localhost:8000/videos/";

/*********** get all ****************/
const getAll = async (req, res) => {
  try {
    const media = await Media.find();
    res.json(media);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/*********** create ****************/
const create = async (req, res) => {
  let videosPaths = [];
  let video_upload = await upload(req, res, async function () {
    console.log(req.file);
    const { name, desc } = req.body;
    if (req.file) {
      videosPaths.push(`${host}${req.file.filename}`);
    } else {
      console.log("----->path");
    }
    // console.log(req);
    try {
      const createMedia = await Media.create({
        name,
        desc,
        videos: videosPaths,
      });
      res.json({ message: "Media created successfully", createMedia });
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  });
};

/*********** get single ****************/
const getOne = async (req, res) => {
  try {
    const media = await Media.findById();
    res.json(media);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default { getAll, create, getOne };
