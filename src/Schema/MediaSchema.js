import mongoose from "mongoose";

const MediaSchema = new mongoose.Schema(
  {
    name: { type: String },
    desc: { type: String },
    videos: { type: Array },
    userName: { type: String },
    email: { type: String },
    img: { type: String },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("media", MediaSchema);
