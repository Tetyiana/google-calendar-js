import React from "react";
import "./timescale.scss";
import { hours } from "../variables.js";

const TimeScale = () => {
  return (
    <div class="calendar__week-container">
      {hours.map((hour) => (
        <span className="calendar__time-scale">{`${hour}:00`}</span>
      ))}
    </div>
  );
};

export default TimeScale;
