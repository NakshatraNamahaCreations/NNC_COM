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
              alt="2D Animation Service In Mumbai"
              className={styles.image}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className={styles.left1}>
            <h2 className={styles.heading}>
              Create High-Impact <span>2D Animated Videos with a Professional</span> 2D Animation Service In Mumbai
            </h2>

            <p className={styles.description}>
              Working with a professional 2D animation service in Mumbai helps
              businesses explain ideas clearly and engage their audience through
              simple yet visually compelling animations. We focus on creating
              2D animated content that makes complex information easy to
              understand.
            </p>

            <p className={styles.description}>
              From concept planning and illustration to animation and final
              delivery, every stage is handled with creative attention and
              technical precision. Our 2D animation process ensures consistent
              visuals, smooth motion, and messaging aligned with your brand
              objectives.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
