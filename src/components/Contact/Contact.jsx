import React, { useState } from "react";
import styles from "./Contact.module.css";
import { Link } from "react-router-dom";
import phone from "./icons-phone.png";
import mail from "./icons-mail.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
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
          <Link to="/About">Contact</Link>
        </li>
      </div>

      <div className={styles.SecondSection}>
        <div className={styles.LeftSide}>
          <div className={styles.InsideBlock}>
            <div className={styles.Row}>
              <img src={phone} alt="phone" />
              <p className={styles.Heading}>Call To Us</p>
            </div>

            <div className={styles.Upward}>
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +8801611112222</p>
            </div>

            <hr />

            <div className={styles.Row}>
              <img src={mail} alt="mail" />
              <p className={styles.Heading}>Write To Us</p>
            </div>

            <div className={styles.Downward}>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>
        </div>

        <div className={styles.RightSide}>
          <form onSubmit={handleSubmit} className={styles.Form}>
            <div className={styles.Row}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.Row}>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
              />
            </div>
            <div className={styles.ButtonSection}>
              <button type="submit" className={styles.SubmitButton}>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
