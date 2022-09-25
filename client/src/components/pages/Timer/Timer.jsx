import React, { useContext, useEffect, useState } from "react";
import "./timer.css";

// React Router Dom
import { Link } from "react-router-dom";

// Context
import SettingsContext from "../../../context/SettingsContext";

// React Circular Progress bar
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Components
import PlayButton from "../../PlayButton/PlayButton";
import PauseButton from "../../PauseButton/PauseButton";
import SettingsButton from "../../SettingsButton/SettingsButton";

const Timer = () => {
  const [isPaused, setIsPaused] = useState(true);
  const settingsInfo = useContext(SettingsContext);

  useEffect(() => {}, [settingsInfo]);

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

      {isPaused ? <PlayButton /> : <PauseButton />}

      <div className="timer-settings">
        <Link to="/settings">
          <SettingsButton />
        </Link>
      </div>
    </div>
  );
};

export default Timer;
