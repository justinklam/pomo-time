import express from "express";
import {} from "../controllers/auth.js";

const router = express.Router();

// Create a User
router.post("/signup");
// Sign In
router.post("/signin");

// Google Authentication
router.post("/google");

export default router;
