import express from "express";
import upload from "../middleware/upload.js";
import { uploadFile, getFiles } from "../Controllers/fileController.js";

const router = express.Router();

// single image upload
router.post("/upload", upload.single("image"), uploadFile);

router.get("/", getFiles);


export default router;