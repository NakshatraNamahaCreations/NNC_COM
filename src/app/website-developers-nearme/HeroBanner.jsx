"use client";

import styles from "../../styles/AppHero.module.css";

export default function HeroBanner() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <div className="container position-relative">
        <div className="row align-items-center min-vh-100">

          {/* LEFT CONTENT */}
          <div className="col-lg-6 col-md-12">
            <div className={styles.left}>
              <h1 className={styles.outlineTitle}>Website</h1>
              <h2 className={styles.solidTitle}>Development</h2>

              <p className={styles.description}>
                A complete solution for designing and developing modern mobile
                applications. Innovate, create, and connect through powerful app
                experiences.
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="col-lg-6 col-md-12 d-flex justify-content-lg-end justify-content-center">
            <div className={styles.formWrapper}>
              <h3>Drop Us a Message</h3>

              <form className={styles.form}>
                <input type="text" placeholder="Name*" required />
                <input type="email" placeholder="Email*" required />
                <input type="tel" placeholder="Phone*" required />
                <textarea rows="4" placeholder="Message*" required />

                <button type="submit">
                  Connect With Us
                  <span>↑</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
