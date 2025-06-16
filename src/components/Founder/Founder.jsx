import React from "react";
import styles from "./Founder.module.css";
import one from "./Frame 874.png";
import two from "./Frame 875.png";
import three from "./Frame 876.png";

const HeroBanner = () => {
  return (
    <div className={styles.MainSection}>
      <div className={styles.Block}>
        <img src={one} alt="one" />
        <h1> Tom Cruise</h1>
        <p>Founder & Chairman</p>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-linkedin"></i>
      </div>
      <div className={styles.Block}>
        <img src={two} alt="one" />
        <h1> Emma Watson</h1>
        <p>Managing Director</p>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-linkedin"></i>
      </div>
      <div className={styles.Block}>
        <img src={three} alt="one" />
        <h1> Will Smith</h1>
        <p>Product Designer</p>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-linkedin"></i>
      </div>
    </div>
  );
};

export default HeroBanner;
