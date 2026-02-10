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
              alt="Best Website Design and Development In Mumbai"
              className={styles.image}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className={styles.left1}>
            <h2 className={styles.heading}>
             Improve Customer Relationships <span>with a Structured CRM System </span>
            </h2>

            <p className={styles.description}>
             A well-designed CRM system helps businesses respond faster, manage leads efficiently, and build stronger long-term customer relationships. By organizing customer data and automating workflows, teams can focus on communication, sales, and growth instead of manual processes.
            </p>

            <p className={styles.description}>
              Our CRM solutions are designed to simplify operations while improving conversion rates and customer experience. Every implementation focuses on usability, scalability, and measurable improvement in business performance.
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
