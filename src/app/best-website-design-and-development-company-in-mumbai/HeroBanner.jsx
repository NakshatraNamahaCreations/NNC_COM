"use client";

import styles from "../../styles/newlandingbanner.module.css";
import { FaBolt, FaCogs, FaCloud, FaArrowRight } from "react-icons/fa";
import HeroContactForm from "./HeroContactForm";
import Link from "next/link";

export default function HeroBanner() {

  const badgeTexts = [
    " •    Best Website Design and Development In Mumbai",
    " •    Best Website Design and Development In Mumbai",
    " •    Best Website Design and Development In Mumbai",
    " •    Best Website Design and Development In Mumbai",
  ];

  return (
    <section className={styles.heroSection}>

      {/* Background */}
      <div className={styles.heroImage}></div>
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <div className={styles.grid}>

          {/* LEFT CONTENT */}
          <div className={styles.content}>

            {/* ===== LEFT SLIDING BADGE ===== */}
            <div className={styles.badge}>
              <FaBolt className={styles.badgeIcon} />

              <div className={styles.badgeSlider}>
                <div className={styles.badgeTrack}>
                  {[...badgeTexts, ...badgeTexts].map((text, i) => (
                    <span key={i} className={styles.badgeText}>
                      {text}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Heading */}
            <h1 className={styles.heading}>
              Best Website Design and Development <br />
              <span>In Mumbai</span>
            </h1>

            {/* Subtitle */}
            <p className={styles.subText}>
              We build fast, responsive, and SEO-friendly websites in Mumbai
              that help businesses grow online with confidence.
            </p>

            {/* KNOW MORE BUTTON */}
            <div className={styles.ctaGroup}>
              <Link href="/best-website-design-and-development-company" className={styles.knowMoreBtn}>
                Know More
                <FaArrowRight />
              </Link>
            </div>

            {/* Features */}
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

          {/* RIGHT CONTACT FORM */}
          <div className={styles.formBox}>
            <HeroContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}
