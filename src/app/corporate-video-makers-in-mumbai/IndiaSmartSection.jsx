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
              alt="Corporate Video Production Process in Mumbai"
              className={styles.image}
            />
          </div>
        </div>

        {/* RIGHT – CONTENT */}
        <div className={styles.right}>

          {/* HEADER */}
          <div className={styles.header}>
            <h2 className={styles.heading}>
              Our Corporate Video <span>Production Process in Mumbai</span>
            </h2>

            <p className={styles.subText}>
              As professional corporate video makers in Mumbai, we follow a
              structured and transparent production process to create impactful
              corporate videos. Each stage is designed to ensure clarity,
              consistency, and effective visual communication.
            </p>
          </div>

          {/* STEPS */}
          <div className={styles.list}>
            <Step
              icon={<FaSearch />}
              title="Understanding Brand & Video Objectives"
              text="We start by understanding your brand identity, business goals, target audience, and communication needs to define the purpose and direction of the corporate video."
            />

            <Step
              icon={<FaPencilRuler />}
              title="Concept Development & Script Planning"
              text="Our team develops the video concept, script, and visual flow to ensure a clear message, strong storytelling, and engaging structure."
            />

            <Step
              icon={<FaCode />}
              title="Professional Video Shoot & Production"
              text="We handle the complete video shoot using professional equipment, lighting, and setups to capture high-quality visuals aligned with the approved concept."
            />

            <Step
              icon={<FaBug />}
              title="Editing, Sound Design & Quality Review"
              text="Each corporate video goes through detailed editing, color correction, sound mixing, and quality checks to deliver a polished and professional output."
            />

            <Step
              icon={<FaRocket />}
              title="Final Video Delivery & Ongoing Support"
              text="After approval, we deliver the final corporate video in required formats and provide support for revisions, updates, or future enhancements."
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
