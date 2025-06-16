import React, { useState } from "react";
import styles from "./MyAccount.module.css";
import { Link } from "react-router-dom";

const Account = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className={styles.MainSection}>
      <div className={styles.SectionOne}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <span>/</span>
        <li>
          <Link to="/About">My Account</Link>
        </li>
      </div>

      <div className={styles.SectionTwo}>
        <div className={styles.LeftSide}>
          <div className={styles.Sideheading}>
            <h1>Manage My Account</h1>
            <ul>
              <li>My Profile</li>
              <li>Address Book</li>
              <li>My Payment Options</li>
            </ul>
          </div>
          <div className={styles.Sideheading}>
            <h1>My Orders</h1>
            <ul>
              <li>My Returns</li>
              <li>My Cancellation</li>
            </ul>
          </div>
          <div className={styles.Sideheading}>
            <h1>My WishList</h1>
          </div>
        </div>

        <div className={styles.RightSide}>
          <form onSubmit={handleSubmit} className={styles.Form}>
            <h2 className={styles.MainHeading}>Edit Your Profile</h2>

            <div className={styles.Row}>
              <div className={styles.InputGroup}>
                <label htmlFor="firstName" className={styles.Label}>
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.InputGroup}>
                <label htmlFor="lastName" className={styles.Label}>
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.Row}>
              <div className={styles.InputGroup}>
                <label htmlFor="email" className={styles.Label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.InputGroup}>
                <label htmlFor="address" className={styles.Label}>
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.SectionHeading}>Password Changes</div>

            <div className={styles.SingleRow}>
              <label htmlFor="newPassword" className={styles.Label}>
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.SingleRow}>
              <label htmlFor="confirmPassword" className={styles.Label}>
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.SingleRow}>
              <label htmlFor="confirmPassword" className={styles.Label}>
                Re-Enter Pass
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.ButtonSection}>
              Cancel
              <button type="submit" className={styles.SubmitButton}>
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
