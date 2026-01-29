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
              alt="Android App Development in Mumbai"
              className={styles.image}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className={styles.left1}>
            <h2 className={styles.heading}>
              Build Powerful <span>Android Apps With</span> Expert Developers in Mumbai
            </h2>

            <p className={styles.description}>
              Partner with a skilled team specializing in Android App Development in Mumbai that understands both technology and business goals. Our developers create Android applications that are fast, secure, and user-friendly, designed to perform consistently across multiple devices and Android versions.
            </p>

            <p className={styles.description}>
              From selecting the right Android tech stack and planning core features to coding, testing, and optimization, we manage the complete development lifecycle. Our expertise in Android App Development in Mumbai ensures your app is ready for real-world usage, Google Play Store deployment, and future scalability as your user base grows.
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
