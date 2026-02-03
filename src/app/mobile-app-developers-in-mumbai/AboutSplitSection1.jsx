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
              alt="Mobile App Developers in Mumbai"
              className={styles.image}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className={styles.left1}>
            <h2 className={styles.heading}>
              Work With Experienced <span>Mobile App Developers</span> in Mumbai
            </h2>

            <p className={styles.description}>
              Choosing the right mobile app developers in Mumbai means working with a team that understands both technology and business needs. Our developers build mobile applications that are fast, secure, and easy to use, ensuring reliable performance across Android devices and user environments.
            </p>

            <p className={styles.description}>
              From defining app requirements and selecting the right tech stack to development, testing, and optimization, we handle the complete mobile app development process. Our mobile app developers in Mumbai focus on building scalable, real-world applications that are ready for deployment and future growth.
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
