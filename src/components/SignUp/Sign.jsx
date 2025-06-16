import React from "react";
import styles from "./Sign.module.css";
import side from "./Sideimg.png";
import G from "./Google.png";

const SignUp = () => {
  return (
    <div className={styles.MainSection}>
      <div className={styles.LeftSide}>
        <img src={side} alt="side" />
      </div>

      <div className={styles.RightSide}>
        <div className={styles.Txt}>
          <h1>Create an account</h1>
          <p>Enter your details below</p>
        </div>

        <form>
          <div className={styles.inputGroup}>
            <input type="text" id="name" required />
            <label htmlFor="name">Name</label>
          </div>

          <div className={styles.inputGroup}>
            <input type="email" id="email" required />
            <label htmlFor="email">Email or Phone</label>
          </div>

          <div className={styles.inputGroup}>
            <input type="password" id="password" required />
            <label htmlFor="password">Password</label>
          </div>
        </form>
        <div className={styles.TwoButton}>
          <button type="submit" className={styles.TypeOne}>
            Create Account
          </button>

          <button className={styles.TypeTwo}>
            <img src={G} alt="Google logo" className={styles.G} />
            Sign up with Google
          </button>
        </div>

        <div className={styles.LastLine}>
          <p>Already have an account?</p>
          <a href="/Login">Login</a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
