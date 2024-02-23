import { useState } from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import useLocalStorage from "use-local-storage";

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
        <Navbar />
        <button onClick={switchTheme}>Switch to {theme === "light" ? "dark" : "light"} them</button>
      </div>
    </div>
  );
}

export default App;
