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
              src="/media/tech/corporate8.png"
              alt="Social Media Marketing In Mumbai – Process Overview"
              className={styles.image}
            />
          </div>
        </div>

        {/* RIGHT – CONTENT */}
        <div className={styles.right}>
          {/* HEADER */}
          <div className={styles.header}>
            <h2 className={styles.heading}>
              Our Process as{" "}
              <span>Social Media Marketing In Mumbai</span>
            </h2>

            <p className={styles.subText}>
              As a professional Social Media Marketing In Mumbai, we follow a
              structured and creative workflow to deliver impactful,
              brand-focused marketing solutions. Each stage is carefully
              planned to ensure clarity, consistency, and strong communication.
            </p>
          </div>

          {/* STEPS */}
          <div className={styles.list}>
            <Step
              icon={<FaSearch />}
              title="Understanding Business Goals & Brand Vision"
              text="We begin by understanding your business objectives, brand identity, target audience, and communication goals to define the right social media marketing approach."
            />

            <Step
              icon={<FaPencilRuler />}
              title="Strategy Planning & Creative Direction"
              text="Our team develops content strategies, creative directions, and campaign plans that clearly communicate your message and align with your brand identity."
            />

            <Step
              icon={<FaCode />}
              title="Content Creation & Campaign Execution"
              text="Using proven tools and best practices, we create and execute engaging social media content that is optimized for reach, engagement, and conversions."
            />

            <Step
              icon={<FaBug />}
              title="Review, Optimization & Performance Tracking"
              text="Every campaign goes through continuous reviews and optimizations to ensure performance accuracy, consistency, and alignment with your marketing goals."
            />

            <Step
              icon={<FaRocket />}
              title="Reporting, Scaling & Ongoing Support"
              text="After launch, we provide performance reports, scale successful campaigns, and offer ongoing support to drive long-term growth."
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
