"use client";
import { FaArrowRight } from "react-icons/fa";
import styles from "../../styles/aboutSplit.module.css";

export default function AboutSplitSection1() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container1}>

          {/* LEFT IMAGE */}
          <div className={styles.right1}>
            <img
              src="/media/tech/animate4.jpg"
              alt="Animated Video Creators In Mumbai"
              className={styles.image}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className={styles.left1}>
            <h2 className={styles.heading}>
              Create High-Impact <span>Animated Videos with Professional</span> Animated Video Creators In Mumbai
            </h2>

            <p className={styles.description}>
              Collaborating with experienced animated video creators in Mumbai helps businesses communicate ideas in a clear, engaging, and visually compelling way. We specialize in creating animations that simplify complex messages while keeping viewers interested from start to finish.
            </p>

            <p className={styles.description}>
              From concept development and storyboarding to animation and final delivery, every stage is handled with precision and creative focus. Our animation process ensures your videos remain visually consistent, easy to understand, and aligned with your brand’s communication objectives.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
