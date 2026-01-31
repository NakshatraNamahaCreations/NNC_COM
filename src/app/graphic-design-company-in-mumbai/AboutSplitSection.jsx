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
            Trusted   Graphic Design Company <br/>
              <span> In Mumbai </span>
            </h2>

            <p className={styles.description}>
              A strong visual identity plays a major role in how customers
              perceive your brand. As a professional graphic design company in
              Mumbai, we help businesses create visually appealing designs that
              communicate clearly and leave a lasting impression.
            </p>

            <p className={styles.description}>
              From logo design and branding to marketing creatives, social media
              graphics, brochures, and digital assets, our designers focus on
              consistency, creativity, and brand alignment. Every design is
              created to support your business goals and strengthen your brand
              presence.
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
              alt="Graphic Design Company In Mumbai"
              className={styles.image}
            />
          </div>

        </div>
      </section>

      <section
        className={styles.ctaWrapper}
        style={{
          backgroundImage: "url('/media/tech/banner34.png')",
        }}
      >
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <div className={styles.content}>
            <h2>
              <span>Creative Graphic Design Solutions</span> <br />
              Graphic Design Company In Mumbai
            </h2>

            <p>
              Partner with a Mumbai-based graphic design team to create impactful
              visuals that enhance brand recognition, improve communication, and
              support your marketing and business objectives.
            </p>
          </div>

          <a href="/contact-us" className={styles.ctaBtn}>
            Book Free Call <FaArrowRight color="#fff" size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
