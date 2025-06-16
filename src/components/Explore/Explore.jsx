import React, { useRef } from "react";
import styles from "./Explore.module.css";
import one from "./Cart.png";
import two from "./Cart (1).png";
import three from "./Cart (2).png";
import four from "./Cart (3).png";
import five from "./Cart (4).png";
import six from "./Cart (5).png";
import seven from "./Cart (6).png";

const products = [
  {
    img: one,
    title: "HAVIT HV-G92 Gamepad",
    price: "$120",
    reviews: "(88)",
  },
  {
    img: two,
    title: "AK-900 Wired Keyboard",
    price: "$960",
    reviews: "(75)",
  },
  {
    img: three,
    title: "IPS LCD Gaming Monitor",
    price: "$370",
    reviews: "(99)",
  },
  {
    img: four,
    title: "S-Series Comfort Chair",
    price: "$375",
    reviews: "(99)",
  },
  {
    img: five,
    title: "S-Series Comfort Chair",
    price: "$375",
    reviews: "(99)",
  },
  {
    img: six,
    title: "HAVIT HV-G92 Gamepad",
    price: "$120",
    reviews: "(88)",
  },
  {
    img: seven,
    title: "AK-900 Wired Keyboard",
    price: "$960",
    reviews: "(75)",
  },
  {
    img: one,
    title: "IPS LCD Gaming Monitor",
    price: "$370",
    reviews: "(99)",
  },
];

const Explore = () => {
  const productScrollRef = useRef(null);

  const scrollLeft = () => {
    productScrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    productScrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className={styles.MainSection}>
      <div className={styles.SectionOne}>
        <div className={styles.FirstRow}>
          <p>Today's</p>
        </div>

        <div className={styles.SecondRow}>
          <h1>Explore</h1>

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

      <div className={styles.ProductSection} ref={productScrollRef}>
        {products.map((item, index) => (
          <div key={index} className={styles.Product}>
            <img
              src={item.img}
              alt={item.title}
              className={styles.ProductImage}
            />

            <h1>{item.title}</h1>
            <p>
              {item.price}
              <div>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <span className={styles.SideTxt}> {item.reviews}</span>
            </p>
          </div>
        ))}
      </div>

      <div className={styles.ProductsButton}>
        <button>View All Products</button>
      </div>
    </div>
  );
};

export default Explore;
