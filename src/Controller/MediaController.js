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
    const { name, desc, userName, email, img } = req.body;
    // console.log(req.body);
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
        userName,
        email,
        img,
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
    const id = req.params.id;
    const media = await Media.findById(id);
    res.json(media);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/************** get all videos of particular user *****************/

const getByUser = async (req, res) => {
  const data = req.params.id;
  try {
    const result = await Media.findById(data);
    const email = result.email;
    const userImage = result.img;
    const media = await Media.find({ email: { $in: [email] } });
    // console.log(media);
    res.status(200).json({ userImage: userImage, data: media });
  } catch (error) {
    res.status(500).send(error);
  }
};

export default { getAll, create, getOne, getByUser };
