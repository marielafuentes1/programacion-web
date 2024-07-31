import React from "react";

const Testimonial = ({ name, feedback }) => {
  return (
    <div className="testimonial">
      <p>"{feedback}"</p>
      <p>
        <strong>- {name}</strong>
      </p>
    </div>
  );
};

export default Testimonial;
