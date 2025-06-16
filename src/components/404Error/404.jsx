import React from "react";
import styles from "./404.module.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className={styles.MainSection}>
      <div className={styles.SectionOne}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <span>/</span>
        <li>
          <Link to="/About">Contact</Link>
        </li>
      </div>
      <div className={styles.SectionTwo}>
        <h1>404 Not Found</h1>
        <p>Your visited page not found. You may go home page.</p>
        <div className={styles.ButtonSection}>
          <button type="submit" className={styles.SubmitButton}>
            Back To Home Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
