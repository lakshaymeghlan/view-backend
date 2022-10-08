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

export default { getAll };
