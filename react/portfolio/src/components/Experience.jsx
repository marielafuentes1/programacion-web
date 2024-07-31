import React from "react";

const Experience = ({ jobTitle, company, period, description }) => {
  return (
    <div className="experience">
      <h3>{jobTitle}</h3>
      <p>
        <strong>Empresa:</strong> {company}
      </p>
      <p>
        <strong>Periodo:</strong> {period}
      </p>
      <p>{description}</p>
    </div>
  );
};

export default Experience;
