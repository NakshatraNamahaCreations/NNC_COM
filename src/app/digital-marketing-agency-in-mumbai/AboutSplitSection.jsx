"use client";
import { FaArrowRight } from "react-icons/fa";
import styles from "../../styles/aboutSplit.module.css";

export default function AboutSplitSection() {
  return (
    <>
      <section className={styles.section} style={{ padding: "10px 0" }}>
        <div className={styles.container}>

          {/* LEFT CONTENT */}
          <div className={styles.left}>
            <h2 className={styles.heading}>
              Digital Marketing Agency
              <span> in Mumbai </span>
            </h2>

            <p className={styles.description}>
              Growing a business online requires the right mix of strategy, creativity, and performance-driven execution. As a reliable digital marketing agency in Mumbai, we help brands increase visibility, attract qualified leads, and convert traffic into real customers through data-backed marketing solutions.
            </p>

            <p className={styles.description}>
              Our digital marketing experts in Mumbai specialize in SEO, Google Ads, social media marketing, content marketing, and performance campaigns tailored to your business goals. Whether you want to boost website traffic, generate leads, or improve online sales, we focus on measurable results, consistent growth, and long-term brand value.
              Every digital strategy we implement is optimized for ROI, audience engagement, and scalable growth.
            </p>

            <br />

            <a href="/contact-us" className={styles.cta}>
              Book Free Consultation <FaArrowRight color="#fff" size={16} />
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className={styles.right}>
            <img
              src="/media/tech/website-mumbai9.png"
              alt="Digital Marketing Agency in Mumbai"
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
              <span>Drive Growth with Result-Oriented Marketing</span> <br />
              Digital Marketing Agency in Mumbai
            </h2>

            <p>
              Work with a Mumbai-based digital marketing agency that delivers high-impact campaigns, measurable results, and sustainable online growth for your business.
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
