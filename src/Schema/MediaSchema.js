import mongoose from "mongoose";

const MediaSchema = new mongoose.Schema(
  {
    name: { type: String },
    desc: { type: String },
    videos: { type: Array },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("media", MediaSchema);
