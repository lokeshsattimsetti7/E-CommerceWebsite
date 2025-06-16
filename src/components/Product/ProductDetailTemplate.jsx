import React from "react";
import styles from "./Product.module.css";

const ProductDetailTemplate = ({
  product,
  count,
  increment,
  decrement,
  handleBuyNow,
}) => {
  return (
    <div className={styles.SectionTwo}>
      <div className={styles.LeftSide}>
        <div className={styles.FirstColumn}>
          <img src={product.two} alt="preview 1" />
          <img src={product.three} alt="preview 2" />
          <img src={product.four} alt="preview 3" />
          <img src={product.five || product.two} alt="preview 4" />
        </div>
        <div className={styles.SecondColumn}>
          <img src={product.one} alt="main product" />
        </div>
      </div>

      <div className={styles.RightSide}>
        <h1>{product.name}</h1>
        <div className={styles.stars}>
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <p>({product.reviews})</p>
          <p style={{ marginLeft: "1px" }}>{product.stockStatus}</p>
        </div>

        <h2>${product.price}.00</h2>
        <p>{product.description}</p>
        <hr />

        <p>Colours:</p>
        <h3>Size:</h3>
        <div className={styles.Size}>
          {["XS", "S", "M", "L", "XL"].map((size) => (
            <div key={size} className={styles.block}>
              <p>{size}</p>
            </div>
          ))}
        </div>

        <div className={styles.buy}>
          <div className={styles.counter}>
            <button className={styles.decrement} onClick={decrement}>
              -
            </button>
            <span className={styles.count}>{count}</span>
            <button className={styles.increment} onClick={increment}>
              +
            </button>
          </div>
          <div className={styles.BuyButton}>
            <button onClick={handleBuyNow}>Buy Now</button>
          </div>
          <img src={product.heart} alt="wishlist" />
        </div>

        <div className={styles.services}>
          <div className={styles.serviceBox}>
            <img src={product.Free} alt="Free Delivery" />
            <div className={styles.textContent}>
              <h1>Free Delivery</h1>
              <p>Enter your postal code for Delivery Availability</p>
            </div>
          </div>
          <div className={styles.serviceBox}>
            <img src={product.Free} alt="Free Delivery" />
            <div className={styles.textContent}>
              <h1>Return Delivery</h1>
              <p>Free 30 Days Delivery Returns. Details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailTemplate;
