import React from "react";
import styles from "./Footer.module.css"; // Correct Import
import FotterFrame from "./Frame.png";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.SectionOne}>
        <h1>Exclusive</h1>
        <p>Subscribe</p>
        <p>Get 10% off your first order</p>
        <form
          className={styles.couponForm}
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Enter your email"
            className={styles.couponInput}
          />
          <button type="submit" className={styles.couponButton}>
            Send
          </button>
        </form>
      </div>
      <div className={styles.SectionTwo}>
        <h1>Support</h1>
        <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
        <p>exclusive@gmail.com,</p>
        <p> +88015-88888-9999</p>
      </div>
      <div className={styles.MiddleSection}>
        <div className={styles.SectionThree}>
          <h1>Account</h1>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>
        <div className={styles.SectionFourth}>
          <h1>Quick Link</h1>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
      </div>
      <div className={styles.SectionFifth}>
        <h1>Download App</h1>
        <p>Save $3 with App New User Only</p>
        <img src={FotterFrame} alt="footer" />
        <div className={styles.FooterIcons}>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin"></i>
        </div>
      </div>
      <div className={styles.BottomFooter}>
        @ Copyright Rimel 2022. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
