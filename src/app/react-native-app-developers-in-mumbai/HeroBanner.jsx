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
              Design • Develop • Scale React Native Apps
            </span>

            <h1 className={styles.heading} style={{ fontSize: "2.7rem" }}>
              React Native Mobile App Development <br />
              <span>in Mumbai</span>
            </h1>

            <p className={styles.subText}>
              Looking for React Native Mobile App Development in Mumbai? We build fast, scalable, and high-performance mobile applications using a single codebase for both Android and iOS platforms.
            </p>

           <div className={styles.features}>
  <div className={styles.featureCard}>
    <FaBolt className={styles.featureIcon} />
    <span>Faster Development</span>
  </div>

  <div className={styles.featureCard}>
    <FaCogs className={styles.featureIcon} />
    <span>Single Codebase</span>
  </div>

  <div className={styles.featureCard}>
    <FaCloud className={styles.featureIcon} />
    <span>Scalable Performance</span>
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
