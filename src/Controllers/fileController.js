import File from "../models/File.js";

// 📤 Upload file
export const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const file = await File.create({
      filename: req.file.filename,
      path: req.file.path,
      url: `http://localhost:5000/uploads/${req.file.filename}`,
      mimetype: req.file.mimetype,
      size: req.file.size
    });

    res.status(201).json({
      message: "File uploaded successfully",
      file
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📥 Get all files
export const getFiles = async (req, res) => {
  try {
    const files = await File.find();
    res.json(files);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};