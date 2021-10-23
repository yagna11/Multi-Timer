import React, { useState } from "react";
import Countdown from "./Countdown.js";
import TimerItem from "./TimerItem";
import { v4 as uuidv4 } from "uuid";

const Timer = () => {
  const [text, setTextValue] = useState("");
  const [time, setTime] = useState({
    hr: "",
    min: "",
    sec: "",
  });
  const [timers, setTimers] = useState([]);
  const [setHasError] = useState(false);

  const handleTimerSet = () => {
    if (time.hr && time.min && time.sec) {
      setTimers([...timers, { name: text, time: time, id: uuidv4() }]);
    } else {
      alert("Please set the timer");
      setHasError(true);
    }
  };

  const handleDeleteTimer = (id) => {
    setTimers(timers.filter((timer) => timer.id !== id));
  };

  return (
    <React.Fragment>
      <div className="initial-timer-container">
        <p>Task name</p>
        <input
          type="text"
          value={text}
          placeholder="Bake"
          onChange={(e) => {
            setTextValue(e.target.value);
          }}
        />

        <Countdown time={time} setTime={setTime} />

        <button onClick={handleTimerSet}>Set</button>
      </div>
      <div className="timers">
        {timers.map((timer, index) => (
          <TimerItem
            key={timer.name + index}
            id={timer.id}
            name={timer.name}
            time={timer.time}
            deleteTimer={handleDeleteTimer}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Timer;
