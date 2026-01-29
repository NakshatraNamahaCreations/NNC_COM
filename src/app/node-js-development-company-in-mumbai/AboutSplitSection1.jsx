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
              alt="Node JS Development Company in Mumbai"
              className={styles.image}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className={styles.left1}>
            <h2 className={styles.heading}>
              Build High-Performance <span>Node JS Applications</span> With a Trusted Team in Mumbai
            </h2>

            <p className={styles.description}>
              As a reliable Node JS development company in Mumbai, we specialize in building fast, scalable, and secure backend applications. Our Node JS developers focus on efficient server-side architecture, API development, and real-time data handling to support modern digital platforms.
            </p>

            <p className={styles.description}>
              From backend planning and database design to development, testing, and deployment, our Node JS development process is designed for real-world usage and long-term scalability. Whether you need custom APIs, a backend for a web or mobile app, or a real-time application, we ensure your Node JS solution remains flexible, secure, and easy to maintain as your business grows.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
