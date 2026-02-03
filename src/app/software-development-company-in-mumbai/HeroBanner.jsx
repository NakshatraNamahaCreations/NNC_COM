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
              Plan • Build • Scale Business Software
            </span>

            <h1 className={styles.heading}>
              Software Development Company
              <span> in Mumbai</span>
            </h1>

            <p className={styles.subText}>
              We are a trusted software development company in Mumbai delivering
              secure, scalable, and custom software solutions that help businesses
              streamline operations, improve efficiency, and grow with confidence.
            </p>

            <div className={styles.features}>
              <div className={styles.featureCard}>
                <FaCogs className={styles.featureIcon} />
                <span>Custom Software Solutions</span>
              </div>

              <div className={styles.featureCard}>
                <FaCloud className={styles.featureIcon} />
                <span>Scalable Architecture</span>
              </div>

              <div className={styles.featureCard}>
                <FaLock className={styles.featureIcon} />
                <span>Secure & Reliable Systems</span>
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
