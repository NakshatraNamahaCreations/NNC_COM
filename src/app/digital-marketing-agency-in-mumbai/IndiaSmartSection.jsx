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
              src="/media/tech/seo5.jpg"
              alt="Digital Marketing Agency in Mumbai – Strategy & Execution Process"
              className={styles.image}
            />
          </div>
        </div>

        {/* RIGHT – SCROLL CONTENT */}
        <div className={styles.right}>

          {/* CENTERED HEADER */}
          <div className={styles.header}>
            <h2 className={styles.heading}>
              Our Digital Marketing <span>Process in Mumbai</span>
            </h2>

            <p className={styles.subText}>
              As a trusted <strong>digital marketing agency in Mumbai</strong>, our process is built around strategy, performance, and measurable growth. From research and planning to execution, optimization, and reporting, we follow a structured workflow that helps businesses increase visibility, generate leads, and improve conversions.
            </p>
          </div>

          {/* STEPS */}
          <div className={styles.list}>

            <Step
              icon={<FaSearch />}
              title="Market Research & Strategy Planning"
              text="We start by understanding your business goals, target audience, competitors, and market trends. This research helps our digital marketing agency in Mumbai create a clear strategy aligned with your growth objectives."
            />

            <Step
              icon={<FaPencilRuler />}
              title="Campaign Planning & Creative Direction"
              text="Our team plans channel-wise campaigns including SEO, Google Ads, and social media marketing, while crafting creatives and messaging that connect with your audience."
            />

            <Step
              icon={<FaCode />}
              title="Campaign Execution & Channel Setup"
              text="We execute digital marketing campaigns using proven tools and best practices, ensuring proper setup, tracking, and optimization across all selected platforms."
            />

            <Step
              icon={<FaBug />}
              title="Performance Tracking & Optimization"
              text="Every campaign is continuously monitored and optimized using real-time data to improve engagement, conversions, and return on investment."
            />

            <Step
              icon={<FaRocket />}
              title="Scaling, Reporting & Ongoing Growth"
              text="As a long-term digital marketing agency in Mumbai, we scale successful campaigns, provide transparent reports, and refine strategies to support sustained business growth."
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
