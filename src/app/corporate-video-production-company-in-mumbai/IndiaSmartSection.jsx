"use client";

import {
  FaSearch,
  FaPencilRuler,
  FaCode,
  FaBug,
  FaRocket,
} from "react-icons/fa";
import styles from "../../styles/IndiaSmart.module.css";

export default function CorporateVideoProductionMumbai() {
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
              As a professional corporate video production company in Mumbai, we
              follow a clear and structured process to create high-quality,
              business-focused videos. Each stage is planned to ensure clarity,
              consistency, and effective communication.
            </p>
          </div>

          {/* STEPS */}
          <div className={styles.list}>
            <Step
              icon={<FaSearch />}
              title="Understanding Brand & Communication Goals"
              text="We begin by understanding your brand, business objectives, target audience, and communication goals. This helps us define the video concept and messaging direction."
            />

            <Step
              icon={<FaPencilRuler />}
              title="Concept Planning & Storyboard Creation"
              text="Our team plans the video structure, storyline, and visual flow to ensure a clear message, smooth transitions, and engaging storytelling."
            />

            <Step
              icon={<FaCode />}
              title="Filming & Production Execution"
              text="We handle professional filming using the right equipment, lighting, and setups to capture high-quality visuals aligned with the planned concept."
            />

            <Step
              icon={<FaBug />}
              title="Editing, Review & Quality Checks"
              text="Each video goes through structured editing, color correction, sound balancing, and quality reviews to ensure a polished final output."
            />

            <Step
              icon={<FaRocket />}
              title="Final Delivery & Ongoing Support"
              text="After approval, we deliver the final video in required formats and provide ongoing support for updates, revisions, or future enhancements."
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
