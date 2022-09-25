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
  const timerModeRef = useRef(timerMode);

  // Timer Countdown
  const countdown = () => {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  };

  useEffect(() => {
    // Mode Switch
    const switchMode = () => {
      const modeStatus = timerMode.current === "work" ? "break" : "work";
      const timeLeft =
        modeStatus === "work"
          ? settingsInfo.workMinutes * 60
          : settingsInfo.breakMinute * 60;

      setTimerMode(modeStatus);
      timerModeRef.current = modeStatus;

      setSecondsLeft(timeLeft);
      secondsLeftRef.current = timeLeft;
    };

    // Set Current Time Left
    secondsLeftRef.current = settingsInfo.workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }
      countdown();
    }, 1000);

    return () => clearInterval(interval);
  }, [settingsInfo, timerMode]);

  const totalSeconds =
    timerMode === "work"
      ? settingsInfo.workMinutes * 60
      : settingsInfo.breakMinutes * 60;

  const percentage = Math.round((secondsLeft / totalSeconds) * 100);
  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = "0" + seconds;

  // const red = "#f54e4e";
  // const green = "#4aec8c";

  return (
    <div className="timer-progress">
      <CircularProgressbar
        value={percentage}
        text={minutes + ":" + seconds}
        counterClockwise={true}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: timerMode === "work" ? "#f54e4e" : "#4aec8c",
          tailColor: "rgba(255, 255, 255, .2) ",
        })}
      />

      {isPaused ? (
        <PlayButton
          onClick={() => {
            setIsPaused(false);
            isPausedRef.current = false;
          }}
        />
      ) : (
        <PauseButton
          onClick={() => {
            setIsPaused(true);
            isPausedRef.current = true;
          }}
        />
      )}

      <div className="timer-settings">
        <Link to="/settings">
          <SettingsButton />
        </Link>
      </div>
    </div>
  );
};

export default Timer;
