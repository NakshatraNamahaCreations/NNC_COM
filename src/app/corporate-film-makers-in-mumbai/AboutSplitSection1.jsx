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
              alt="Corporate Film Makers in Mumbai"
              className={styles.image}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className={styles.left1}>
            <h2 className={styles.heading}>
              Create High-Impact <span>Corporate Films with Experienced</span> Corporate Film Makers in Mumbai
            </h2>

            <p className={styles.description}>
              Working with professional corporate film makers in Mumbai goes beyond just filming. We focus on creating corporate films that communicate your story clearly, engage viewers, and build long-term brand credibility.
            </p>

            <p className={styles.description}>
              From concept development and filming to editing and final delivery, every stage is handled with precision. Our film-making approach ensures your corporate films remain relevant, easy to understand, and aligned with your business communication goals.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
