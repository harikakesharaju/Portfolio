import React from 'react';
import projects from "../../data/projects.json";
import Projectcard from './Projectcard';  // Use default import
import styles from "./Project.module.css"

const Project = () => {
  return (
    <section className={styles.con} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => (
          <Projectcard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Project;
