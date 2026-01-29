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
              alt="Flutter App Development in Mumbai"
              className={styles.image}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className={styles.left1}>
            <h2 className={styles.heading}>
              Build Powerful <span>Flutter Apps With</span> Expert Developers in Mumbai
            </h2>

            <p className={styles.description}>
              Partner with a skilled team specializing in Flutter App Development in Mumbai that understands cross-platform technology and real business goals. Our developers build fast, responsive, and visually consistent Flutter applications using a single codebase for both Android and iOS.
            </p>

            <p className={styles.description}>
              From choosing the right Flutter architecture and planning core features to development, testing, and Play Store & App Store deployment, we manage the complete lifecycle. Our expertise in Flutter App Development in Mumbai ensures faster time-to-market, smooth performance, and long-term scalability.
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
