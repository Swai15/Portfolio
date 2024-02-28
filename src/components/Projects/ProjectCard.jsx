import React from "react";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project: { title, imageSrc, description, skills, demo, source }, theme }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={styles.image}>
          <img src="/images/placeholder.jpg" alt="Project image" />
        </div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h3 className={styles.cursor}>
              <p>{title}</p> {theme === "light" ? <img className={styles.link} src="./Icons/link-light.png" alt="" /> : <img className={styles.link} src="./Icons/link-dark.png" alt="" />}
            </h3>
            <a className={styles.source} href="">
              view source
            </a>
          </div>
          <div className={styles.details}>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
              {skills.map((skill, id) => {
                return <li className={styles.skill}>{skill}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
