import express from "express";
import {} from "../controllers/users.js";

const router = express.Router();

// get a user
router.get("/find/:id");

export default router;
