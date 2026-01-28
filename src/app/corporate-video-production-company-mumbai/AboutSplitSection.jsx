"use client";
import { FaArrowRight } from "react-icons/fa";
import styles from "../../styles/aboutSplit.module.css";

export default function AboutSplitSection() {
  return (
    <>
      <section className={styles.section} >
        <div className={styles.container}>

          {/* LEFT CONTENT */}
          <div className={styles.left}>
            <h2 className={styles.heading}>
              Trusted Corporate Video Production Company 
              <span> in Mumbai </span>
            </h2>

            <p className={styles.description}>
              Corporate videos play a crucial role in how businesses communicate their message and present their brand. As a trusted corporate video production company in Mumbai, we focus on creating videos that clearly convey your story, build credibility, and connect with your audience.
            </p>

            <p className={styles.description}>
              From concept development to filming and post-production, we produce videos that are visually strong, well-structured, and easy to understand. Whether it’s a brand film, company profile, or promotional video, our process ensures consistency, quality, and long-term value.
            </p>
            <br />

            <a href="/contact-us" className={styles.cta}>
              Book Free Consultation <FaArrowRight color="#fff" size={16} />
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className={styles.right}>
            <img
              src="/media/tech/corporate2.png"
              alt="Corporate Video Production Company in Mumbai"
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
              <span>Videos That Communicate</span> <br /> Corporate Video Production Company in Mumbai
            </h2>

            <p>
              Work with a Mumbai-based corporate video production team focused on creating professional videos that support clear communication and business growth.
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
