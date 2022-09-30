import express from "express";
import {} from "../controllers/pomodoro.js";

// Helper function
import { verifyToken } from "../helpers/verifyToken.js";

const router = express.Router();

// create a pomodoro
router.post("/", verifyToken);

export default router;
