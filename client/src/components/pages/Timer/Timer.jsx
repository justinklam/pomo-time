import React, { useContext, useEffect, useRef, useState } from "react";
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
  const settingsInfo = useContext(SettingsContext);

  const [timerMode, setTimerMode] = useState("work");
  const [isPaused, setIsPaused] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(0);

  // useRef for persistant variables on reload
  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(timerMode);

  const timerTracker = () => {
    setSecondsLeft(settingsInfo.workminutes * 60);
  };

  const switchMode = () => {
    const modeStatus = timerMode.current === "work" ? "break" : "work";
    const timeLeft =
      modeStatus === "work"
        ? settingsInfo.workMinutes * 60
        : settingsInfo.breakMinute * 60;

    setTimerMode(timerMode.current);
    timerMode.current = modeStatus;

    secondsLeft.current = timeLeft;
  };

  const countdown = () => {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  };

  useEffect(() => {
    timerTracker();
    setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }
      countdown();
    });
  }, [settingsInfo]);

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
