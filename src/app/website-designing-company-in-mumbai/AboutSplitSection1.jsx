"use client";
import { FaArrowRight } from "react-icons/fa";
import styles from "../../styles/aboutSplit.module.css";

export default function AboutSplitSection1() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container1}>

          {/* LEFT IMAGE */}
          <div className={styles.right1}>
            <img
              src="/media/tech/website-mumbai10.png"
              alt="Website Designing Company in Mumbai"
              className={styles.image}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className={styles.left1}>
            <h2 className={styles.heading}>
              Create Impactful <span>Website Designs with a</span> Website Designing Company in Mumbai
            </h2>

            <p className={styles.description}>
              Working with a professional website designing company in Mumbai gives your
              business a strong visual identity and a user-friendly online presence.
              Our design team focuses on layout structure, visual hierarchy, and user
              experience to ensure your website communicates clearly and engages visitors
              effectively.
            </p>

            <p className={styles.description}>
              From wireframing and UI design to responsive layouts and final design
              implementation, our website designing process is crafted to deliver
              consistency, usability, and performance across all devices. Every design
              decision is made to support branding, credibility, and conversion goals.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
