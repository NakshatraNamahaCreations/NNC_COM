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
              Custom CRM Development 
              <span> Designed for Sales Growth </span> & Business Efficiency
            </h2>

            <p className={styles.description}>
          Modern businesses require systems that align with their processes rather than forcing teams to adapt to predefined tools. Custom CRM development allows businesses to build customer management platforms that match their workflows, sales cycles, and operational requirements.
             </p>

              <p className={styles.description}>
          Our crm development services focus on helping businesses organize customer data, track interactions, manage opportunities, and improve communication across teams. By bringing sales, marketing, and customer support together into one structured environment, businesses gain better visibility and control over customer engagement.
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
    <span>Systems Built Around Your Business</span> <br /> Custom CRM Development Company
  </h2>

  <p>
    Partner with a custom CRM development company focused on building scalable systems that help businesses manage customer data, streamline workflows, and improve sales and communication processes.
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
