"use client";

import {
  FaSearch,
  FaPencilRuler,
  FaCode,
  FaBug,
  FaRocket,
} from "react-icons/fa";
import styles from "../../styles/IndiaSmart.module.css";

export default function AnimatedVideoCreatorsMumbai() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* LEFT – STICKY IMAGE */}
        <div className={styles.left}>
          <div className={styles.stickyImage}>
            <img
              src="/media/tech/corporate8.png"
              alt="B2B marketing strategy and lead generation process in Mumbai"
              className={styles.image}
            />
          </div>
        </div>

        {/* RIGHT – CONTENT */}
        <div className={styles.right}>

          {/* HEADER */}
          <div className={styles.header}>
            <h2 className={styles.heading}>
              Our B2B Marketing <span>Process in Mumbai</span>
            </h2>

            <p className={styles.subText}>
              As a result-driven <strong>B2B marketing agency in Mumbai</strong>, we follow
              a structured, data-backed process focused on generating qualified leads,
              nurturing prospects, and supporting long sales cycles with measurable
              outcomes.
            </p>
          </div>

          {/* STEPS */}
          <div className={styles.list}>
            <Step
              icon={<FaSearch />}
              title="Business, Market & Buyer Research"
              text="We begin by understanding your business model, target industries, buyer personas, competitors, and sales objectives to build a focused B2B marketing strategy."
            />

            <Step
              icon={<FaPencilRuler />}
              title="B2B Strategy & Campaign Planning"
              text="Our team plans B2B campaigns across SEO, LinkedIn Ads, Google Ads, and content marketing, aligned with your sales funnel and account priorities."
            />

            <Step
              icon={<FaCode />}
              title="Campaign Execution & Channel Setup"
              text="We execute B2B marketing campaigns with proper tracking, CRM alignment, and platform setup to ensure accurate lead capture and performance measurement."
            />

            <Step
              icon={<FaBug />}
              title="Performance Monitoring & Optimization"
              text="Each campaign is continuously monitored and optimized based on lead quality, engagement, conversion rates, and ROI to improve results over time."
            />

            <Step
              icon={<FaRocket />}
              title="Scaling, Reporting & Growth Support"
              text="Once campaigns perform well, we scale winning strategies, provide detailed reports, and refine approaches to drive consistent B2B growth."
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
