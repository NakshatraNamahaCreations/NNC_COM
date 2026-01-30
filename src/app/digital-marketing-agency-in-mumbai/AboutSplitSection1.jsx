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
              alt="Digital Marketing Agency in Mumbai"
              className={styles.image}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className={styles.left1}>
            <h2 className={styles.heading}>
              Grow Your Business with a Result-Driven <span>Digital Marketing Agency in Mumbai</span>
            </h2>

            <p className={styles.description}>
              As a trusted digital marketing agency in Mumbai, we help businesses strengthen their online presence, attract high-quality leads, and improve conversions through strategic and data-focused marketing campaigns. Our approach blends creativity, analytics, and performance to deliver consistent growth across digital channels.
            </p>

            <p className={styles.description}>
              From SEO and Google Ads to social media marketing, content strategy, and conversion optimization, our digital marketing services are designed to meet real business goals. Whether you want to increase website traffic, generate qualified leads, or scale online sales, our Mumbai-based digital marketing team ensures your brand stays visible, competitive, and ready for long-term growth.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
