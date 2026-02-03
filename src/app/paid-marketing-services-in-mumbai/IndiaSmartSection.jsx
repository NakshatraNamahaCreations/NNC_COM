"use client";
import {
  FaSearch,
  FaPencilRuler,
  FaCode,
  FaBug,
  FaRocket,
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
              src="/media/tech/seo5.jpg"
              alt="Paid Marketing Services in Mumbai – Campaign Strategy and Execution Process"
              className={styles.image}
            />
          </div>
        </div>

        {/* RIGHT – SCROLL CONTENT */}
        <div className={styles.right}>

          {/* CENTERED HEADER */}
          <div className={styles.header}>
            <h2 className={styles.heading}>
              Our Paid Marketing <span>Process in Mumbai</span>
            </h2>

            <p className={styles.subText}>
              As a performance-focused <strong>paid marketing agency in Mumbai</strong>, our process is designed to generate qualified leads, control ad spend, and maximize ROI. From research and planning to execution, optimization, and reporting, we follow a proven workflow that drives measurable results through paid advertising.
            </p>
          </div>

          {/* STEPS */}
          <div className={styles.list}>

            <Step
              icon={<FaSearch />}
              title="Audience Research & Campaign Strategy"
              text="We begin by analyzing your business goals, target audience, competitors, and platform data. This research helps us build a paid marketing strategy aligned with conversions and profitability."
            />

            <Step
              icon={<FaPencilRuler />}
              title="Ad Planning & Creative Development"
              text="Our team plans platform-specific paid campaigns across Google Ads, Meta Ads, and display networks, while designing high-converting ad creatives and messaging."
            />

            <Step
              icon={<FaCode />}
              title="Campaign Setup & Conversion Tracking"
              text="We set up paid marketing campaigns with proper targeting, bidding strategies, conversion tracking, and analytics to ensure accurate performance measurement."
            />

            <Step
              icon={<FaBug />}
              title="Continuous Optimization & Budget Control"
              text="Every campaign is monitored daily and optimized through bid adjustments, audience refinement, and A/B testing to improve conversions and reduce cost per lead."
            />

            <Step
              icon={<FaRocket />}
              title="Scaling, Reporting & Performance Growth"
              text="As a long-term paid marketing partner in Mumbai, we scale winning campaigns, provide transparent performance reports, and refine strategies to drive consistent growth."
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
