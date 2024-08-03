import React from "react";
import styles from "./Overview.module.css";

export const Overview = ({ theme }) => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hey, I'm <span className={styles.name}> Swai.</span>
        </h1>
        <p className={styles.description}>A self-taught developer deeply committed to continuous learning and growth.</p>

        <p className={styles.description}>In my free time I'm currently picking up some CS concepts. I'm open to collaborating and contributing to django and react projects.</p>
      </div>

      <div className={styles.gifContainer}>
        <img src="./images/coding01.gif" alt="" />
      </div>
    </section>
  );
};
