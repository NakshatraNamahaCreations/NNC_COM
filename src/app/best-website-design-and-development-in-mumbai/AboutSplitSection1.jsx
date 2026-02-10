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
              alt="Best Website Design and Development In Mumbai"
              className={styles.image}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className={styles.left1}>
            <h2 className={styles.heading}>
              Build High-Performing <span>Websites with the Best </span>
              Website Design and Development In Mumbai
            </h2>

            <p className={styles.description}>
              We deliver professional website design and development in Mumbai,
              creating fast, responsive, and scalable websites that support
              business growth and user engagement.
            </p>

            <p className={styles.description}>
              Every website is built with clean design, reliable development,
              and performance-focused structure to work smoothly across all
              devices.
            </p>

            {/* CTA */}
            <a href="/contact-us" className={styles.cta}>
              Book Free Consultation <FaArrowRight color="#fff" size={16} />
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
