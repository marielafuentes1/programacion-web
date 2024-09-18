import React from "react";
import Header from "./components/Header";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Title from "./components/Title";

import "./App.css";

const App = () => {
  const projects = [
    {
      name: " Desarrollo de Tarjetas de Pokémon",
      description:
        "Este proyecto consistió en el diseño y desarrollo de un conjunto de 3 tarjetas  dedicadas ala  serie de Pokémon. Cada tarjeta presenta detalles  sobre diferentes Pokémon, incluyendo su tipo, nombre ",
      techStack: ["HTML", "CSS", "JavaScript", "React"],
      projectUrl: "http://127.0.0.1:5500/ejercitacion.html/pokemon.html",
    },
    {
      name: "Diseño y Desarrollo de una Cartelera de Películas",
      description:
        "El proyecto consistió en el diseño y desarrollo de una cartelera de películas.",
      techStack: ["React Native", "Node.js", "MongoDB"],
      projectUrl: "http://127.0.0.1:5500/peliculas/index.html",
    },
  ];

  const skills = [
    "Desarrollo Web: HTML, CSS, JavaScript, React, Angular",
    "Diseño Gráfico: Photoshop, Illustrator, Figma",
    "Gestión de Proyectos: Agile, Scrum",
  ];

  const education = {
    institution: "Escuela Secundaria Técnica UBA",
    periodo: "2019 - Actual ",
  };

  const contact = {
    email: "mf448@gmail.com",
    link: "http://abcdefg.com",
    website: "http://enlace-a-tu-sitio-web.com",
  };

  return (
    <body>
      <div className="App">
        <Header />
        <section>
          <div className="borde">
            <h2>Proyectos</h2>
            {projects.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </div>
        </section>
        <div className="borde">
          <Skills skills={skills} />
        </div>
        <section>
          <div className="borde">
            <h2>Educación</h2>
            <Education {...education} />
          </div>
        </section>
        <div className="borde">
          <Contact {...contact} />
        </div>
      </div>
    </body>
  );
};

export default App;
