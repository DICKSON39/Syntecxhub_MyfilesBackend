import express from "express";
import {
  registerUser,
  loginUser,
  deleteUser,
  addUser
} from "../Controllers/auth.controller.js";
import { protect } from "../middleware/protectedRoute.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/add",protect, addUser);
router.delete("/:id", deleteUser);

export default router;

