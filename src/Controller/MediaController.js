import Media from "../Schema/MediaSchema.js";
import _ from "lodash";
// const upload = require("../Helpers/media");
import upload from "../Helpers/media.js";
let host = "http://localhost:8000/videos/";
/*********** get all ****************/

// const getAll = async (req, res) => {
//   try {
//     const media = await Media.find();
//     res.json(media);
//   } catch (error) {
//     console.log(error);
//     res.send(400).json(error);
//   }
// };

export const getAll = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const media = await Media.findById(_id);
    // const pic = await media.profilePicture;
    res.status(200).json(pic);
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
      // for (let videos of req.files) {
      //   videosPaths.push("/" + videos.path);
      // }
      videosPaths.push(`${host}${req.file.filename}`);
    } else {
      console.log("----->path");
    }
    console.log(videosPaths);
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

export default { getAll, create };
