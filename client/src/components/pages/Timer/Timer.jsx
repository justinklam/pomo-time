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

  // work or break mode
  const [workStatus, setWorkStatus] = useState("work");
  // whether timer is running
  const [timerActive, setTimerActive] = useState(false);
  // const [resetting, setResetting] = useState(false);

  // useRef for persistant variables
  // const workStatusRef = useRef(workStatus);

  console.log("workstatus", workStatus);

  // current countdown time
  const [currentSeconds, setCurrentSeconds] = useState(
    settingsInfo.workMinutes * 60
  );
  // max work time
  const [maxSeconds, setMaxSeconds] = useState(settingsInfo.workMinutes * 60);
  // break time
  const [breakTime, setBreakTime] = useState(settingsInfo.breakMinutes * 60);

  useEffect(() => {
    if (timerActive) {
      // updates the timer
      let interval = setInterval(() => {
        clearInterval(interval);

        // work timer reaches 0, switch to breakMinutes
        if (currentSeconds === 0 && workStatus === "work") {
          setTimerActive(false);
          setWorkStatus("break"); // hide the break
          setCurrentSeconds(settingsInfo.breakMinutes * 60);
          setMaxSeconds(settingsInfo.breakMinutes * 60);
        } else if (currentSeconds === 0 && workStatus === "break") {
          // break-timer reaches 0, switch to workMinutes
          if (currentSeconds === 0 && workStatus === "break") {
            setTimerActive(false);
            setWorkStatus("work");
            setCurrentSeconds(settingsInfo.workMinutes * 60);
            setMaxSeconds(settingsInfo.workMinutes * 60);
          }
        } else {
          setCurrentSeconds(currentSeconds - 1); // initial timer normal countdown
        }
      }, 10); // 1000 = 25 min, 100 = 2.5 min total time
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
      <CircularProgressbar
        value={(currentSeconds / maxSeconds) * 100}
        text={formatTime()}
        counterClockwise={true}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: workStatus ? "red" : "#1888ff",
          tailColor: "rgba(255, 255, 255, .2) ",
        })}
      />

      {!timerActive ? (
        <PlayButton
          onClick={() => {
            setTimerActive(true);
            console.log("PlayButton");
            console.log("timerActive", timerActive);
          }}
        />
      ) : (
        <PauseButton
          onClick={() => {
            setTimerActive(false);
            console.log("PauseButton");
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
