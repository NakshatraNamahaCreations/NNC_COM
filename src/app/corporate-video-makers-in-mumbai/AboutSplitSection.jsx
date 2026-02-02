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
              Professional Corporate Video Makers
              <span> in Mumbai </span>
            </h2>

            <p className={styles.description}>
              Corporate videos are a powerful way for businesses to communicate their vision, values, and offerings. As experienced corporate video makers in Mumbai, we create videos that clearly convey your message, strengthen brand identity, and engage your target audience.
            </p>

            <p className={styles.description}>
              From concept planning and scripting to filming and post-production, we produce corporate videos that are visually strong, well-structured, and purpose-driven. Whether it’s a company profile video, brand story, or promotional corporate video, our approach focuses on clarity, quality, and long-term impact.
            </p>

            <br />

            <a href="/contact-us" className={styles.cta}>
              Book Free Consultation <FaArrowRight color="#fff" size={16} />
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className={styles.right}>
            <img
              src="/media/tech/corporatefilm2.png"
              alt="Corporate Video Makers in Mumbai"
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
              <span>Videos That Communicate</span> <br />
              Corporate Video Makers in Mumbai
            </h2>

            <p>
              Work with Mumbai-based corporate video makers who focus on creating professional, impactful videos that support clear communication and business growth.
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
