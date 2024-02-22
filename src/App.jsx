import { useState } from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className={styles.AppContainer}>
      <div className={styles.app}>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
