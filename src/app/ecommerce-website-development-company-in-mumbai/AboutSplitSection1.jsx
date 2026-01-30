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
              alt="Ecommerce Website Development Company in Mumbai"
              className={styles.image}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className={styles.left1}>
            <h2 className={styles.heading}>
              Build High-Converting <span>Ecommerce Websites</span> With a Trusted Team in Mumbai
            </h2>

            <p className={styles.description}>
              As a reliable ecommerce website development company in Mumbai, we specialize in building fast, secure, and user-friendly online stores. Our ecommerce developers focus on smooth navigation, quick page loads, and optimized checkout experiences that help convert visitors into customers.
            </p>

            <p className={styles.description}>
              From store planning and product structure to development, payment gateway integration, testing, and launch, our ecommerce website development process is designed for real-world selling and long-term scalability. Whether you need a new ecommerce store, a custom marketplace, or an upgrade to your existing platform, we ensure your ecommerce website remains flexible, secure, and easy to manage as your business grows.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
