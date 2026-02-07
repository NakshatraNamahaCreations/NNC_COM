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
              B2B Marketing Company
              <span> In Mumbai </span>
            </h2>

            <p className={styles.description}>
              B2B marketing requires clarity, consistency, and a strong understanding of how businesses make purchasing decisions. As a trusted B2B marketing company in Mumbai, we help organizations connect with the right decision-makers and build structured marketing systems that generate qualified leads and support long-term business growth.
            </p>

            <p className={styles.description}>
              Our approach focuses on building sustainable demand through B2B lead generation, account-based marketing, LinkedIn campaigns, content strategy, and performance marketing. Every campaign is designed to align with your sales objectives, improve lead quality, and reduce lengthy sales cycles while delivering measurable business outcomes.
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
              alt="B2B Marketing Company In Mumbai"
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
              B2B Marketing Company In Mumbai
            </h2>

            <p>
              Partner with a Mumbai-based B2B marketing company that helps you reach decision-makers, strengthen your sales pipeline, and achieve consistent business growth through structured marketing strategies.
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
