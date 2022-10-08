import Media from "../Schema/MediaSchema.js";
import _ from "lodash";

/*********** get all ****************/

const getAll = async (req, res) => {
  try {
    const media = await Media.find();
    res.json(media);
  } catch (error) {
    console.log(error);
    res.send(400).json(error);
  }
};

/*********** create ****************/
const create = async (req, res) => {
  const { name, desc } = req.body;
  let videosPaths = [];

  if (Array.isArray(req.files.videos) && req.files.videos.length > 0) {
    for (let videos of req.files.videos) {
      videosPaths.push("/" + videos.path);
    }
  }
};

export default { getAll, create };
