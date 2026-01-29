"use client";

import styles from "../../styles/newlandingbanner.module.css";
import { FaBolt, FaCogs, FaCloud, FaLock } from "react-icons/fa";
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
              Build • Power • Scale Backend Systems
            </span>

            <h1 className={styles.heading}>
              Node JS Development Company <br />
              <span>in Mumbai</span>
            </h1>

            <p className={styles.subText}>
              We build fast, secure, and scalable Node JS backend applications in Mumbai that support high traffic, real-time data, and modern web and mobile platforms.
            </p>

            <div className={styles.features}>
              <div className={styles.featureCard}>
                <FaBolt className={styles.featureIcon} />
                <span>High-Performance Backend</span>
              </div>

              <div className={styles.featureCard}>
                <FaCogs className={styles.featureIcon} />
                <span>Scalable Node Architecture</span>
              </div>

              <div className={styles.featureCard}>
                <FaCloud className={styles.featureIcon} />
                <span>API & Real-Time Systems</span>
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
