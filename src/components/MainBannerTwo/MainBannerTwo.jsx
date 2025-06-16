import React, { useState, useEffect } from "react";
import styles from "./MainBannerTwo.module.css";
import banner from "./Frame.png";

const MainBannerTwo = () => {
  const initialTime = 3 * 24 * 60 * 60 + 23 * 60 + 22; // 3 days, 23 minutes, 22 seconds
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    const days = String(Math.floor(timeLeft / (24 * 60 * 60))).padStart(2, "0");
    const hours = String(
      Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60))
    ).padStart(2, "0");
    const minutes = String(Math.floor((timeLeft % (60 * 60)) / 60)).padStart(
      2,
      "0"
    );
    const seconds = String(timeLeft % 60).padStart(2, "0");
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime();

  return (
    <div className={styles.MainSection}>
      <img src={banner} alt="banner" />
      <div className={styles.TxtOne}>
        <p>categories</p>
      </div>
      <div className={styles.TxtTwo}>
        <h1>
          Enhance Your<br></br> Music Experience
        </h1>
      </div>
      <div className={styles.countdown}>
        <div className={styles["time-box"]}>
          <span className={styles.label}>Days</span>
          <span className={styles.time}>{days}</span>
        </div>
        <div className={styles["time-box"]}>
          <span className={styles.label}>Hours</span>
          <span className={styles.time}>{hours}</span>
        </div>
        <div className={styles["time-box"]}>
          <span className={styles.label}>Minutes</span>
          <span className={styles.time}>{minutes}</span>
        </div>
        <div className={styles["time-box"]}>
          <span className={styles.label}>Seconds</span>
          <span className={styles.time}>{seconds}</span>
        </div>
      </div>
      <div className={styles.TxtThree}>
        <button>Buy Now!</button>
      </div>
    </div>
  );
};

export default MainBannerTwo;
