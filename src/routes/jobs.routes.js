import express from "express";
import { createJob, deleteJob, getAllJobs, getJobById, updateJob } from "../Controllers/jobsController.js";


const router = express.Router();

router.post('/',createJob);

router.get("/job", getAllJobs);
router.get("/:id", getJobById);
router.put("/:id", updateJob);
router.delete("/:id", deleteJob);




export default router;
