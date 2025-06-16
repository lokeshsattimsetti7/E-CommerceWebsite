import React from "react";
import styles from "./BestProducts.module.css";
import one from "./Cart.png";
import two from "./Cart-1.png";
import three from "./Cart-2.png";
import four from "./Cart-3.png";
import eye from "./Fill Eye.png";
import heart from "./Fill Heart.png";

const products = [
  {
    img: one,
    Eye: eye,
    Heart: heart,
    title: "The north coat",
    price: " $260",
    old: " $360",
    reviews: "  (65)",
  },
  {
    img: two,
    Eye: eye,
    Heart: heart,
    title: "Gucci duffle bag",
    price: "   $960",
    old: "$1160",
    reviews: "(75)",
  },
  {
    img: three,
    Eye: eye,
    Heart: heart,
    title: "RGB liquid CPU Cooler",
    price: " $160",
    old: "   $170",
    reviews: "  (65)",
  },
  {
    img: four,
    Eye: eye,
    Heart: heart,
    title: "S-Series Comfort Chair",
    price: "$375",
    old: "$400",
    reviews: "(99)",
  },
];

const BestProducts = () => {
  return (
    <div className={styles.MainSection}>
      <div className={styles.FirstSection}>
        <div className={styles.FirstRow}>
          <div className={styles.block}>
            <p>This Month</p>
          </div>
        </div>

        <div className={styles.ProductsButton}>
          <button>View All</button>
        </div>
      </div>
      <h1>Best Selling Products</h1>

      <div className={styles.ProductSection}>
        {products.map((item, index) => (
          <div key={index} className={styles.Product}>
            <div className={styles.Eye}>
              <img src={item.Eye} alt="eye" />
            </div>
            <div className={styles.Heart}>
              <img src={item.Heart} alt="whishlist" />
            </div>
            <img
              src={item.img}
              alt={item.title}
              className={styles.ProductImage}
            />

            <h1>{item.title}</h1>
            <p>
              {item.price} <span className={styles.SideTxt}>{item.old}</span>
            </p>
            <div>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <span className={styles.SideTxt}> {item.reviews}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestProducts;
