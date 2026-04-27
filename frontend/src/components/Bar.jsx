import React from "react";
import "./Bar.css";
const Bar = ({ title }) => {
  return (
    <div className="bar-container">
      <h1 className="title-bar">{title}</h1>
      <p className="line"></p>
    </div>
  );
};

export default Bar;
