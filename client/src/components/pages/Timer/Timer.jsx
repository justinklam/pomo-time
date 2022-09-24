import React from "react";
import "./timer.css";
import { Link } from "react-router-dom";

// React Circular Progress bar
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Components
import PlayButton from "../../PlayButton/PlayButton";
import PauseButton from "../../PauseButton/PauseButton";
import SettingsButton from "../../SettingsButton/SettingsButton";

// Context
import SettingsContext from "../../../context/SettingsContext";

const Timer = () => {
  const percentage = 60;
  // const red = "#f54e4e";
  // const green = "#4aec8c";

  return (
    <div className="timer-progress">
      <CircularProgressbar
        value={percentage}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: "#f54e4e",
          tailColor: "rgba(255, 255, 255, .2) ",
        })}
        text={`${percentage}%`}
      />
      <PlayButton />
      <PauseButton />
      <div className="timer-settings">
        <Link to="/settings">
          <SettingsContext.Provider
            value={{ workMinutes: 45, breakMinutes: 15 }}
          >
            <SettingsButton />
          </SettingsContext.Provider>
        </Link>
      </div>
    </div>
  );
};

export default Timer;
