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
              src="/media/tech/corporate10.png"
              alt="Corporate Video Production Company in Mumbai"
              className={styles.image}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className={styles.left1}>
            <h2 className={styles.heading}>
              Create High-Impact <span>Corporate Videos with an Experienced</span> Corporate Video Production Company in Mumbai
            </h2>

            <p className={styles.description}>
              Working with a professional corporate video production company in Mumbai means more than just shooting a video. We focus on creating visual content that communicates your message clearly, engages viewers, and strengthens brand credibility.
            </p>

            <p className={styles.description}>
              From concept planning and filming to editing and final delivery, every stage is handled with attention to detail. Our video production approach ensures your content remains relevant, easy to understand, and aligned with your long-term communication goals.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
