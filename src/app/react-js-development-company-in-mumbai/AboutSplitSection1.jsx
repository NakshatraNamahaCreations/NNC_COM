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
              alt="React JS Development Company in Mumbai"
              className={styles.image}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className={styles.left1}>
            <h2 className={styles.heading}>
              Build High-Performance <span>React JS Applications</span> With a Trusted Team in Mumbai
            </h2>

            <p className={styles.description}>
              As a reliable React JS development company in Mumbai, we specialize in building fast, interactive, and scalable web applications. Our React developers focus on clean component architecture, efficient state management, and smooth user interactions that enhance overall application performance.
            </p>

            <p className={styles.description}>
              From planning and UI structure to development, testing, and deployment, our React JS development process is designed for real-world usage and long-term scalability. Whether you need a single-page application, business dashboard, or a complex frontend system, we ensure your React application remains flexible, secure, and easy to evolve as your business grows.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
