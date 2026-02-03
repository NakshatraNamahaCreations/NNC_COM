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
              Mobile App Developers in 
              <span> Mumbai for Business Growth</span>
            </h2>

            <p className={styles.description}>
              Choosing the right mobile app developers in Mumbai is about more than technical skills—it’s about building apps that users trust and businesses can scale with confidence. We design and develop mobile applications that focus on usability, performance, and long-term value across Android platforms.
            </p>

            <p className={styles.description}>
              Whether you are a startup building your first mobile app or a growing business enhancing an existing product, our team converts ideas into reliable, market-ready applications. From planning and UI design to development, testing, and Play Store deployment, our mobile app development process is structured to support growth, flexibility, and measurable results.
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
              alt="Mobile App Developers in Mumbai"
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
            <span>Build Apps That Perform</span> <br />
            Trusted Mobile App Developers in Mumbai
          </h2>

          <p>
            Turn your mobile app idea into a secure, scalable, and user-focused product with experienced mobile app developers in Mumbai dedicated to quality, performance, and business outcomes.
          </p>

          <a href="/contact-us" className={styles.ctaBtn}>
            Book Free Call <FaArrowRight color="#fff" size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
