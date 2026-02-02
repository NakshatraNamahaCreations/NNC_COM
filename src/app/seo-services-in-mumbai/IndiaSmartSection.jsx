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
              src="/media/tech/seo7.jpg"
              alt="SEO Services in Mumbai – SEO Process"
              className={styles.image}
            />
          </div>
        </div>

        {/* RIGHT – SCROLL CONTENT */}
        <div className={styles.right}>

          {/* CENTERED HEADER */}
          <div className={styles.header}>
            <h2 className={styles.heading}>
              Our SEO <span>Process in Mumbai</span>
            </h2>

            <p className={styles.subText}>
              As a professional <strong>SEO services company in Mumbai</strong>, our SEO process is designed to improve search rankings, increase organic traffic, and drive measurable business growth. From research and planning to optimization and ongoing improvements, we follow a structured workflow that delivers sustainable results.
            </p>
          </div>

          {/* STEPS */}
          <div className={styles.list}>

            <Step
              icon={<FaSearch />}
              title="Website Audit & Keyword Research"
              text="We start with a detailed website audit and in-depth keyword research to understand your current SEO performance, target audience, and competitive landscape in Mumbai."
            />

            <Step
              icon={<FaPencilRuler />}
              title="SEO Strategy & Content Planning"
              text="Based on research insights, we create a customized SEO strategy covering on-page optimization, content planning, and search intent alignment to improve visibility."
            />

            <Step
              icon={<FaCode />}
              title="On-Page & Technical SEO Implementation"
              text="Our team optimizes website structure, page speed, metadata, internal linking, and technical elements to ensure your site is search-engine friendly."
            />

            <Step
              icon={<FaBug />}
              title="Performance Tracking & Optimization"
              text="We continuously monitor keyword rankings, traffic trends, and user behavior to refine SEO strategies and maximize results over time."
            />

            <Step
              icon={<FaRocket />}
              title="Growth, Reporting & Ongoing SEO Support"
              text="As a long-term SEO partner in Mumbai, we provide regular performance reports, ongoing optimization, and strategic improvements to sustain growth."
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
