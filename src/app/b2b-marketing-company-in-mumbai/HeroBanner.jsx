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
              Plan • Execute • Scale B2B Growth
            </span>

            <h1 className={styles.heading}>
              B2B Marketing Company <br />
              <span>In Mumbai</span>
            </h1>

            <p className={styles.subText}>
              As a trusted B2B marketing company in Mumbai, we help businesses
              generate qualified leads, build predictable sales pipelines, and
              drive revenue growth through structured and performance-focused
              marketing strategies.
            </p>

            <div className={styles.features}>
              <div className={styles.featureCard}>
                <FaBolt className={styles.featureIcon} />
                <span>Lead Generation</span>
              </div>

              <div className={styles.featureCard}>
                <FaCogs className={styles.featureIcon} />
                <span>Sales-Aligned Marketing</span>
              </div>

              <div className={styles.featureCard}>
                <FaCloud className={styles.featureIcon} />
                <span>Scalable B2B Growth</span>
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
