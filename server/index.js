import express from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

// Routes
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";

const app = express();
dotenv.config();

const port = process.env.PORT || 8000;

const connect = () => {
  mongoose
    .connect(process.env.MONGODB)
    .then(() => {
      console.log(`MongoDB connected! 🐯`);
    })
    .catch((error) => {
      throw error;
    });
};

app.use(cookieParser());
// to allow external json
app.use(express.json());
app.use(cors());

// Use Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(8080, () => {
  connect();
  console.log(`Server connected at ${port}! 🐅`);
});
