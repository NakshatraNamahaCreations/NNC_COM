"use client";

import {
  FaSearch,
  FaPencilRuler,
  FaCode,
  FaBug,
  FaRocket,
} from "react-icons/fa";
import styles from "../../styles/IndiaSmart.module.css";

export default function BestWebsiteDesignerMumbai() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* LEFT – STICKY IMAGE */}
        <div className={styles.left}>
          <div className={styles.stickyImage}>
            <img
              src="/media/tech/website-mumbai5.png"
              alt="Best Website Designer in Mumbai Process"
              className={styles.image}
            />
          </div>
        </div>

        {/* RIGHT – CONTENT */}
        <div className={styles.right}>

          {/* HEADER */}
          <div className={styles.header}>
            <h2 className={styles.heading}>
              Our Website <span>Design Process in Mumbai</span>
            </h2>

            <p className={styles.subText}>
              As one of the best website designers in Mumbai, we follow a
              structured and thoughtful design process to create visually
              striking, user-friendly, and conversion-focused websites. Each
              step is carefully planned to ensure clarity, consistency, and
              long-term value for your business.
            </p>
          </div>

          {/* STEPS */}
          <div className={styles.list}>
            <Step
              icon={<FaSearch />}
              title="Understanding Business & Brand Vision"
              text="We begin by understanding your business goals, brand identity, target audience, and market positioning. This helps us create a design direction that aligns with your brand and business objectives."
            />

            <Step
              icon={<FaPencilRuler />}
              title="Website Structure & UX Planning"
              text="Our design team plans the website structure, page hierarchy, and user journey to ensure intuitive navigation, clear content flow, and an engaging user experience."
            />

            <Step
              icon={<FaCode />}
              title="High-Quality Visual & UI Design"
              text="We design modern, responsive layouts with attention to typography, color, spacing, and visual hierarchy—ensuring your website looks professional and performs seamlessly across devices."
            />

            <Step
              icon={<FaBug />}
              title="Design Review & Quality Assurance"
              text="Every website design is reviewed for visual consistency, responsiveness, and usability across browsers and screen sizes to deliver a polished, high-quality final output."
            />

            <Step
              icon={<FaRocket />}
              title="Launch & Ongoing Design Support"
              text="After launch, we continue to support your website with design updates, enhancements, and improvements to keep it fresh, relevant, and aligned with your evolving business needs."
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
