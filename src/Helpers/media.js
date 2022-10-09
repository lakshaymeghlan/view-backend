// const util = require('util')
import util from "util";
// const path = require('path')
import path from "path"; // this is just for destination
// const multer = require('multer')
import multer from "multer";
import fs from "fs";
// import __dirname from '__dirname'
const __dirname = path.resolve();
// require('../../uploads')

var storage = multer.diskStorage({
  destination: (req, file, callback) => {
    if (!fs.existsSync("public")) {
      fs.mkdirSync("public");
    }
    if (!fs.existsSync("public/videos")) {
      fs.mkdirSync("public/videos");
    }

    // cb(null, "public/videos");
    callback(null, "./public/videos"); //path.join(`${__dirname}/../../uploads`)
  },
  filename: (req, file, callback) => {
    const match = ["video/mp4", "video/mkv"];
    // console.log(file.originalname.split("."));
    // console.log(`${__dirname}/../../uploads`);
    if (match.indexOf(file.mimetype) === -1) {
      console.log("Invalid Mimi"); // mime
      var message = `${file.originalname} is invalid. Only accept png/jpeg.`;
      return callback(message, null);
    }
    let name = file.originalname.split(".");
    var filename =
      file.fieldname + "-" + Date.now() + path.extname(file.originalname); //`${Date.now()}-ShopAndWalk-video${path.extname(
    //   file.originalname
    // )}}`; // because sometimes we have same videos for many products
    // console.log(path.extname(file.originalname));
    console.log(filename);
    callback(null, filename); // used for whenever we are triggering this function where we insitiating
  },
});

var uploadFiles = multer({ storage: storage }).single("Video_file"); //.array('multiple_videos', 10)
var upload = util.promisify(uploadFiles);
export default upload;
// module.exports = upload;
