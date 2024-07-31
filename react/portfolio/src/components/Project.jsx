import React from "react";
const Project = ({ name, description, techStack, imageUrl, projectUrl }) => {
  return (
    <div className="project">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        <strong>Tecnologías utilizadas:</strong> {techStack.join(", ")}
      </p>
      {imageUrl && <img src={imageUrl} alt={name} />}
      {projectUrl && (
        <a href={projectUrl} target="_blank" rel="noopener noreferrer">
          Ver Proyecto
        </a>
      )}
    </div>
  );
};

export default Project;
