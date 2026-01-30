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
              Website Designing Company
              <span> in Mumbai </span>
            </h2>

            <p className={styles.description}>
              A well-designed website is more than just visuals—it plays a crucial role
              in brand perception, user engagement, and lead conversion. If you are
              searching for a reliable website designing company in Mumbai, you need a
              team that understands design aesthetics, usability, and business goals.
            </p>

            <p className={styles.description}>
              We help businesses in Mumbai design modern, responsive, and visually
              engaging websites that reflect brand identity and deliver seamless user
              experiences. From startups to established brands, our website designs are
              crafted to support marketing, improve credibility, and convert visitors
              into customers. Our design approach blends creativity with structure,
              ensuring your website looks great and performs effectively across all
              devices.
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
              alt="Website Designing Company in Mumbai"
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
              <span>Design That Drives Results</span> <br />
              Website Designing Company in Mumbai
            </h2>

            <p>
              Partner with a Mumbai-based website designing company focused on
              user-centric design, responsive layouts, and long-term digital success.
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
