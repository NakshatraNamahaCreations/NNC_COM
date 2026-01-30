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
              src="/media/tech/animate4.jpg"
              alt="B2B Marketing Agency In Mumbai"
              className={styles.image}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className={styles.left1}>
            <h2 className={styles.heading}>
              Drive Business Growth with a <span>Result-Oriented</span> B2B Marketing Agency In Mumbai
            </h2>

            <p className={styles.description}>
              Working with an experienced B2B marketing agency in Mumbai helps businesses reach key decision-makers, build strong sales pipelines, and improve lead quality. Our strategies are designed to align marketing efforts with sales goals for consistent and measurable results.
            </p>

            <p className={styles.description}>
              From B2B lead generation and account-based marketing to LinkedIn advertising, content strategy, and performance campaigns, our team delivers structured marketing solutions that support longer sales cycles and high-value conversions. Every campaign is guided by data, clear objectives, and business outcomes.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
