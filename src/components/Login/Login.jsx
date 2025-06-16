import React from "react";
import styles from "./Login.module.css";
import sides from "./Sideimg2.png";

const Login = () => {
  return (
    <div className={styles.SignUp}>
      <div className={styles.LeftSide}>
        <img src={sides} alt="side" />
      </div>

      <div className={styles.RightSide}>
        <div className={styles.Txt}>
          <h1>Login in to Exclusive</h1>
          <p>Enter your details below</p>
        </div>

        <form>
          <div className={styles.inputGroup}>
            <input type="email" id="email" required />
            <label htmlFor="email">Email or Phone</label>
          </div>

          <div className={styles.inputGroup}>
            <input type="password" id="password" required />
            <label htmlFor="password">Password</label>
          </div>

          <div className={styles.Button}>
            <button type="submit" className={styles.TypeOne}>
              <a href="/">Log in</a>
            </button>
            <button type="button" className={styles.TypeTwo}>
              Forget Password?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
