import React from "react";
import { useLocation, Link } from "react-router-dom";
import styles from "./Bill.module.css";
import pay from "./Frame 834.png";

const Bill = () => {
  const location = useLocation();
  const { cartItems = [], total = 0 } = location.state || {};

  return (
    <div className={styles.MainSection}>
      <div className={styles.SectionOne}>
        <li>
          <Link to="/">Account</Link>
        </li>
        <span>/</span>
        <li>
          <Link to="/cart">View Cart</Link>
        </li>
        <span>/</span>
        <li>
          <Link to="/bill">Checkout</Link>
        </li>
      </div>

      <div className={styles.SectionTwo}>
        <div className={styles.LeftSide}>
          <h1>Billing Details</h1>
          <form className={styles.formBox}>
            <div className={styles.formGroup}>
              <label htmlFor="first-name">
                First Name<span>*</span>
              </label>
              <input type="text" id="first-name" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="company-name">Company Name</label>
              <input type="text" id="company-name" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="street-address">
                Street Address<span>*</span>
              </label>
              <input type="text" id="street-address" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="apartment">
                Apartment, floor, etc. (optional)
              </label>
              <input type="text" id="apartment" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="city">
                Town/City<span>*</span>
              </label>
              <input type="text" id="city" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">
                Phone Number<span>*</span>
              </label>
              <input type="tel" id="phone" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">
                Email Address<span>*</span>
              </label>
              <input type="email" id="email" required />
            </div>

            <div className={styles.checkboxGroup}>
              <label htmlFor="save-info" className={styles.customCheckbox}>
                <input type="checkbox" id="save-info" />
                <span className={styles.checkmark}></span>
              </label>
              <p>Save this information for faster check-out next time</p>
            </div>
          </form>
        </div>

        <div className={styles.RightSide}>
          {cartItems.map(({ product, quantity }) => (
            <div className={styles.Row} key={product.id}>
              <p>
                <img src={product.one} alt={product.name} /> {product.name} (x
                {quantity})
              </p>
              <p>${product.price * quantity}</p>
            </div>
          ))}

          <div className={styles.Gap}>
            <p>
              Subtotal: <span>${total}</span>
            </p>
            <p>
              Shipping: <span>Free</span>
            </p>
            <p>
              Total: <span>${total}</span>
            </p>
          </div>

          <div className={styles.paymentSection}>
            <label className={styles.paymentOption}>
              <input type="radio" name="payment-method" defaultChecked /> Cash
              on Delivery
            </label>
            <label className={styles.paymentOption}>
              <input type="radio" name="payment-method" />
              <img src={pay} alt="Bank" />
            </label>
          </div>

          <button className={styles.couponButton}>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Bill;
