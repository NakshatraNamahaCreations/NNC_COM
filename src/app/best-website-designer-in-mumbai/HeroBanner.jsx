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
              Strategy • Design • Growth-Focused Websites
            </span>

            <h1 className={styles.heading}>
              Best Website Designer <br />
              <span>in Mumbai</span>
            </h1>

            <p className={styles.subText}>
              We design high-performance, visually engaging websites in Mumbai
              that help businesses build trust, attract the right customers, and
              grow their digital presence with confidence.
            </p>

            <div className={styles.features}>
              <div className={styles.featureCard}>
                <FaBolt className={styles.featureIcon} />
                <span>Fast Project Turnaround</span>
              </div>

              <div className={styles.featureCard}>
                <FaCogs className={styles.featureIcon} />
                <span>Design-Led Approach</span>
              </div>

              <div className={styles.featureCard}>
                <FaCloud className={styles.featureIcon} />
                <span>Scalable & Responsive Websites</span>
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
