import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar = ({ switchTheme, theme }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
      console.log("Navbar visibility set to:", visible ? "visible" : "hidden");
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const toggleDarkMode = () => {
    const isDarkMode = document.documentElement.classList.toggle("dark");
    console.log("Dark mode toggled:", isDarkMode ? "enabled" : "disabled");
  };

  return (
    <div className={styles.navbarWrapper}>
      <nav className={`${styles.navbar} ${visible ? styles.navbarVisible : styles.navbarHidden}`}>
        <div className={styles.profileImage}>
          <img className={styles.workingImage} src="./images/Working.png" alt="" />
        </div>

        <ul className={styles.links}>
          <a href="#projects">
            <li className={styles.link}>Projects</li>
          </a>
          <a href="#contact">
            <li className={styles.link}>Contact</li>
          </a>
        </ul>

        <div className={styles.themeIcon} onClick={() => switchTheme()}>
          {theme === "light" ? <img className={styles.sunImage} src="./Icons/sun.png" alt="" /> : <img className={styles.moonImage} src="./Icons/moon.png" alt="" />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
