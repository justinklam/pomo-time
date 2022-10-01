import React, { useContext, useEffect, useState } from "react";
import "./timer.css";

// React Router Dom
import { Link } from "react-router-dom";

// Context
import SettingsContext from "../../../utils/SettingsContext";

// React Circular Progress bar
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Components
import PlayButton from "../../buttons/PlayButton/PlayButton";
import PauseButton from "../../buttons/PauseButton/PauseButton";
import SettingsButton from "../../buttons/SettingsButton/SettingsButton";

const Timer = () => {
  const settingsInfo = useContext(SettingsContext);

  const [timerActive, setTimerActive] = useState(false); // whether timer is running
  const [workStatus, setWorkStatus] = useState("Work Time"); // work or break mode
  const [currentSeconds, setCurrentSeconds] = useState(
    settingsInfo.workMinutes * 60
  ); // current countdown time
  const [maxSeconds, setMaxSeconds] = useState(settingsInfo.workMinutes * 60); // max work time length

  useEffect(() => {
    if (timerActive) {
      // updates the timer
      let interval = setInterval(() => {
        clearInterval(interval);

        // work timer reaches 0, switch to breakMinutes
        if (currentSeconds === 0 && workStatus === "Work Time") {
          setTimerActive(false);
          setWorkStatus("Break Time");
          setCurrentSeconds(settingsInfo.breakMinutes * 60);
          setMaxSeconds(settingsInfo.breakMinutes * 60);
        } else if (currentSeconds === 0 && workStatus === "Break Time") {
          // break-timer reaches 0, switch to workMinutes
          if (currentSeconds === 0 && workStatus === "Break Time") {
            setTimerActive(false);
            setWorkStatus("Work Time");
            setCurrentSeconds(settingsInfo.workMinutes * 60);
            setMaxSeconds(settingsInfo.workMinutes * 60);
          }
        } else {
          // decrement timer
          setCurrentSeconds(currentSeconds - 1);
        }
      }, 1000); // 1000 = 25 min, 100 = 2.5 min total time
    }
  }, [currentSeconds, timerActive, settingsInfo, workStatus]);

  const formatTime = () => {
    let minutes = Math.floor(currentSeconds / 60);
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    let seconds = currentSeconds % 60;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="timer-progress">
      <div className="timer-status">{workStatus}</div>
      <CircularProgressbar
        value={(currentSeconds / maxSeconds) * 100}
        text={formatTime()}
        counterClockwise={true}
        styles={buildStyles({
          textColor: "var(--text-color)",
          pathColor: workStatus === "Work Time" ? "red" : "var(--accent-color)",
          tailColor: "rgba(255, 255, 255, .2) ",
        })}
      />

      {!timerActive ? (
        <PlayButton
          onClick={() => {
            setTimerActive(true);
          }}
        />
      ) : (
        <PauseButton
          onClick={() => {
            setTimerActive(false);
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
