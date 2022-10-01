import mongoose from "mongoose";

// Models
import Pomodoro from "../models/Pomodoro";

// Helper Functions
import { createError } from "../helpers/error";

export const addPomodoro = async (req, res, next) => {
  // create a new Pomodoro entry with the userId
  const newPomodoro = new Pomodoro({ userId: req.user.id });
  try {
    const savedPomodoro = await newPomodoro.save();
    res.status(200).json(savedPomodoro);
  } catch (error) {
    createError(500, "Error: Could not create entry!");
  }
};
