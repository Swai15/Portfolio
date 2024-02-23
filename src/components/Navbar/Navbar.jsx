import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { getAssetUrl } from "../../utils/ ImageUrl";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
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
          <li className={styles.link}>Projects</li>
          <li className={styles.link}>Experience</li>
        </ul>

        <div onClick={toggleDarkMode}>
          <img className={styles.moonImage} src="./Icons/moon.png" alt="" />
        </div>

        {/* <div>
          <img className={styles.moonImage} src="./Icons/sun.png" alt="" />
        </div> */}
      </nav>
    </div>
  );
};

export default Navbar;
