"use client";

import {
  FaSearch,
  FaPencilRuler,
  FaCode,
  FaBug,
  FaRocket,
} from "react-icons/fa";
import styles from "../../styles/IndiaSmart.module.css";

export default function GraphicDesignCompanyMumbai() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT – STICKY IMAGE */}
        <div className={styles.left}>
          <div className={styles.stickyImage}>
            <img
              src="/media/tech/corporate8.png"
              alt="Graphic Design Company In Mumbai – Design Process Overview"
              className={styles.image}
            />
          </div>
        </div>

        {/* RIGHT – CONTENT */}
        <div className={styles.right}>
          {/* HEADER */}
          <div className={styles.header}>
            <h2 className={styles.heading}>
              Our Graphic Design Process {" "}
              <span>In Mumbai</span>
            </h2>

            <p className={styles.subText}>
              As a professional graphic design company in Mumbai, we follow a
              structured and creative design workflow to deliver visually
              impactful and brand-focused design solutions. Each stage is
              carefully planned to ensure clarity, consistency, and strong
              visual communication.
            </p>
          </div>

          {/* STEPS */}
          <div className={styles.list}>
            <Step
              icon={<FaSearch />}
              title="Understanding Business Goals & Brand Vision"
              text="We begin by understanding your business objectives, brand identity, target audience, and communication goals to define the right graphic design approach."
            />

            <Step
              icon={<FaPencilRuler />}
              title="Concept Development & Creative Direction"
              text="Our designers develop creative concepts, layouts, and visual directions that clearly communicate your message and align with your brand identity."
            />

            <Step
              icon={<FaCode />}
              title="Design Creation & Visual Execution"
              text="Using professional design tools and best practices, we create visually engaging graphics that are clear, balanced, and optimized for digital and print use."
            />

            <Step
              icon={<FaBug />}
              title="Review, Refinement & Quality Assurance"
              text="Every design goes through structured reviews and refinements to ensure visual consistency, accuracy, and alignment with your expectations."
            />

            <Step
              icon={<FaRocket />}
              title="Final Delivery & Ongoing Design Support"
              text="After approval, we deliver final design assets in required formats and provide ongoing support for updates, revisions, or future design needs."
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
