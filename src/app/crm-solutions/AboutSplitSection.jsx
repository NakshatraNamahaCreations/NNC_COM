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
            <h1 className={styles.heading}>
              CRM Solutions & Customer Relationship
              <span> Management Services </span>
            </h1>

            <p className={styles.description}>
            Manage leads better, improve customer relationships, and streamline your sales and support processes with professional CRM solutions designed to help businesses grow faster and operate more efficiently.
            </p>

             <p className={styles.description}>
            Our CRM services focus on helping businesses improve lead management, automate workflows, and create better visibility across sales, marketing, and customer support teams. Whether you want to improve follow-ups, track customer journeys, or automate communication, we build CRM systems that support real business outcomes.
            </p>
            <br />

            <a href="/contact-us" className={styles.cta}>
              Book Free Consultation <FaArrowRight color="#fff" size={16} />
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className={styles.right}>
            <img
              src="/media/tech/crm2.png"
              alt="Corporate Film Makers in Mumbai"
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
    <span>Systems That Build Relationships</span> <br /> CRM Solutions & Customer Relationship Management Services
  </h2>

  <p>
    Partner with CRM experts focused on building reliable systems that help businesses manage customer interactions, improve sales processes, and support consistent business growth.
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
