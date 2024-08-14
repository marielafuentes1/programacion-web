import React from "react";
import Project from "./Project";

const TitleWithLines = ({ title, text }) => {
  return (
    <div className="title-container">
      <div className="line" />
      <h1 className="title">{title}</h1>
      <div className="line" />
      {text}
    </div>
  );
};

export default TitleWithLines;
