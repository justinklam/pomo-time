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

  const [workStatus, setWorkStatus] = useState(false);
  const [timeRunning, setTimeRunning] = useState(false);
  const [resetting, setResetting] = useState(false);

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
    if (timeRunning) {
      // updates the timer
      let interval = setInterval(() => {
        clearInterval(interval);

        // handles the reset button
        // if (resetting) {
        //   setCurrentSeconds(currentSeconds);
        //   setTimeRunning(false);
        //   setResetting(false);
        //   return;
        // }

        // if (!workStatus) {
        //   // setCurrentSeconds(settingsInfo.breakMinutes * 60);
        //   setTimeRunning(true);
        //   setWorkStatus(true);
        // }
        // when timer reaches 0
        if (currentSeconds === 0) {
          if (workStatus) {
            setTimeRunning(false);
            setWorkStatus(false); // hide the break
            setCurrentSeconds(settingsInfo.breakMinutes * 60); // reset initial timer
          } else {
            setTimeRunning(false);
            setWorkStatus(true);
            setCurrentSeconds(settingsInfo.workMinutes * 60);
            setMaxSeconds(settingsInfo.workMinutes * 60);
          }
        } else {
          setCurrentSeconds(currentSeconds - 1); // initial timer normal countdown
        }
      }, 10); // 1000 = 25 min, 100 = 2.5 min total time
    }
  }, [currentSeconds, timeRunning, settingsInfo, resetting, workStatus]);

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

      {!workStatus ? (
        <PlayButton
          onClick={() => {
            setTimeRunning(true);
            setWorkStatus(true);
            console.log("PlayButton");
            console.log("timeRunning", timeRunning);
          }}
        />
      ) : (
        <PauseButton
          onClick={() => {
            setTimeRunning(false);
            // setResetting(true);
            setWorkStatus(false);
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
