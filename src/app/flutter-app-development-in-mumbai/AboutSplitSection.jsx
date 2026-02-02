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
              Flutter App Solutions Designed for
              <span> Real Business Growth</span>
            </h2>

            <p className={styles.description}>
              A successful mobile application is more than just functionality—it’s about performance, usability, and scalability. As a trusted Flutter app development company in Mumbai, we build high-quality cross-platform applications that run smoothly on both Android and iOS while aligning with real business objectives.
            </p>

            <p className={styles.description}>
              Whether you’re a startup launching your first Flutter app or an established business modernizing an existing product, we turn your ideas into reliable, market-ready applications. From planning and UI design to development, testing, and deployment, our Flutter app development services in Mumbai are structured to help your app scale, adapt, and deliver measurable results.
            </p>

            <br />

            <a href="/contact-us" className={styles.cta}>
              Book Free Consultation <FaArrowRight color="#fff" size={16} />
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className={styles.right}>
            <img
              src="/media/tech/mobileapp.png"
              alt="Flutter App Development in Mumbai"
              className={styles.image}
            />
          </div>

        </div>
      </section>

      <section
        className={styles.ctaWrapper}
        style={{
          backgroundImage: "url('/media/tech/banner32.jpg')",
        }}
      >
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <h2>
            <span>Build What Matters</span> <br />
            Your Flutter App Development Partner in Mumbai
          </h2>

          <p>
            Transform your app idea into a fast, secure, and scalable cross-platform solution with a Mumbai-based Flutter development team focused on long-term success.
          </p>

          <a href="/contact-us" className={styles.ctaBtn}>
            Book Free Call <FaArrowRight color="#fff" size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
