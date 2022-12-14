import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, unique: false },
  email: { type: String, unique: true },
  password: { type: String, unique: false },
});

export default mongoose.model("users", userSchema);
