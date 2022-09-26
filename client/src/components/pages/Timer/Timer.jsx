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
import PlayButton from "../../buttons/PlayButton/PlayButton";
import PauseButton from "../../buttons/PauseButton/PauseButton";
import SettingsButton from "../../buttons/SettingsButton/SettingsButton";

const Timer = () => {
  const settingsInfo = useContext(SettingsContext);

  const [timerMode, setTimerMode] = useState("work");
  const [currentSeconds, setCurrentSeconds] = useState(
    settingsInfo.workMinutes * 60
  );
  const [maxSeconds, setMaxSeconds] = useState(settingsInfo.workMinutes * 60);
  const [breakTime, setBreakTime] = useState(settingsInfo.breakMinutes * 60);
  const [timeRunning, setTimeRunning] = useState(false);
  const [resetting, setResetting] = useState(false);

  // useRef for persistant variables on reload
  const maxSecondsRef = useRef(maxSeconds);
  const timeRunningRef = useRef(timeRunning);
  const timerModeRef = useRef(timerMode);

  useEffect(
    () => {
      // Mode Switch
      // const switchMode = () => {
      //   const modeStatus = timerMode.current === "work" ? "break" : "work";
      //   const timeLeft =
      //     modeStatus === "work"
      //       ? settingsInfo.workMinutes * 60
      //       : settingsInfo.breakMinute * 60;

      //   setTimerMode(modeStatus);
      //   timerModeRef.current = modeStatus;

      //   setSecondsLeft(timeLeft);
      //   secondsLeftRef.current = timeLeft;
      // };

      if (timeRunning) {
        //updates the timer
        let interval = setInterval(() => {
          // NOTE: must clear interval! otherwise bad practice
          clearInterval(interval);

          // handles the reset button
          if (resetting) {
            setCurrentSeconds(settingsInfo.workMinutes * 60);
            setTimeRunning(false);
            setResetting(false);
            return;
          }
          if (currentSeconds === 0) {
            // break timer is running
            // setTimeRunning(false);
            setCurrentSeconds(breakTime);
            setMaxSeconds(breakTime);
          } else {
            setCurrentSeconds(currentSeconds - 1); // initial timer normal countdown
          }
        }, 1000); // 1000 = 25 min, 100 = 2.5 min total time
      }
    },
    [currentSeconds, timeRunning],
    settingsInfo
  );

  // const totalSeconds =
  //   timerMode === "work"
  //     ? settingsInfo.workMinutes * 60
  //     : settingsInfo.breakMinutes * 60;

  const formatTime = () => {
    let minutes = Math.floor(currentSeconds / 60);
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    let seconds = currentSeconds % 60;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${seconds}`;
  };

  // const percentage = Math.round((secondsLeft / totalSeconds) * 100);
  // const minutes = Math.floor(secondsLeft / 60);
  // let seconds = secondsLeft % 60;
  // if (seconds < 10) seconds = "0" + seconds;

  // const red = "#f54e4e";
  // const green = "#4aec8c";

  return (
    <div className="timer-progress">
      <CircularProgressbar
        value={(currentSeconds / maxSeconds) * 100}
        text={formatTime()}
        counterClockwise={true}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: timerMode === "work" ? "#f54e4e" : "#4aec8c",
          tailColor: "rgba(255, 255, 255, .2) ",
        })}
      />

      {!timeRunning ? (
        <PlayButton
          // onClick={() => {
          //   // setIsPaused(false);
          //   // isPausedRef.current = false;
          // }}
          onClick={() => {
            setTimeRunning(true);
          }}
        />
      ) : (
        <PauseButton
          // onClick={() => {
          //   // setIsPaused(true);
          //   // isPausedRef.current = true;
          // }}
          onClick={() => {
            setResetting(true);
            setTimeRunning(false);
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
