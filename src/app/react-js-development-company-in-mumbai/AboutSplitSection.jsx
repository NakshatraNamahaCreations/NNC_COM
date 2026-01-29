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
              React JS Development Company
              <span> in Mumbai </span>
            </h2>

            <p className={styles.description}>
              Modern web applications demand speed, flexibility, and seamless user experiences. As a trusted React JS development company in Mumbai, we build dynamic, component-driven applications that are fast, scalable, and easy to maintain.
            </p>

            <p className={styles.description}>
              Our React developers in Mumbai create high-performance frontends for startups, growing businesses, and enterprises. Whether you need a single-page application, a complex dashboard, or a scalable web platform, we focus on clean architecture, reusable components, and smooth performance across devices.
              Every React solution we build is optimized for long-term growth, easy updates, and real business outcomes.
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
              alt="React JS Development Company in Mumbai"
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
              <span>Build Scalable React Applications</span> <br />
              React JS Development Company in Mumbai
            </h2>

            <p>
              Partner with a Mumbai-based React JS development team that delivers fast, responsive, and future-ready web applications tailored to your business goals.
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
