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
        src="/media/tech/website-mumbai10.png"
        alt="Mobile App Development"
        className={styles.image}
      />
    </div>

    {/* RIGHT CONTENT */}
  <div className={styles.left1}>
  <h2 className={styles.heading}>
    Build High-Performance <span>Websites With Experienced </span> Developers in Mumbai
  </h2>

  <p className={styles.description}>
    By partnering with our team of website developers in Mumbai, you work with professionals who understand not just technology, but also business goals, user behavior, and long-term scalability. We focus on building websites that support your objectives while delivering clear, intuitive user experiences.
  </p>

  <p className={styles.description}>
    Our process covers everything from selecting the right technology stack and planning site structure to development, testing, and launch. We ensure your website performs smoothly across devices and browsers, and is built to handle real-world usage as well as future growth.
  </p>
</div>


  </div>
</section>

    
    </>
  );
}
