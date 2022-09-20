import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

export const signin = async (req, res, next) => {
  try {
    const user = await User.findOne({ name: req.body.name });
    if (!user) return next(createError(404, "Username or Email not found!"));

    // comparing sign in password with db password
    const passCheck = await bcrypt.compare(req.body.password, user.password);

    if (!passCheck)
      return next(createError(400, "Incorrect login credentials!"));

    // passing in user id
    // using the id to create a hash token that we send to the user
    const token = jwt.sign({ id: user._id }, process.env.JWT, {
      expiresIn: "7d", // token expires in 7 days
    });

    // so third party cannot access cookie
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(user);
  } catch (error) {
    next(error);
  }
};
