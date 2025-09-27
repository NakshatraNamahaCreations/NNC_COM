import React from "react";
import styles from "@/styles/ContactUs.module.css";


export default function ContactUs1() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        {/* Left Form */}
        <div className={styles.formBox}>
          <h3 className={styles.formTitle}>Share Your Query And Contact</h3>
          <form>
            <input type="text" placeholder="Name" className={styles.input} />
            <input type="email" placeholder="Email" className={styles.input} />
            <input type="tel" placeholder="Phone No" className={styles.input} />
            <textarea placeholder="Message" className={styles.textarea}></textarea>

            {/* reCAPTCHA placeholder */}
            <div className={styles.captchaBox}>
              <input type="checkbox" id="robot" />
              <label htmlFor="robot">I'm not a robot</label>
            </div>

            <button type="submit" className={styles.submitBtn}>
              SUBMIT
            </button>
          </form>
        </div>

        {/* Right Illustration */}
        <div className={styles.imageBox}>
          <h2 className={styles.heading}>GET IN TOUCH</h2>
          <img src="/media/gif/nncbanner2.jpg" alt="Contact illustration" />
        </div>
      </div>
    </section>
  );
}
