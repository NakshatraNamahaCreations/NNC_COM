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
              alt="Animated video creation process in Mumbai"
              className={styles.image}
            />
          </div>
        </div>

        {/* RIGHT – CONTENT */}
        <div className={styles.right}>

          {/* HEADER */}
          <div className={styles.header}>
            <h2 className={styles.heading}>
              Our Animated Video <span>Creation Process in Mumbai</span>
            </h2>

            <p className={styles.subText}>
              As experienced animated video creators in Mumbai, we follow a
              structured and creative process to produce visually engaging
              animations. Each stage is designed to ensure clarity, consistency,
              and effective communication.
            </p>
          </div>

          {/* STEPS */}
          <div className={styles.list}>
            <Step
              icon={<FaSearch />}
              title="Understanding Brand, Audience & Objectives"
              text="We start by understanding your brand identity, business goals, target audience, and communication requirements to define the right animation approach."
            />

            <Step
              icon={<FaPencilRuler />}
              title="Concept Development & Storyboarding"
              text="Our team develops animation concepts, scripts, and storyboards that outline the visual flow, key messages, and storytelling structure."
            />

            <Step
              icon={<FaCode />}
              title="Animation & Visual Production"
              text="We create high-quality animations using professional design and motion techniques to bring concepts to life with clarity and visual appeal."
            />

            <Step
              icon={<FaBug />}
              title="Review, Refinement & Quality Checks"
              text="Each animated video goes through structured reviews, refinements, and quality checks to ensure smooth motion, visual consistency, and accuracy."
            />

            <Step
              icon={<FaRocket />}
              title="Final Delivery & Ongoing Support"
              text="Once approved, we deliver the final animated video in required formats and provide support for revisions, updates, or future animation needs."
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
