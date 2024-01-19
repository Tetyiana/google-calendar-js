import React from "react";
import "./calendarweek.scss";
import CalendarDay from "./CalendarDay";
import { hours, weeksDay } from "../variables";

const CalendarWeek = () => {
  return (
    <div id="grid" className="calendar__week">
      {weeksDay.map((weekDay, index) => (
        <div key={index}>
          {hours.map((hour, hourIndex) => (
            <CalendarDay key={hourIndex} day={weekDay} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default CalendarWeek;
