"use client";

import {
  FaSearch,
  FaPencilRuler,
  FaCode,
  FaBug,
  FaRocket,
} from "react-icons/fa";
import styles from "../../styles/IndiaSmart.module.css";

export default function CorporateFilmMakersMumbai() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* LEFT – STICKY IMAGE */}
        <div className={styles.left}>
          <div className={styles.stickyImage}>
            <img
              src="/media/tech/corporate8.png"
              alt="Corporate Film Making Process in Mumbai"
              className={styles.image}
            />
          </div>
        </div>

        {/* RIGHT – CONTENT */}
        <div className={styles.right}>

          {/* HEADER */}
          <div className={styles.header}>
            <h2 className={styles.heading}>
              Our Corporate Film <span>Making Process in Mumbai</span>
            </h2>

            <p className={styles.subText}>
              As experienced corporate film makers in Mumbai, we follow a clear
              and structured film-making process to create professional corporate
              films. Each stage is planned to ensure clarity, consistency, and
              effective storytelling.
            </p>
          </div>

          {/* STEPS */}
          <div className={styles.list}>
            <Step
              icon={<FaSearch />}
              title="Understanding Brand & Film Objectives"
              text="We begin by understanding your brand, business goals, target audience, and communication objectives to define the film’s purpose and direction."
            />

            <Step
              icon={<FaPencilRuler />}
              title="Concept Development & Storyboarding"
              text="Our team develops the film concept, script, and storyboard to ensure a clear narrative, smooth flow, and engaging visual storytelling."
            />

            <Step
              icon={<FaCode />}
              title="Professional Filming & Production"
              text="We manage filming using professional cameras, lighting, and setups to capture high-quality visuals that align with the approved concept."
            />

            <Step
              icon={<FaBug />}
              title="Editing, Sound & Quality Review"
              text="Each corporate film goes through structured editing, color correction, sound design, and quality checks to deliver a polished final film."
            />

            <Step
              icon={<FaRocket />}
              title="Final Film Delivery & Support"
              text="After approval, we deliver the final corporate film in required formats and provide ongoing support for updates, revisions, or future edits."
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
