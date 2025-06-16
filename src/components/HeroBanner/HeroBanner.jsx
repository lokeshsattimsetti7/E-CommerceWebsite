import React from "react";
import styles from "./HeroBanner.module.css";
import Hero from "./Hero.png";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className={styles.MainSection}>
      <div className={styles.LeftSide}>
        <li className={styles.Arrow}>
          Woman’s
          <i className="fas fa-arrow-right"></i>
        </li>
        <li className={styles.Arrow}>
          Men’s
          <i className="fas fa-arrow-right"></i>
        </li>
        <li>Electronics</li>
        <li>Home & Lifestyle</li>
        <li>Medicine</li>
        <li>Sports & Outdoor</li>
        <li>Baby's Toys</li>
        <li>Groceries & Toys</li>
        <li>Health & Beauty</li>
      </div>
      <div className={styles.RightSide}>
        <img src={Hero} alt="hero" />
        <Link to="/shop" className={styles.shopLink}>
          Shop Now <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default HeroBanner;
