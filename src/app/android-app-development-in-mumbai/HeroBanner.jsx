"use client";

import styles from "../../styles/newlandingbanner.module.css";
import { FaBolt, FaCogs, FaCloud } from "react-icons/fa";
import HeroContactForm from "./HeroContactForm";

export default function HeroBanner() {
  return (
    <section className={styles.heroSection}>

      {/* Background Image Option */}
      <div className={styles.heroImage}></div>

      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <div className={styles.grid}>

          {/* LEFT CONTENT */}
          <div className={styles.content}>
            <span className={styles.badge}>
              <FaBolt className={styles.badgeIcon} />
              Build • Launch • Scale Android Apps
            </span>

            <h1 className={styles.heading} style={{fontSize:"2.7rem"}}>
              Android App Development <br />
              <span>in Mumbai</span>
            </h1>

            <p className={styles.subText}>
              We design and develop high-performance Android applications for startups, enterprises, and growing businesses in Mumbai, focused on speed, stability, and real user engagement.
            </p>

            <div className={styles.features}>
              <div className={styles.featureCard}>
                <FaBolt className={styles.featureIcon} />
                <span>Fast Android App Delivery</span>
              </div>

              <div className={styles.featureCard}>
                <FaCogs className={styles.featureIcon} />
                <span>Custom App Functionality</span>
              </div>

              <div className={styles.featureCard}>
                <FaCloud className={styles.featureIcon} />
                <span>Scalable & Secure Apps</span>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className={styles.formBox}>
            <HeroContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}
