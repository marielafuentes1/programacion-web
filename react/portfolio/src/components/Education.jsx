import React from "react";

const Education = ({ degree, institution, periodo, description }) => {
  return (
    <div className="education">
      <h3>{degree}</h3>
      <p>
        <strong>Institución:</strong> {institution}
      </p>
      <p>
        <strong>Periodo:</strong> {periodo}
      </p>
      <p>{description}</p>
    </div>
  );
};

export default Education;
