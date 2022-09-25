import React, { useContext } from "react";
import "./settings.css";

// Use Context
import SettingsContext from "../../context/SettingsContext";

// Components
import ReactSlider from "react-slider";

const Settings = () => {
  const settingsInfo = useContext(SettingsContext);

  return (
    <div className="settings-container">
      <label className="pomodoro-label">
        Work Duration: {settingsInfo.workMinutes} Minutes
      </label>
      <ReactSlider
        className="slider"
        thumbClassName="slider-thumb"
        trackClassName="slider-track"
        marksClassName="marks"
        value={settingsInfo.workMinutes}
        min={1}
        max={60}
      ></ReactSlider>
      <label className="pomodoro-label">
        Break Duration: {settingsInfo.breakMinutes} Minutes
      </label>
      <ReactSlider
        className="slider-break"
        thumbClassName="slider-thumb"
        trackClassName="slider-track"
        value={settingsInfo.breakMinutes}
        min={1}
        max={60}
      ></ReactSlider>
    </div>
  );
};

export default Settings;
