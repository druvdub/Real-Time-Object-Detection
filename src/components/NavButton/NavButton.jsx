import React from "react";
import "./NavButton.css";

const NavButton = (props) => {
  return (
    <div className="container">
      <button
        className="theme-button"
        onClick={() => props.setIsToggled(!props.isToggled)}
      >
        Continue
      </button>
      <p className="text">
        Please continue and allow webcam use for Real-Time Object Detection
      </p>
    </div>
  );
};

export default NavButton;
