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
             Plan • Build • Grow Your Digital Business
            </span>

            <h1 className={styles.heading}>
              Website Developers <br />
              <span>in Mumbai</span>
            </h1>

            <p className={styles.subText}>
              We design and develop high performing websites in Mumbai that help businesses build credibility, attract customers, and grow consistently.
            </p>

            <div className={styles.features}>
              <div className={styles.featureCard}>
                <FaBolt className={styles.featureIcon} />
                <span>Faster Delivery</span>
              </div>

         <div className={styles.featureCard}>
  <FaCogs className={styles.featureIcon} />
  <span>Smart Processes</span>
</div>

              <div className={styles.featureCard}>
                <FaCloud className={styles.featureIcon} />
                <span>Scalable Websites</span>
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
