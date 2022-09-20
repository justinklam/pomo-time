import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const port = process.env.PORT || 8000;

app.listen(8080, () => {
  console.log(`Server connected at ${port}! 🐅`);
});
