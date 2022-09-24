import React from "react";
import "./timer.css";

// React Circular Progress bar
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Components
import PlayButton from "../../PlayButton/PlayButton";

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
    </div>
  );
};

export default Timer;
