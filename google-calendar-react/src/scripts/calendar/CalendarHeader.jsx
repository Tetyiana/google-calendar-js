import React from "react";
import "./calendarheader.scss";
import { weeksDay } from "../variables";

const CalendarHeader = () => {
  return (
    <header class="calendar__header">
      <span className="calendar__header-time">GTM+2</span>
      {weeksDay.map((weekDay) => (
        <span className="calendar__header-day">{`${weekDay}`}</span>
      ))}
    </header>
  );
};

export default CalendarHeader;
