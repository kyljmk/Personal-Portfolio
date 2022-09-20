import "../styles/Projects.css";
import ProjectCard from "./ProjectCard";
import React, { useEffect, useState } from "react";

function Projects({ darkMode }) {
  const [projectsArray, setProjectsArray] = useState([]);

  useEffect(function () {
    fetch("https://api.github.com/users/kyljmk/repos")
      .then((res) => res.json())
      .then((data) =>
        setProjectsArray(data.filter((x) => x.name.includes("PF")))
      );
  }, []);
  return <ProjectCard darkMode={darkMode} projectsArray={projectsArray} />;
}

export default Projects;
