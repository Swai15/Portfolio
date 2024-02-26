import { useState } from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import useLocalStorage from "use-local-storage";
import { Overview } from "./components/IntroSection/Overview";
import { Projects } from "./components/Projects/Projects";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className={styles.AppContainer} data-theme={theme}>
      <div className={styles.app}>
        <Navbar switchTheme={switchTheme} theme={theme} />
        <Overview theme={theme} />
        <Projects theme={theme} />
      </div>
    </div>
  );
}

export default App;
