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
              Strategy • Development • Custom CRM
            </span>

            <h1 className={styles.heading} style={{fontSize:"3rem"}}>
              Custom CRM Development
              <span> Company </span>
            </h1>

            <p className={styles.subText}>
              We build custom CRM systems designed around your business workflows, helping teams manage leads, automate processes, and improve customer interactions through a single structured platform.
            </p>

            <div className={styles.features}>
              <div className={styles.featureCard}>
                <FaBolt className={styles.featureIcon} />
                <span>Custom CRM Workflows</span>
              </div>

              <div className={styles.featureCard}>
                <FaCogs className={styles.featureIcon} />
                <span>Process Automation</span>
              </div>

              <div className={styles.featureCard}>
                <FaCloud className={styles.featureIcon} />
                <span>Cloud-Based Systems</span>
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
