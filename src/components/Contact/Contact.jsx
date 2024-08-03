import React from "react";
import styles from "./Contact.module.css";

export const Contact = ({ theme }) => {
  return (
    <section id="contact" className={styles.container}>
      <h2 className={styles.title}>Contact Me!</h2>
      <div className={styles.border}></div>
      <div className={styles.links}>
        <div>
          {theme === "light" ? (
            <a href="mailto:swaisilvano5@gmail.com">
              <img className={styles.mail} src="./Icons/mail-light.png" alt="" />
            </a>
          ) : (
            <a href="mailto:swaisilvano5@gmail.com">
              <img className={styles.mail} src="./Icons/mail-dark.png" alt="" />
            </a>
          )}
        </div>

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
            <a href="#">
              <img className={styles.linkedIn} src="./Icons/linkedin-light.png" alt="" />
            </a>
          ) : (
            <a href="#">
              <img className={styles.linkedIn} src="./Icons/linkedin-dark.png" alt="" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};
