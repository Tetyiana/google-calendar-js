import React from "react";
import "./header.scss";
import Navigation from "../navigation/Navigation";

const Header = () => {
  return (
    <header className="header">
      <button className="button create-event-btn">
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <Navigation />
    </header>
  );
};
export default Header;
