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

const Timer = () => {
  const percentage = 60;
  const red = "#f54e4e";
  const green = "#4aec8c";

  return (
    <div>
      <CircularProgressbar
        value={percentage}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: red,
          tailColor: "rgba(255, 255, 255, .2) ",
        })}
        text={`${percentage}%`}
      />
      <PlayButton />
      <PauseButton />
      <Link to="/">
        <SettingsButton />
      </Link>
    </div>
  );
};

export default Timer;
