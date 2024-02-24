import React from "react";
import styles from "./Overview.module.css";

export const Overview = ({ theme }) => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Swai.</h1>
        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cum nihil excepturi illum dicta omnis totam, qui fuga aut ex!</p>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellendus expedita dolorem reprehenderit, recusandae consequuntur aliquam magnam eaque, culpa, rerum ex provident unde sunt quis similique commodi dolorum sapiente a minima
          odit mollitia aspernatur. Enim ex ipsum ad eveniet voluptatibus?
        </p>
      </div>

      <div className={styles.links}>
        <div className={styles.link}>
          {theme === "light" ? (
            <a href="https://github.com/Swai15">
              <img className={styles.github} src="./Icons/github-light.png" alt="" />
            </a>
          ) : (
            <a href="https://github.com/Swai15">
              <img className={styles.github} src="./Icons/github-dark.png" alt="" />
            </a>
          )}
        </div>

        <div className={styles.link}>{theme === "light" ? <img className={styles.linkedIn} src="./Icons/linkedin-light.png" alt="" /> : <img className={styles.linkedIn} src="./Icons/linkedin-dark.png" alt="" />}</div>
      </div>
    </section>
  );
};
