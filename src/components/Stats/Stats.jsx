import React from "react";
import styles from "./Stats.module.css";

const Stats = () => {
  return (
    <div className={styles.MainSection}>
      <div className={styles.Block}>
        <i class="fa-solid fa-store"></i>
        <p1>10.5k </p1>
        <p>Sallers active our site</p>
      </div>
      <div className={styles.Block}>
        <i class="fa-solid fa-sack-dollar"></i>
        <p1>33 K</p1>
        <p>Mopnthly Produduct Sale</p>
      </div>
      <div className={styles.Block}>
        <i class="fa-solid fa-dollar-sign"></i>
        <p1> 45.5k</p1>
        <p>Customer active in our site</p>
      </div>
      <div className={styles.Block}>
        <i class="fa-solid fa-gift"></i>
        <p1>25k</p1>
        <p>Anual gross sale in our site</p>
      </div>
    </div>
  );
};

export default Stats;
