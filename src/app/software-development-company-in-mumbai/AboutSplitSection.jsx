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
              Software Development Company
              <span> in Mumbai </span>
            </h2>

            <p className={styles.description}>
              Choosing the right software development company in Mumbai is essential
              for building systems that improve efficiency, automate processes, and
              support long-term business growth. You need a development partner that
              understands technology, scalability, and real-world business challenges.
            </p>

            <p className={styles.description}>
              As a trusted software development company in Mumbai, we help businesses
              design and develop custom software solutions that are secure, scalable,
              and built for long-term performance. From internal business applications
              and enterprise software to customer-facing platforms, our solutions are
              developed to integrate seamlessly with your workflows and deliver
              measurable value.
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
              alt="Software Development Company in Mumbai"
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
              <span>Software Solutions That Power Business Growth</span> <br />
              Software Development Company in Mumbai
            </h2>

            <p>
              Partner with a Mumbai-based software development company focused on
              building reliable, scalable, and business-driven software solutions
              designed for long-term success.
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
