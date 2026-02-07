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
              alt="B2B Marketing Company In Mumbai"
              className={styles.image}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className={styles.left1}>
            <h2 className={styles.heading}>
              Drive Business Growth with a <span>Result-Oriented</span> B2B Marketing Company In Mumbai
            </h2>

            <p className={styles.description}>
              Partnering with an experienced B2B marketing company in Mumbai helps businesses connect with decision-makers, strengthen sales pipelines, and improve the overall quality of leads. Our strategies focus on aligning marketing activities with business objectives to deliver consistent and measurable growth.
            </p>

            <p className={styles.description}>
              From B2B lead generation and account-based marketing to LinkedIn advertising, content planning, and performance-driven campaigns, our team builds structured marketing solutions that support complex sales cycles and high-value conversions. Every campaign is driven by insights, clear goals, and a focus on long-term business outcomes.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
