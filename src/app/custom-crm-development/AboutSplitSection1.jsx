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
              alt="Custom CRM Development Company"
              className={styles.image}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className={styles.left1}>
            <h2 className={styles.heading}>
              Build Business-Focused Systems <span>with Custom CRM Development</span>
            </h2>

            <p className={styles.description}>
              A custom CRM system allows businesses to manage leads, customer data, and sales activities in a way that matches their exact workflow. By replacing manual processes with structured automation, teams can respond faster, reduce errors, and maintain consistent communication across every stage of the customer journey.
            </p>

            <p className={styles.description}>
              As a custom CRM development company, we build scalable systems designed around real business needs. Our focus is on creating reliable CRM platforms that improve team productivity, simplify operations, and support long-term business growth.
            </p>

            {/* CTA */}
            <a href="/contact-us" className={styles.cta}>
              Book Free Consultation <FaArrowRight color="#fff" size={16} />
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
