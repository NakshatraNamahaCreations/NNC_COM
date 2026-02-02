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
              alt="SEO Services in Mumbai"
              className={styles.image}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className={styles.left1}>
            <h2 className={styles.heading}>
              Drive Organic Growth With <span>Professional SEO Services</span> in Mumbai
            </h2>

            <p className={styles.description}>
              As an experienced SEO services company in Mumbai, we help businesses improve search engine rankings, increase website visibility, and attract high-intent users. Our SEO strategies are built around in-depth keyword research, technical optimization, and content improvements that support long-term organic growth.
            </p>

            <p className={styles.description}>
              From website audits and on-page SEO to link building and performance tracking, our SEO process focuses on measurable results. Whether you are targeting local Mumbai searches or competitive national keywords, we ensure your website stays optimized, search-friendly, and aligned with evolving Google algorithms as your business scales.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
