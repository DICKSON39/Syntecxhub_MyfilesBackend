import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
  filename: String,
  path: String,
  url: String,
  mimetype: String,
  size: Number
}, { timestamps: true });

export default mongoose.model("File", fileSchema);
