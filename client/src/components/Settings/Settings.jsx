import React from "react";
import "./settings.css";
import ReactSlider from "react-slider";

const Settings = () => {
  return (
    <div className="settings-container">
      <label className="pomodoro-label">Work Duration - Minutes:</label>
      <ReactSlider
        className="slider"
        thumbClassName="slider-thumb"
        trackClassName="slider-track"
        marksClassName="marks"
        value={5}
        min={1}
        max={60}
      ></ReactSlider>
      <label className="pomodoro-label">Break Duration - Minutes:</label>
      <ReactSlider
        className="slider-break"
        thumbClassName="slider-thumb"
        trackClassName="slider-track"
        value={5}
        min={1}
        max={60}
      ></ReactSlider>
    </div>
  );
};

export default Settings;
