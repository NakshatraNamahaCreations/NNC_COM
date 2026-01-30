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
              Design • Develop • Scale Flutter Apps
            </span>

            <h1 className={styles.heading} style={{ fontSize: "2.7rem" }}>
              Flutter App Development <br />
              <span>in Mumbai</span>
            </h1>

            <p className={styles.subText}>
              Looking for Flutter App Development in Mumbai. We build fast, scalable, and visually consistent cross-platform mobile applications using a single codebase for Android and iOS.
            </p>

                <div className={styles.features}>
  <div className={styles.featureCard}>
    <FaBolt className={styles.featureIcon} />
    <span>Fast Delivery</span>
  </div>

  <div className={styles.featureCard}>
    <FaCogs className={styles.featureIcon} />
    <span>Custom Features</span>
  </div>

  <div className={styles.featureCard}>
    <FaCloud className={styles.featureIcon} />
    <span>Scalable & Secure</span>
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
