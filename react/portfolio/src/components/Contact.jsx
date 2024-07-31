import React from "react";

const Contact = ({ email, linkedin, website }) => {
  return (
    <section>
      <h2>Contacto</h2>
      <p>
        Email: <a href={`mailto:${email}`}>{email}</a>
      </p>
      <p>
        LinkedIn:{" "}
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          {linkedin}
        </a>
      </p>
      <p>
        Portfolio Website:{" "}
        <a href={website} target="_blank" rel="noopener noreferrer">
          {website}
        </a>
      </p>
    </section>
  );
};

export default Contact;
