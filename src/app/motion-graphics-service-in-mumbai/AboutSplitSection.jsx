"use client";
import { FaArrowRight } from "react-icons/fa";
import styles from "../../styles/aboutSplit.module.css";

export default function AboutSplitSection() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>

          {/* LEFT CONTENT */}
          <div className={styles.left}>
            <h2 className={styles.heading}>
             Trusted Motion Graphic Service <span>In Mumbai</span>
            </h2>

            <p className={styles.description}>
              A strong visual identity plays a major role in how customers
              perceive your brand. As a professional Motion Graphic Service In
              Mumbai, we help businesses create visually appealing designs that
              communicate clearly and leave a lasting impression.
            </p>

            <p className={styles.description}>
              From logo design and branding to marketing creatives, social media
              graphics, brochures, and digital assets, our Motion Graphic Service
              In Mumbai focuses on consistency, creativity, and strong brand
              alignment to support your business goals.
            </p>

            <br />

            <a href="/contact-us" className={styles.cta}>
              Book Free Consultation <FaArrowRight color="#fff" size={16} />
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className={styles.right}>
            <img
              src="/media/tech/graphic1.png"
              alt="Motion Graphic Service In Mumbai"
              className={styles.image}
            />
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section
        className={styles.ctaWrapper}
        style={{
          backgroundImage: "url('/media/tech/banner34.png')",
        }}
      >
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <h2>
            <span>Creative Graphic Design Solutions</span> <br />
            Motion Graphic Service In Mumbai
          </h2>

          <p>
            Partner with a trusted Motion Graphic Service In Mumbai to create
            impactful visuals that improve brand recognition, strengthen
            communication, and support your marketing and business objectives.
          </p>

          <a href="/contact-us" className={styles.ctaBtn}>
            Book Free Call <FaArrowRight color="#fff" size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
