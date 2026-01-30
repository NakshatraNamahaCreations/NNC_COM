"use client";

import {
  FaSearch,
  FaPencilRuler,
  FaCode,
  FaBug,
  FaRocket,
} from "react-icons/fa";
import styles from "../../styles/IndiaSmart.module.css";

export default function TwoDAnimationServiceMumbai() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* LEFT – STICKY IMAGE */}
        <div className={styles.left}>
          <div className={styles.stickyImage}>
            <img
              src="/media/tech/corporate8.png"
              alt="2D Animation Service In Mumbai – Process Overview"
              className={styles.image}
            />
          </div>
        </div>

        {/* RIGHT – CONTENT */}
        <div className={styles.right}>

          {/* HEADER */}
          <div className={styles.header}>
            <h2 className={styles.heading}>
              Our 2D Animation Process as <span>2D Animation Service In Mumbai</span>
            </h2>

            <p className={styles.subText}>
              As a professional 2D animation service in Mumbai, we follow a
              structured and creative workflow to deliver engaging 2D animated
              videos. Each stage is carefully planned to ensure clarity,
              consistency, and effective visual communication.
            </p>
          </div>

          {/* STEPS */}
          <div className={styles.list}>
            <Step
              icon={<FaSearch />}
              title="Understanding Business Goals & Audience"
              text="We begin by understanding your business objectives, brand positioning, target audience, and communication goals to define the right 2D animation strategy."
            />

            <Step
              icon={<FaPencilRuler />}
              title="Concept Creation & Storyboarding"
              text="Our team develops 2D animation concepts, scripts, and storyboards that clearly outline the message, visual flow, and storytelling approach."
            />

            <Step
              icon={<FaCode />}
              title="2D Animation Design & Production"
              text="Using professional illustration and animation techniques, we bring concepts to life with visually appealing and easy-to-understand 2D animations."
            />

            <Step
              icon={<FaBug />}
              title="Review, Refinement & Quality Control"
              text="Each 2D animated video goes through detailed reviews and refinements to ensure smooth motion, visual consistency, and accurate representation."
            />

            <Step
              icon={<FaRocket />}
              title="Final Delivery & Ongoing 2D Animation Support"
              text="After approval, we deliver the final 2D animated video in required formats and provide support for updates, revisions, or future animation needs."
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
