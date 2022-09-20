import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

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

const port = process.env.PORT || 8000;

app.listen(8080, () => {
  connect();
  console.log(`Server connected at ${port}! 🐅`);
});
