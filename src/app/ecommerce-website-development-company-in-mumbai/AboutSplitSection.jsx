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
              Trusted Ecommerce Website Development Company
              <span> in Mumbai </span>
            </h2>

            <p className={styles.description}>
              A successful ecommerce business depends on speed, security, and seamless shopping experiences. As a trusted ecommerce website development company in Mumbai, we build high-performance online stores designed to attract customers, drive sales, and scale with your business.
            </p>

            <p className={styles.description}>
              Our ecommerce developers in Mumbai create secure, conversion-focused ecommerce websites with smooth navigation, fast checkout, and reliable payment integration. Whether you need a new ecommerce store, a custom marketplace, or an upgrade to your existing platform, we focus on performance, usability, and long-term growth.
              Every ecommerce solution we deliver is built to handle traffic spikes, manage products efficiently, and support future expansion.
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
              alt="Ecommerce Website Development Company in Mumbai"
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
              <span>Build High-Converting Online Stores</span> <br />
              Ecommerce Website Development Company in Mumbai
            </h2>

            <p>
              Partner with a Mumbai-based ecommerce website development team that delivers secure, scalable, and conversion-driven online shopping platforms.
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
