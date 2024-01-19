// Calendar.js
import React from "react";
import "./calendar.scss";
import CalendarHeader from "./CalendarHeader";
import TimeScale from "./TimeScale";
import CalendarWeek from "./CalendarWeek";

const Calendar = () => {
  return (
    <section className="calendar">
      <CalendarHeader />
      <div className="calendar__content">
        <TimeScale />
        <CalendarWeek />
      </div>
    </section>
  );
};

export default Calendar;
