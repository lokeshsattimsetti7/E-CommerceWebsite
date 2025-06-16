import React from "react";
import styles from "./Service.module.css";
import one from "./Services.png";
import two from "./Services (1).png";
import three from "./Services (2).png";

const Service = () => {
  return (
    <div className={styles.MainSection}>
      <div className={styles.Service}>
        <img src={one} alt="one" />
        <h1>FREE AND FAST DELIVERY</h1>
        <p>Free delivery for all orders over $140</p>
      </div>
      <div className={styles.Service}>
        <img src={two} alt="one" />
        <h1>24/7 CUSTOMER SERVICE</h1>
        <p>Friendly 24/7 customer support</p>
      </div>
      <div className={styles.Service}>
        <img src={three} alt="one" />
        <h1>MONEY BACK GUARANTEE</h1>
        <p>We reurn money within 30 days</p>
      </div>
    </div>
  );
};

export default Service;
