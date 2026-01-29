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
              src="/media/tech/25.png"
              alt="iOS App Development in Mumbai"
              className={styles.image}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className={styles.left1}>
            <h2 className={styles.heading}>
              Build Powerful <span>iOS Apps With</span> Expert Developers in Mumbai
            </h2>

            <p className={styles.description}>
              Partner with an experienced team specializing in iOS App Development in Mumbai that understands both Apple’s ecosystem and your business goals. Our developers build fast, secure, and user-friendly iOS applications designed to deliver smooth performance on iPhones and iPads.
            </p>

            <p className={styles.description}>
              From selecting the right iOS tech stack and planning core features to coding, testing, and App Store optimization, we manage the complete development lifecycle. Our expertise in iOS App Development in Mumbai ensures your app is ready for real-world usage, successful App Store deployment, and long-term scalability.
            </p>

            {/* <button className={styles.cta}>
              Book Free Consultation <FaArrowRight color="#fff" size={16} />
            </button> */}
          </div>

        </div>
      </section>
    </>
  );
}
