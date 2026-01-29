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
              Android App Development
               <span>  in Mumbai</span>
            </h2>

            <p className={styles.description}>
              A successful Android application is built on more than just clean code—it’s about creating an experience users rely on every day. As a trusted Android App Development in Mumbai, we focus on building high-performance, intuitive, and scalable mobile apps that align with real business objectives. Our Android solutions are designed to deliver smooth performance across devices while offering an engaging user experience.
            </p>

            <p className={styles.description}>
              Whether you’re a startup launching your first Android app or an established business upgrading an existing product, we transform your idea into a reliable, market-ready application. From planning and UI design to development, testing, and Play Store deployment, our Android app development services in Mumbai are structured to help your app grow, adapt, and deliver measurable results.
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
              alt="Android App Development in Mumbai"
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
            Your Android App Development Partner in Mumbai
          </h2>

          <p>
            Convert your Android app idea into a secure, scalable, and user-focused product with a Mumbai-based development team committed to long-term performance and business growth.
          </p>

          <a href="/contact-us" className={styles.ctaBtn}>
            Book Free Call <FaArrowRight color="#fff" size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
