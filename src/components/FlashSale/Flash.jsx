import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Flash.module.css";

const FlashSaleTimer = ({ flashData }) => {
  const initialTime = 13 * 24 * 60 * 60 + 23 * 60 + 22;
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const productScrollRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollLeft = () => {
    productScrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    productScrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

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
      <div className={styles.SectionOne}>
        <div className={styles.FirstRow}>
          <p>Today's</p>
        </div>

        <div className={styles.SecondRow}>
          <h1>Flash Sales</h1>
          <div className={styles.Timer}>
            {["Days", "Hours", "Minutes", "Seconds"].map((label, i) => (
              <div key={label} className={styles["time-box"]}>
                <span className={styles.time}>
                  {[days, hours, minutes, seconds][i]}
                </span>
                <span className={styles.label}>{label}</span>
              </div>
            ))}
          </div>

          <div className={styles.DoubleArrow}>
            <div className={styles.ArrowGap}>
              <button onClick={scrollLeft}>
                <i className="fas fa-arrow-left"></i>
              </button>
            </div>
            <div className={styles.ArrowGap}>
              <button onClick={scrollRight}>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.SectionTwo}>
        <div className={styles.ProductSection} ref={productScrollRef}>
          {flashData.map((item) => (
            <div className={styles.Product} key={item.id}>
              <Link
                to="/product"
                state={{ product: item }}
                className={styles.ProductLink}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className={styles.ProductImage}
                />

                <button className={styles.Eye}>
                  <img src={item.Eye} alt="View" />
                </button>
                <button className={styles.Heart}>
                  <img src={item.Heart} alt="Wishlist" />
                </button>
              </Link>

              <div className={styles.ProductInfo}>
                <h1>{item.name}</h1>
                <p>
                  {item.price} <span>{item.old}</span>
                </p>

                <div className={styles.Reviews}>
                  <span>{item.reviews}</span>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.ProductsButton}>
        <Link to="/products">
          <button>View All Products</button>
        </Link>
      </div>
    </div>
  );
};

export default FlashSaleTimer;
