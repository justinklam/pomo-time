import express from "express";
import { addPomodoro } from "../controllers/pomodoro.js";

// Helper function
import { verifyToken } from "../helpers/verifyToken.js";

const router = express.Router();

// create a completed pomodoro entry to track stats
router.post("/", verifyToken, addPomodoro);

export default router;
