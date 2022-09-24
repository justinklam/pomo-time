import React from "react";
import "./settings.css";
import ReactSlider from "react-slider";

const Settings = () => {
  return (
    <div className="settings-container">
      <label className="pomodoro-label">Work Time:</label>
      <ReactSlider
        className="slider"
        thumbClassName="slider-thumb"
        trackClassName="slider-track"
        value={45}
        min={1}
        max={120}
      ></ReactSlider>
      <label className="break-label">Break Time:</label>
    </div>
  );
};

export default Settings;
