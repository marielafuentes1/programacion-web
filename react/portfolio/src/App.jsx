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
      name: "Pokemones",
      description:
        "Este es un proyecto que hice para [Cliente/Empresa]. Se enfoca en [breve descripción del proyecto].",
      techStack: ["HTML", "CSS", "JavaScript", "React"],
      imageUrl: "http://url-de-la-imagen.com",
      projectUrl: "http://enlace-al-proyecto.com",
    },
    {
      name: "ooo",
      description:
        "Este proyecto es una aplicación móvil diseñada para [breve descripción].",
      techStack: ["React Native", "Node.js", "MongoDB"],
      imageUrl: "http://url-de-la-imagen.com",
      projectUrl: "http://enlace-al-proyecto.com",
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
          <h2>Proyectos</h2>
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </section>
        <Skills skills={skills} />

        <section>
          <h2>Educación</h2>
          <Education {...education} />
        </section>
        <Contact {...contact} />
      </div>
    </body>
  );
};

export default App;
