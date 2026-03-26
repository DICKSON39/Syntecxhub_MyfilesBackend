import express from "express";
import {
  registerUser,
  loginUser,
  deleteUser,
  addUser,
  getUsers,
  updateUser
} from "../Controllers/auth.controller.js";


const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/add", addUser);
router.delete("/:id", deleteUser);
router.get('/user',getUsers)
router.put('/:id',updateUser)

export default router;

