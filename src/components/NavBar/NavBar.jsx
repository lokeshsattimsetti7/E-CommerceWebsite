import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className={styles.MainSection}>
      <div className={styles.UpperBar}>
        <div className={styles.MainTxt}>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link to="/shop" className={styles.shopLink}>
            Shop Now
          </Link>
        </div>
        <div className={styles.lang}>
          <p>English</p>
          <i className="fa-solid fa-angle-down"></i>
        </div>
      </div>
      <div className={styles.LowerBar}>
        <h1 className={styles.logo}>Exclusive</h1>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>

        <ul className={styles.NavLinks}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
        <div className={styles.SearchBar}>
          <input
            type="text"
            placeholder="What are you looking for?"
            className={styles.searchBox}
          />
          <i
            className={`fa-solid fa-magnifying-glass ${styles.searchIcon}`}
          ></i>
        </div>

        <div className={styles.Icons}>
          <ul>
            <li>
              <Link to="/Cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </li>
            <li>
              <Link to="/Whishlist">
                <i className="fa-regular fa-heart"></i>
              </Link>
            </li>
            <li>
              <Link to="/Account">
                <i className="fa-solid fa-user"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`${styles.overlay} ${isMobileMenuOpen ? styles.show : ""}`}
        onClick={closeMenu}
      ></div>

      <div
        className={`${styles.mobileMenu} ${
          isMobileMenuOpen ? styles.open : ""
        }`}
      >
        <button className={styles.closeBtn} onClick={closeMenu}>
          &times;
        </button>
        <nav className={styles.mobileNav}>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/Contact" onClick={closeMenu}>
            Contact
          </Link>
          <Link to="/About" onClick={closeMenu}>
            About
          </Link>
          <Link to="/signup" onClick={closeMenu}>
            Sign Up
          </Link>
          <Link to="/Cart" onClick={closeMenu}>
            Cart
          </Link>
          <Link to="/Whishlist" onClick={closeMenu}>
            Wishlist
          </Link>
          <Link to="/Account" onClick={closeMenu}>
            Account
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
