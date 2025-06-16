import React from "react";
import styles from "./Whishlist.module.css";
import one from "./Cart.png";
import two from "./Cart (1).png";
import three from "./Cart (2).png";
import four from "./Cart (3).png";
const Whishlist = () => {
  return (
    <div className={styles.MainSection}>
      <div className={styles.UpperSection}>
        <div className={styles.HeadingSection}>
          Wishlist (4)
          <button> Move to all Bag</button>
        </div>
        <div className={styles.ProductSection}>
          <div className={styles.Product}>
            <img src={one} alt="one" />
            <p> Gucci duffle bag </p>
            <p1>$960</p1>
          </div>
          <div className={styles.Product}>
            <img src={two} alt="one" />
            <p> RGB liquid CPU Cooler</p>
            <p1> $1960</p1>
          </div>
          <div className={styles.Product}>
            <img src={three} alt="one" />

            <p> GP11 Shooter USB Gamepad</p>
            <p1> $550</p1>
          </div>
          <div className={styles.Product}>
            <img src={four} alt="one" />

            <p> Quilted Satin Jacket </p>
            <p1> $750</p1>
          </div>
        </div>
      </div>
      <div className={styles.LowerSection}>
        <div className={styles.HeadingSection}>
          <div className={styles.FirstRow}>
            <div className={styles.block}>
              <p>Today's</p>
            </div>
          </div>
          <button>See All</button>
        </div>
        <div className={styles.ProductSection}>
          <div className={styles.Product}>
            <img src={one} alt="one" />
            <p> Gucci duffle bag </p>
            <p1>$960</p1>
            <div>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
          <div className={styles.Product}>
            <img src={two} alt="one" />
            <p> RGB liquid CPU Cooler</p>
            <p1> $1960</p1>
            <div>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
          <div className={styles.Product}>
            <img src={three} alt="one" />

            <p> GP11 Shooter USB Gamepad</p>
            <p1> $550</p1>
            <div>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
          <div className={styles.Product}>
            <img src={four} alt="one" />

            <p> Quilted Satin Jacket </p>
            <p1> $750</p1>
            <div>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whishlist;
