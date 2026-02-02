"use client";
import { FaArrowRight } from "react-icons/fa";
import styles from "../../styles/aboutSplit.module.css";

export default function AboutSplitSection() {
  return (
    <>
      <section className={styles.section} style={{ padding: "10px 0" }}>
        <div className={styles.container}>

          {/* LEFT CONTENT */}
       <div className={styles.left}>
  <h2 className={styles.heading}>
    Professional Website Design and Development
    <span> In Mumbai </span>
  </h2>

  <p className={styles.description}>
    We offer professional website design and development in Mumbai for
    businesses that want a strong, reliable, and modern online presence.
    Our websites are designed to load fast, look great on every screen,
    and provide a smooth user experience that keeps visitors engaged.
  </p>

  <p className={styles.description}>
    From UI/UX planning and responsive design to backend development and
    performance optimization, every website is built with scalability,
    security, and future growth in mind. Whether you need a business
    website, ecommerce platform, or CMS-based solution, we develop websites
    that support real business goals.
  </p>

  <br />

  <a href="/contact-us" className={styles.cta}>
    Book Free Consultation <FaArrowRight color="#fff" size={16} />
  </a>
</div>


          {/* RIGHT IMAGE */}
          <div className={styles.right}>
            <img
              src="/media/tech/website-mumbai9.png"
              alt="Best Website Design and Development In Mumbai"
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
  <span>Design & Development </span> <br />
  That Perform Website Design & Development In Mumbai
</h2>

            <p>
              Work with a Mumbai-based website design and development team
              focused on performance, usability, and business growth.
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
