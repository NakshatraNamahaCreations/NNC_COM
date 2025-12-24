"use client";

import styles from "../../styles/newlandingbanner.module.css";
import { FaBolt, FaCogs , FaCloud, FaLock } from "react-icons/fa";
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
              Adapt • Evolve • Scale Your Business
            </span>

            <h1 className={styles.heading}>
              #1 App Development <br />
              <span>Company in Bangalore</span>
            </h1>

            <p className={styles.subText}>
              We build scalable, automation-driven mobile and web applications engineered for growth, performance, and measurable ROI.
            </p>

            <div className={styles.features}>
              <div className={styles.featureCard}>
                <FaBolt className={styles.featureIcon} />
                <span>2X Faster Launch</span>
              </div>

         <div className={styles.featureCard}>
  <FaCogs className={styles.featureIcon} />
  <span>Smart Automation</span>
</div>

              <div className={styles.featureCard}>
                <FaCloud className={styles.featureIcon} />
                <span>Scalable Architecture</span>
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
