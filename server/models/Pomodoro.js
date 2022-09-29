import mongoose from "mongoose";

const PomodoroSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Pomodoro", PomodoroSchema);
