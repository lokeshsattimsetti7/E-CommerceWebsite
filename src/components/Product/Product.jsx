import React, { useState } from "react";
import styles from "./Product.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ProductData } from "../../Data/flashData";
import ProductDetailTemplate from "./ProductDetailTemplate";
import { useCart } from "../Cart/CartContext";

const Product = () => {
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const selectedProduct = location.state?.product;
  const { addToCart } = useCart();

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));

  const handleBuyNow = () => {
    addToCart(selectedProduct, count);
    navigate("/cart");
  };

  return (
    <div className={styles.MainSection}>
      <div className={styles.SectionOne}>
        <li>
          <Link to="/account">MyAccount</Link>
        </li>
        <span>/</span>
        <li>
          <Link to="/">Gaming</Link>
        </li>
        <span>/</span>
        <li>
          <Link to="/product">Product</Link>
        </li>
      </div>

      {selectedProduct && (
        <ProductDetailTemplate
          product={selectedProduct}
          count={count}
          increment={increment}
          decrement={decrement}
          handleBuyNow={handleBuyNow}
        />
      )}

      <div className={styles.SectionThree}>
        <div className={styles.Upward}>
          <div className={styles.OrangeBlock}>
            <p>Related items</p>
          </div>
        </div>
        <div className={styles.ProductSection}>
          {ProductData.map((item, index) => (
            <div key={index} className={styles.Product}>
              <img
                src={item.img}
                alt={item.title}
                className={styles.ProductImage}
              />
              <div className={styles.ExtraItems}>
                <img src={item.per} alt="discount" />
              </div>
              <div className={styles.Eye}>
                <img src={item.Eye} alt="eye" />
              </div>
              <div className={styles.Heart}>
                <img src={item.Heart} alt="wishlist" />
              </div>
              <h1>{item.title}</h1>
              <p>
                {item.price} <span className={styles.SideTxt}>{item.old}</span>
              </p>
              <div>
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star"></i>
                ))}
                <span className={styles.SideTxt}> {item.reviews}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
