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
           Trusted   SEO Services
              <span> in Mumbai </span>
            </h2>

            <p className={styles.description}>
              Ranking on Google is no longer optional for growing businesses. As a results-driven SEO services company in Mumbai, we help brands increase visibility, attract quality traffic, and generate consistent leads through proven search engine optimization strategies.
            </p>

            <p className={styles.description}>
              Our SEO experts in Mumbai work with startups, local businesses, and enterprises to improve rankings across competitive keywords. From technical SEO and on-page optimization to content strategy and link building, we focus on sustainable growth that delivers measurable business impact.
              Every SEO campaign is designed to strengthen your online presence and drive long-term results.
            </p>

            <br />

            <a href="/contact-us" className={styles.cta}>
              Book Free Consultation <FaArrowRight color="#fff" size={16} />
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className={styles.right}>
           <img
              src="/media/tech/seo9.jpg"
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
              <span>Improve Your Search Rankings</span> <br />
              SEO Services in Mumbai
            </h2>

            <p>
              Work with a Mumbai-based SEO team that focuses on higher rankings, better visibility, and real business growth through ethical and performance-focused SEO practices.
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
