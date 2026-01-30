"use client";
import { FaArrowRight } from "react-icons/fa";
import styles from "../../styles/aboutSplit.module.css";

export default function AboutSplitSection() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>

          {/* LEFT CONTENT */}
          <div className={styles.left}>
            <h2 className={styles.heading}>
              B2B Marketing Agency
              <span> In Mumbai </span>
            </h2>

            <p className={styles.description}>
              B2B marketing requires a focused approach that speaks directly to decision-makers and drives qualified leads. As a trusted B2B marketing agency in Mumbai, we help businesses build strong pipelines through strategic marketing that aligns sales, messaging, and demand generation.
            </p>

            <p className={styles.description}>
              From B2B lead generation and account-based marketing to content strategy, LinkedIn campaigns, and performance marketing, our team creates structured B2B marketing solutions designed to shorten sales cycles and improve conversion quality. Every strategy is built with clear objectives, measurable outcomes, and long-term growth in mind.
            </p>
            <br />

            <a href="/contact-us" className={styles.cta}>
              Book Free Consultation <FaArrowRight color="#fff" size={16} />
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className={styles.right}>
            <img
              src="/media/tech/b2b1.png"
              alt="B2B Marketing Agency In Mumbai"
              className={styles.image}
            />
          </div>

        </div>
      </section>

      <section
        className={styles.ctaWrapper}
        style={{
          backgroundImage: "url('/media/tech/banner34.png')",
        }}
      >
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <div className={styles.content}>
            <h2>
              <span>Generate High-Quality B2B Leads</span> <br />
              B2B Marketing Agency In Mumbai
            </h2>

            <p>
              Work with a Mumbai-based B2B marketing agency that helps you reach the right decision-makers, build sales pipelines, and drive consistent business growth.
            </p>
          </div>

          <a href="/contact-us" className={styles.ctaBtn}>
            Book Free Call <FaArrowRight color="#fff" size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
