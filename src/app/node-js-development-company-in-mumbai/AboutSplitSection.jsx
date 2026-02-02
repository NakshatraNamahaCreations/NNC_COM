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
            Trusted  Node JS Development Company
              <span> in Mumbai </span>
            </h2>

            <p className={styles.description}>
              Modern digital platforms require fast, scalable, and secure backend systems. As a trusted Node JS development company in Mumbai, we build high-performance server-side applications designed to handle real-time data, high traffic, and complex business logic.
            </p>

            <p className={styles.description}>
              Our Node JS developers in Mumbai specialize in building REST APIs, backend systems, and full-stack applications that power web and mobile platforms. Whether you need a custom API, a scalable backend for a React or mobile app, or a real-time application, we focus on performance, security, and long-term maintainability.
              Every Node JS solution we deliver is engineered to scale with your business and adapt to future requirements.
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
              alt="Node JS Development Company in Mumbai"
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
              <span>Build Scalable Backend Systems</span> <br />
              Node JS Development Company in Mumbai
            </h2>

            <p>
              Partner with a Mumbai-based Node JS development team that delivers fast, secure, and scalable backend solutions for modern web and mobile applications.
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
