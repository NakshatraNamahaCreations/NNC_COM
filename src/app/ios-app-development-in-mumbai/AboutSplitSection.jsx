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
             Trusted iOS App Development
              <span> in Mumbai</span>
            </h2>

            <p className={styles.description}>
              A successful iOS application is more than just clean code—it’s about
              delivering a refined, reliable experience that users trust every
              day. As a leading iOS App Development company in Mumbai, we build
              secure, high-performance, and visually polished applications that
              align with Apple’s design standards and real business goals.
            </p>

            <p className={styles.description}>
              Whether you’re a startup launching your first iPhone app or an
              enterprise enhancing an existing product, we transform your idea
              into a market-ready solution. From product strategy and UI/UX design
              to iOS development, testing, and App Store deployment, our iOS app
              development services in Mumbai are focused on scalability,
              performance, and long-term success.
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
              alt="iOS App Development in Mumbai"
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
            Your iOS App Development Partner in Mumbai
          </h2>

          <p>
            Turn your iOS app idea into a secure, scalable, and user-focused
            product with a Mumbai-based iOS development team committed to design
            quality, performance, and long-term business value.
          </p>

          <a href="/contact-us" className={styles.ctaBtn}>
            Book Free Call <FaArrowRight color="#fff" size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
