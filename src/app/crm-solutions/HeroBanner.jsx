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
              Strategy • Automation • CRM Solutions
            </span>

            <h2 className={styles.heading}>
              CRM Solutions <br />
              <span>for Growing Businesses</span>
            </h2>

            <p className={styles.subText}>
              We help businesses manage leads, track customer interactions, and streamline sales processes through simple and effective CRM systems built for daily business operations.
            </p>

            <div className={styles.features}>
              <div className={styles.featureCard}>
                <FaBolt className={styles.featureIcon} />
                <span>Lead Management</span>
              </div>

              <div className={styles.featureCard}>
                <FaCogs className={styles.featureIcon} />
                <span>Process Automation</span>
              </div>

              <div className={styles.featureCard}>
                <FaCloud className={styles.featureIcon} />
                <span>Cloud Access</span>
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
