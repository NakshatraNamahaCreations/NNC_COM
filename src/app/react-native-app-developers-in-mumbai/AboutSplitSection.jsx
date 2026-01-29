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
              alt="React Native Mobile App Development in Mumbai"
              className={styles.image}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className={styles.left1}>
            <h2 className={styles.heading}>
              Build Powerful <span>React Native Apps With</span> Expert Developers in Mumbai
            </h2>

            <p className={styles.description}>
              Partner with an experienced team specializing in <strong>React Native Mobile App Development in Mumbai</strong> that understands cross-platform performance and real business needs. Our developers build fast, scalable, and reliable mobile applications using a single codebase for both Android and iOS.
            </p>

            <p className={styles.description}>
              From selecting the right React Native architecture and planning core features to development, testing, and Play Store & App Store deployment, we manage the complete development lifecycle. Our expertise in <strong>React Native Mobile App Development in Mumbai</strong> ensures faster releases, smooth performance, and long-term scalability.
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
