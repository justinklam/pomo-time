import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    // spread to take everything in body
    const newUser = new User({ ...req.body, password: hash });

    await newUser.save();
    res.status(200).send("User created!");
  } catch (error) {}
};
