import jwt from "jsonwebtoken";

// Helper Function
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(createError(401, "Authentication Failed!"));

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token is not valid!"));
    // assign jwt object user to req.user
    req.user = user;
    // if verified, the route continues
    next();
  });
};
