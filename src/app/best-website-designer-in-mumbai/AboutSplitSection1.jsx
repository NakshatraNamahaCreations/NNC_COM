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
              alt="Best Website Designer in Mumbai"
              className={styles.image}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className={styles.left1}>
            <h2 className={styles.heading}>
              Build High-Impact <span>Websites with the Best</span> Website Designer in Mumbai
            </h2>

            <p className={styles.description}>
              Choosing the best website designer in Mumbai means working with a team that understands design, user behavior, and brand positioning. We create visually refined websites that leave a strong first impression and build instant credibility.
            </p>

            <p className={styles.description}>
              From layout planning and visual hierarchy to responsive design and usability optimization, every detail is carefully crafted. Our design-first approach ensures your website looks professional, works seamlessly across devices, and supports long-term business growth.
            </p>

            {/* CTA */}
            <a href="/contact-us" className={styles.cta}>
              Book Free Design Consultation <FaArrowRight color="#fff" size={16} />
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
