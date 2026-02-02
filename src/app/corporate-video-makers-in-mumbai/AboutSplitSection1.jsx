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
              alt="Corporate Video Makers in Mumbai"
              className={styles.image}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className={styles.left1}>
            <h2 className={styles.heading}>
              Create High-Impact <span>Corporate Videos with Experienced</span> Corporate Video Makers in Mumbai
            </h2>

            <p className={styles.description}>
              Partnering with professional corporate video makers in Mumbai means creating videos that communicate your message clearly and effectively. We focus on producing corporate videos that engage viewers, reflect your brand identity, and support your business communication goals.
            </p>

            <p className={styles.description}>
              From concept planning and scripting to filming, editing, and final delivery, every stage of production is handled with attention to detail. Our corporate video production approach ensures your videos remain relevant, easy to understand, and impactful across digital and offline platforms.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
