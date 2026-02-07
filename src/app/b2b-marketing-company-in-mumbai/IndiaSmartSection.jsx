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
              As a result-driven <strong>B2B marketing company in Mumbai</strong>, we follow
              a structured and data-focused process designed to generate qualified
              leads, nurture prospects, and support long B2B sales cycles with
              measurable business outcomes.
            </p>
          </div>

          {/* STEPS */}
          <div className={styles.list}>
            <Step
              icon={<FaSearch />}
              title="Business, Market & Buyer Research"
              text="We begin by understanding your business model, target industries, buyer personas, competitors, and sales objectives to build a focused and practical B2B marketing strategy."
            />

            <Step
              icon={<FaPencilRuler />}
              title="B2B Strategy & Campaign Planning"
              text="Our team plans campaigns across SEO, LinkedIn Ads, Google Ads, and content marketing, aligning marketing activities with your sales funnel and target accounts."
            />

            <Step
              icon={<FaCode />}
              title="Campaign Execution & Channel Setup"
              text="We execute campaigns with proper tracking, CRM integration, and platform setup to ensure accurate lead capture, performance measurement, and campaign efficiency."
            />

            <Step
              icon={<FaBug />}
              title="Performance Monitoring & Optimization"
              text="Campaigns are continuously monitored and optimized based on lead quality, engagement levels, conversion data, and return on investment to improve results over time."
            />

            <Step
              icon={<FaRocket />}
              title="Scaling, Reporting & Growth Support"
              text="Once campaigns perform consistently, we scale successful strategies, provide detailed reports, and refine marketing efforts to support sustained B2B business growth."
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
