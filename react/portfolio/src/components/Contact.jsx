import React from "react";

const Contact = ({ email, link, website }) => {
  return (
    <section>
      <h2>Contacto</h2>
      <p>
        <strong>
          Email: <a href={`mailto:${email}`}>{` ${email}`}</a>
        </strong>
      </p>
      <p>
        <strong>
          Link: <a href={`mailto:${link}`}>{` ${link}`}</a>
        </strong>
      </p>
      <p>
        <strong>
          Website: <a href={`mailto:${website}`}>{` ${website}`}</a>
        </strong>
      </p>
    </section>
  );
};

export default Contact;
