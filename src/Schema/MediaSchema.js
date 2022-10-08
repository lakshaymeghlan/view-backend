import mongoose from "mongoose";

const MediaSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    desc: { type: String },
    videos: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("media", MediaSchema);
