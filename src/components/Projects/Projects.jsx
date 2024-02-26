import styles from "./Projects.module.css";
import projects from "../../data/projects.json";

import React from "react";
import { ProjectCard } from "./ProjectCard";

export const Projects = ({ theme }) => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} theme={theme} />;
        })}
      </div>
    </section>
  );
};
