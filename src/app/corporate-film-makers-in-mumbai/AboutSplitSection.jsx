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
              Trusted Corporate Film Makers
              <span> in Mumbai </span>
            </h2>

            <p className={styles.description}>
              Corporate films play a key role in how businesses share their story and present their brand. As trusted corporate film makers in Mumbai, we create films that communicate your message clearly, build credibility, and connect with your audience.
            </p>

            <p className={styles.description}>
              From concept development to filming and post-production, we produce corporate films that are visually compelling, well-structured, and easy to understand. Whether it’s a brand film, company profile film, or promotional corporate film, our process ensures consistency, quality, and long-term value.
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
              alt="Corporate Film Makers in Mumbai"
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
              <span>Films That Communicate</span> <br /> Corporate Film Makers in Mumbai
            </h2>

            <p>
              Partner with Mumbai-based corporate film makers focused on creating professional films that support clear communication and long-term business growth.
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
