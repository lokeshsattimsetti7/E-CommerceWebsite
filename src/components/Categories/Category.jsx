import React, { useRef } from "react";
import styles from "./Category.module.css";
import one from "./Category-Camera.png";
import two from "./Category-CellPhone.png";
import three from "./Category-Computer.png";
import four from "./Category-Gamepad.png";
import five from "./Category-Headphone.png";
import six from "./Category-SmartWatch.png";

const Category = () => {
  const productScrollRef = useRef(null);

  const scrollLeft = () => {
    productScrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    productScrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className={styles.MainSection}>
      <div className={styles.FirstSection}>
        <div className={styles.FirstRow}>
          <p>Categories</p>
        </div>
        <div className={styles.DoubleArrow}>
          <div className={styles.ArrowGap}>
            <button onClick={scrollLeft} aria-label="Scroll left">
              <i className="fas fa-arrow-left"></i>
            </button>
          </div>
          <div className={styles.ArrowGap}>
            <button onClick={scrollRight} aria-label="Scroll right">
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.CategoriesSection} ref={productScrollRef}>
        <div className={styles.Block}>
          <img src={two} alt="Phone" />
          <p>Phones</p>
        </div>
        <div className={styles.Block}>
          <img src={three} alt="Computer" />
          <p>Computers</p>
        </div>
        <div className={styles.Block}>
          <img src={six} alt="SmartWatch" />
          <p>SmartWatches</p>
        </div>
        <div className={styles.Block}>
          <img src={one} alt="Camera" />
          <p>Cameras</p>
        </div>
        <div className={styles.Block}>
          <img src={five} alt="Headphone" />
          <p>Headphones</p>
        </div>
        <div className={styles.Block}>
          <img src={four} alt="Gamepad" />
          <p>Gaming</p>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default Category;
