import mongoose from "mongoose";

const PomodoroSchema = new mongoose.Schema();

export default mongoose.model("Pomodoro", PomodoroSchema);
