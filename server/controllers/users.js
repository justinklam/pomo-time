// Models
import User from "../models/User";

// Helper function
import { createError } from "../helpers/error";

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    createError(404, `User not found!`);
  }
};
