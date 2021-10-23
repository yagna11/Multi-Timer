import React from "react";

const Countdown = ({ time, setTime }) => {
  const handleInputChange = (e, timeType) => {
    setTime({ ...time, [timeType]: e.target.value });
  };

  return (
    <React.Fragment>
      <p>Set Timer</p>
      <div className="time-input-container">
        <input
          type="number"
          placeholder="hh"
          value={time.hr}
          min="0"
          onChange={(e) => handleInputChange(e, "hr")}
        />
        <input
          type="number"
          placeholder="mm"
          value={time.min}
          min="0"
          onChange={(e) => handleInputChange(e, "min")}
        />
        <input
          type="number"
          placeholder="ss"
          value={time.sec}
          min="1"
          onChange={(e) => handleInputChange(e, "sec")}
        />
      </div>
    </React.Fragment>
  );
};

export default Countdown;
