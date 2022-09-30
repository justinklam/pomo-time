import express from "express";
import { getUser } from "../controllers/users.js";

const router = express.Router();

// get a user
router.get("/find/:id", getUser);

export default router;
