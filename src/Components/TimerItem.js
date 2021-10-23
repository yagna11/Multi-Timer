import React, { useState, useEffect, useRef } from "react";

const TimerItem = ({ name, time, deleteTimer, id }) => {
  const [timerState, setTimerState] = useState("");
  const hours = parseInt(time.hr);
  const minutes = parseInt(time.min);
  const seconds = parseInt(time.sec);
  const [newTime, setNewTime] = useState();
  const [myInterval, setMyInterval] = useState();
  const [secondsLeft, setSecondsLeft] = useState(
    hours * 3600 + minutes * 60 + seconds
  );
  const counterRef = useRef(secondsLeft);

  useEffect(() => {
    setMyInterval(setInterval(createInterval, 1000));
  }, []);

  useEffect(() => {
    if (secondsLeft === 0) deleteTimer(id);

    // using ref to account for reacts batching
    counterRef.current = secondsLeft;
  });

  const createInterval = () => {
    setSecondsLeft(counterRef.current - 1);
    if (counterRef.current >= 0) {
      setNewTime(
        new Date(counterRef.current * 1000).toISOString().substr(11, 8)
      );
    }
  };

  const pauseInterval = () => {
    setTimerState("paused");
    clearInterval(myInterval);
  };

  const resumeInterval = () => {
    setTimerState("running");
    setMyInterval(setInterval(createInterval, 1000));
  };

  const resetCounter = () => {
    setSecondsLeft(hours * 3600 + minutes * 60 + seconds);
    setNewTime(new Date(counterRef.current * 1000).toISOString().substr(11, 8));
  };

  return (
    <div className="items">
      <div
        className="item-container"
        style={{ backgroundColor: counterRef.current < 10 && "#ab6465" }}
      >
        <h1>{name}</h1>
        <div className="time-countdown-container">
          <p>
            {(newTime && newTime.substr(0, 2)) || hours || "00"}:
            {(newTime && newTime.substr(3, 2)) || minutes || "00"}:
            {(newTime && newTime.substr(6, 2)) || seconds || "00"}
          </p>
        </div>
        <div>
          {timerState !== "paused" ? (
            <button onClick={pauseInterval}>pause</button>
          ) : (
            <button onClick={resumeInterval}> resume </button>
          )}
          <button onClick={resetCounter}>reset</button>
        </div>
        <button className="delete-timer-button" onClick={() => deleteTimer(id)}>
          X
        </button>
      </div>
    </div>
  );
};

export default TimerItem;
