import React from "react";
import styles from "./Overview.module.css";

export const Overview = ({ theme }) => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hey, I'm <span className={styles.name}> Swai.</span>
        </h1>
        <p className={styles.description}>
          A self-taught full stack developer deeply commited to continuous learning and growth. Eager to level up my skills, I'm currently seeking internship opportunities where I can not only contribute to impactful projects but also expand my
          knowledge and experience.
        </p>

        <p className={styles.description}>
          While my short journey has involved building common projects in the developer community, I've found immense value in navigating the challenges and upskilling along the way. I thrive in collaborative environments and would cherish the
          opportunity to work with teams and individuals who share my enthusiasm for technology.
        </p>
      </div>

      <div className={styles.gifContainer}>
        <img src="./images/coding01.gif" alt="" />
      </div>
    </section>
  );
};
