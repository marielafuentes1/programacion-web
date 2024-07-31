import React from "react";
import Header from "./components/Header";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Testimonial from "./components/Testimonials";
import Contact from "./components/Contact";

import "./App.css";

const App = () => {
  const projects = [
    {
      name: "Proyecto 1",
      description:
        "Este es un proyecto que hice para [Cliente/Empresa]. Se enfoca en [breve descripción del proyecto].",
      techStack: ["HTML", "CSS", "JavaScript", "React"],
      imageUrl: "http://url-de-la-imagen.com",
      projectUrl: "http://enlace-al-proyecto.com",
    },
    {
      name: "Proyecto 2",
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

  const experiences = [
    {
      jobTitle: "Puesto de Trabajo",
      company: "Nombre de la Empresa",
      period: "Enero 2020 - Actualidad",
      description: "Descripción de tus responsabilidades y logros.",
    },
    {
      jobTitle: "Puesto de Trabajo",
      company: "Nombre de la Empresa",
      period: "Junio 2018 - Diciembre 2019",
      description: "Descripción de tus responsabilidades y logros.",
    },
  ];

  const education = {
    degree: "Grado Académico",
    institution: "Nombre de la Institución",
    period: "2015 - 2019",
    description: "Descripción del grado académico y logros obtenidos.",
  };

  const testimonials = [
    {
      name: "Cliente/Colaborador 1",
      feedback: "Descripción del testimonio positivo sobre tu trabajo.",
    },
    {
      name: "Cliente/Colaborador 2",
      feedback: "Descripción del testimonio positivo sobre tu trabajo.",
    },
  ];

  const contact = {
    email: "mf44875939@gmail.com",
    linkedin: "http://enlace-a-linkedin.com",
    website: "http://enlace-a-tu-sitio-web.com",
  };

  return (
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
        <h2>Experiencia</h2>
        {experiences.map((experience, index) => (
          <Experience key={index} {...experience} />
        ))}
      </section>
      <section>
        <h2>Educación</h2>
        <Education {...education} />
      </section>
      <section>
        <h2>Testimonios</h2>
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </section>
      <Contact {...contact} />
    </div>
  );
};

export default App;
