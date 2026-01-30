"use client";
import {
  FaSearch,
  FaPencilRuler,
  FaCode,
  FaBug,
  FaRocket,
  FaTools,
} from "react-icons/fa";
import styles from "../../styles/IndiaSmart.module.css";

export default function IndiaSmartSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* LEFT – STICKY IMAGE */}
        <div className={styles.left}>
          <div className={styles.stickyImage}>
            <img
              src="/media/tech/website-mumbai5.png"
              alt="Ecommerce Website Development Company in Mumbai – Development Process"
              className={styles.image}
            />
          </div>
        </div>

        {/* RIGHT – SCROLL CONTENT */}
        <div className={styles.right}>

          {/* CENTERED HEADER */}
          <div className={styles.header}>
            <h2 className={styles.heading}>
              Our Ecommerce <span>Website Development Process in Mumbai</span>
            </h2>

            <p className={styles.subText}>
              As a trusted <strong>ecommerce website development company in Mumbai</strong>, our process is focused on building secure, scalable, and conversion-driven online stores. From planning and store structure to development, testing, and ongoing support, we follow a structured workflow that ensures smooth selling and long-term business growth.
            </p>
          </div>

          {/* STEPS */}
          <div className={styles.list}>

            <Step
              icon={<FaSearch />}
              title="Requirement Analysis & Store Planning"
              text="We begin by understanding your business model, products, target audience, and selling goals. This discovery phase helps our ecommerce website development company in Mumbai define the right platform, features, and store structure."
            />

            <Step
              icon={<FaPencilRuler />}
              title="Ecommerce UI/UX & Store Design"
              text="Our team designs user-friendly ecommerce layouts with clear navigation, engaging product pages, and optimized checkout flows to improve conversions."
            />

            <Step
              icon={<FaCode />}
              title="Ecommerce Website Development"
              text="Using reliable ecommerce technologies and best practices, we develop fast, secure, and scalable online stores with smooth product management and payment integration."
            />

            <Step
              icon={<FaBug />}
              title="Testing & Quality Assurance"
              text="Each ecommerce website undergoes thorough testing for performance, security, responsiveness, and checkout functionality before launch."
            />

            <Step
              icon={<FaRocket />}
              title="Launch & Ongoing Support"
              text="As a long-term ecommerce website development company in Mumbai, we provide continuous support including updates, performance monitoring, security checks, and feature enhancements."
            />

          </div>
        </div>
      </div>
    </section>
  );
}

/* STEP COMPONENT */
function Step({ icon, title, text }) {
  return (
    <div className={styles.item}>
      <div className={styles.iconBox}>{icon}</div>
      <div>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}
