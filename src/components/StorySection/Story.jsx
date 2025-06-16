import React from "react";
import styles from "./Story.module.css";
import one from "./Side Image.png";
import { Link } from "react-router-dom";

const Story = () => {
  return (
    <div className={styles.MainSection}>
      <div className={styles.LinksSection}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <span>/</span>
        <li>
          <Link to="/About">About</Link>
        </li>
      </div>
      <div className={styles.BottomSection}>
        <div className={styles.LeftSide}>
          <h1>Our Story</h1>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className={styles.RightSide}>
          <img src={one} alt="love" />
        </div>
      </div>
    </div>
  );
};

export default Story;
