import React from "react";
import styles from "./Contact.module.css";

export const Contact = ({ theme }) => {
  return (
    <section id="contact" className={styles.container}>
      <h2 className={styles.title}>Contact Me!</h2>
      <div className={styles.border}></div>
      <div className={styles.links}>
        <a href="mailto:swaisilvano5@gmail.com" className={styles.link}>
          Swaisilvano5@gmail.com
        </a>
        <div>
          {theme === "light" ? (
            <a href="https://github.com/Swai15" target="_blank">
              <img className={styles.github} src="./Icons/github-light.png" alt="" />
            </a>
          ) : (
            <a href="https://github.com/Swai15" target="_blank">
              <img className={styles.github} src="./Icons/github-dark.png" alt="" />
            </a>
          )}
        </div>

        <div className={styles.link}>
          {theme === "light" ? (
            <a href="https://www.linkedin.com/in/sylivans-swai-7b2470188/">
              <img className={styles.linkedIn} src="./Icons/linkedin-light.png" alt="" />
            </a>
          ) : (
            <a href="https://www.linkedin.com/in/sylivans-swai-7b2470188/">
              <img className={styles.linkedIn} src="./Icons/linkedin-dark.png" alt="" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};
