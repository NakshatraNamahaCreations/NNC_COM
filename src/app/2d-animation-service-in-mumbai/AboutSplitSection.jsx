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
              2D Animation Service
              <span> In Mumbai </span>
            </h2>

            <p className={styles.description}>
              2D animation is one of the most effective ways for businesses to
              explain ideas, promote products, and connect with their audience.
              As a professional 2D animation service provider in Mumbai, we help
              brands communicate messages through simple, engaging, and visually
              appealing animations.
            </p>

            <p className={styles.description}>
              From concept development and storyboarding to illustration,
              animation, and final delivery, our team creates high-quality 2D
              animated videos that support your communication and marketing
              goals. Whether it’s an explainer video, promotional animation, or
              brand story, we focus on clarity, consistency, and storytelling.
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
              alt="2D Animation Service In Mumbai"
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
              <span>Engaging 2D Animated Videos</span> <br /> 2D Animation Service In Mumbai
            </h2>

            <p>
              Work with a Mumbai-based 2D animation team to create engaging
              animated videos that simplify communication, enhance brand
              identity, and support your marketing objectives.
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
