import React from "react";
import Title from "./Title";

const Header = () => {
  return (
    <header className="encabezado">
      <ul className="encabzado">
        <li>
          <a href="#inicio">Inicio</a>
        </li>

        <li>
          <a href="#projects">Proyectos</a>
        </li>

        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ul>
      </Title title={" Mariela Fuentes Barrios"} />
    </header>
  );
};

export default Header;
