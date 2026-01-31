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
              alt="Motion Graphic Service In Mumbai"
              className={styles.image}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className={styles.left1}>
            <h2 className={styles.heading}>
              Create High-Impact <span>Visual Designs with a Professional</span>{" "}
              Motion Graphic Service In Mumbai
            </h2>

            <p className={styles.description}>
              Partnering with a professional Motion Graphic Service In Mumbai
              helps businesses communicate their message clearly through
              creative and visually appealing designs. We focus on creating
              graphics that capture attention, strengthen brand identity, and
              support business communication.
            </p>

            <p className={styles.description}>
              From concept ideation and branding to marketing creatives, digital
              designs, and final assets, every stage is handled with creative
              clarity and design precision. Our Motion Graphic Service In Mumbai
              ensures consistency, visual balance, and alignment with your brand
              goals.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
