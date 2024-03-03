import React from "react";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project: { title, imageSrc, description, skills, demo, source, board, email, username, password }, theme }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={styles.image}>
          <a target="_blank" href={demo}>
            <img src={imageSrc} alt="Project image" />
          </a>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h3 className={styles.cursor}>
              <a target="_blank" href={demo}>
                <p>{title}</p>
              </a>{" "}
              {theme === "light" ? <img className={styles.link} src="./Icons/link-light.png" alt="" /> : <img className={styles.link} src="./Icons/link-dark.png" alt="" />}
            </h3>
          </div>
          <div className={styles.details}>
            <p className={styles.description}>{description}</p>
            {password && (
              <div className={styles.credentials}>
                {email && (
                  <p className={styles.credential}>
                    <strong>Email</strong>: {email}
                  </p>
                )}
                {username && (
                  <p className={styles.credential}>
                    <strong>Username</strong>: {username}
                  </p>
                )}
                <p className={styles.credential}>
                  <strong>Password</strong>: {password}
                </p>
              </div>
            )}
            <ul className={styles.skills}>
              {skills.map((skill, id) => {
                return (
                  <li key={id} className={styles.skill}>
                    {skill}
                  </li>
                );
              })}
            </ul>

            <div className={styles.sourceContainer}>
              <a className={styles.source} target="_blank" href={source}>
                View Source
              </a>
              {board ? (
                <a className={styles.source} target="_blank" href={board}>
                  Project Board
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
