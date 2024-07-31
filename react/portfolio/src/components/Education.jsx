import React from "react";

const Education = ({ degree, institution, period, description }) => {
  return (
    <div className="education">
      <h3>{degree}</h3>
      <p>
        <strong>Institución:</strong> {institution}
      </p>
      <p>
        <strong>Periodo:</strong> {period}
      </p>
      <p>{description}</p>
    </div>
  );
};

export default Education;
