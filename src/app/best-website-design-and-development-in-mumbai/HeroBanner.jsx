"use client";

import styles from "../../styles/newlandingbanner.module.css";
import { FaBolt, FaCogs, FaCloud } from "react-icons/fa";
import HeroContactForm from "./HeroContactForm";

export default function HeroBanner() {
  return (
    <section className={styles.heroSection}>
      
      {/* Background Image */}
      <div className={styles.heroImage}></div>

      {/* Overlay */}
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <div className={styles.grid}>

          {/* LEFT CONTENT */}
          <div className={styles.content}>
            <span className={styles.badge}>
              <FaBolt className={styles.badgeIcon} />
              Design • Development • Business Growth
            </span>

            <h1 className={styles.heading}>
              Best Website Design and Development <br />
              <span>In Mumbai</span>
            </h1>

            <p className={styles.subText}>
              We build fast, responsive, and SEO-friendly websites in Mumbai
              that help businesses grow online with confidence.
            </p>

            <div className={styles.features}>
             <div className={styles.featureCard}>
  <FaBolt className={styles.featureIcon} />
  <span>Fast Delivery</span>
</div>

<div className={styles.featureCard}>
  <FaCogs className={styles.featureIcon} />
  <span>Design & Development</span>
</div>

<div className={styles.featureCard}>
  <FaCloud className={styles.featureIcon} />
  <span>Responsive Websites</span>
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
