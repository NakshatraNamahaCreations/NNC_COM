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
              alt="Paid Marketing Services in Mumbai"
              className={styles.image}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className={styles.left1}>
            <h2 className={styles.heading}>
              Scale Faster with High-Performance
              <span> Paid Marketing Services in Mumbai</span>
            </h2>

            <p className={styles.description}>
              Paid marketing helps businesses reach the right audience instantly and drive faster results. As a reliable provider of paid marketing services in Mumbai, we create performance-driven ad campaigns that increase visibility, generate qualified leads, and boost conversions across multiple digital platforms.
            </p>

            <p className={styles.description}>
              Our paid marketing specialists in Mumbai manage Google Ads, social media advertising, display campaigns, remarketing, and conversion-focused performance marketing. Every campaign is optimized to control ad spend, improve targeting accuracy, and maximize return on investment.
              Whether your goal is lead generation, online sales, or brand awareness, our paid advertising strategies are built to deliver measurable growth and long-term profitability.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
