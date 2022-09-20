import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

// Helper Functions
import { createError } from "../helpers/error.js";

export const signup = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    // spread to take everything in body
    const newUser = new User({ ...req.body, password: hash });

    await newUser.save();
    res.status(200).send("User created!");
  } catch (error) {
    next(createError(500, "Username or Email is in use!"));
  }
};
