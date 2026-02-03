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
              alt="Software Development Company in Mumbai"
              className={styles.image}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className={styles.left1}>
            <h2 className={styles.heading}>
              Build Reliable <span>Software Solutions with a</span> Software Development Company in Mumbai
            </h2>

            <p className={styles.description}>
              Working with an experienced software development company in Mumbai helps
              businesses create systems that improve efficiency, streamline operations,
              and support long-term growth. Our development team focuses on building
              stable, scalable, and business-ready software solutions.
            </p>

            <p className={styles.description}>
              From requirement analysis and solution design to development, testing, and
              deployment, our structured approach ensures consistency, security, and
              performance. Every software solution is built to integrate seamlessly
              with your existing workflows while remaining flexible for future
              expansion.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
