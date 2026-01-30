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
              Animated Video Creators 
              <span> In Mumbai </span>
            </h2>

            <p className={styles.description}>
              Animated videos have become one of the most effective ways for brands to explain ideas, promote products, and engage audiences. As experienced animated video creators in Mumbai, we help businesses communicate complex messages through clear, visually appealing animations that are easy to understand and remember.
            </p>

            <p className={styles.description}>
              From script development and storyboarding to animation and final delivery, our team creates high-quality animated videos that align with your brand goals. Whether you need explainer videos, motion graphics, or promotional animations, we focus on clarity, consistency, and creative storytelling.
            </p>
            <br />

            <a href="/contact-us" className={styles.cta}>
              Book Free Consultation <FaArrowRight color="#fff" size={16} />
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className={styles.right}>
            <img
              src="/media/tech/animate1.jpg"
              alt="Animated Video Creators In Mumbai"
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
              <span>Engaging Animated Videos</span> <br /> Animated Video Creators In Mumbai
            </h2>

            <p>
              Partner with professional animated video creators in Mumbai to produce engaging animations that simplify communication, strengthen brand identity, and support your marketing goals.
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
