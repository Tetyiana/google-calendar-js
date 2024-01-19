import React from "react";
import "./navigation.scss";

const Navigation = () => {
  return (
    <div className="navigation">
      <button data-direction="today" className="navigation__today-btn button">
        Today
      </button>
      <button
        data-direction="prev"
        className="icon-button navigation__nav-icon"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        data-direction="next"
        className="icon-button navigation__nav-icon"
      >
        <i className="fas fa-chevron-right"></i>
      </button>
      <span className="navigation__displayed-month">Jun - Jul 2019</span>
    </div>
  );
};
export default Navigation;
