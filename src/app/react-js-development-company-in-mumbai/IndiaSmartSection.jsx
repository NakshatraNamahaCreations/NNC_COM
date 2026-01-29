"use client";
import {
  FaSearch,
  FaPencilRuler,
  FaCode,
  FaBug,
  FaRocket,
  FaTools,
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
              src="/media/tech/website-mumbai5.png"
              alt="React JS Development Company in Mumbai – Development Process"
              className={styles.image}
            />
          </div>
        </div>

        {/* RIGHT – SCROLL CONTENT */}
        <div className={styles.right}>

          {/* CENTERED HEADER */}
          <div className={styles.header}>
            <h2 className={styles.heading}>
              Our React JS <span>Development Process in Mumbai</span>
            </h2>

            <p className={styles.subText}>
              As a trusted <strong>React JS Development Company in Mumbai</strong>, our development process is built to deliver fast, scalable, and high-performance web applications for businesses of all sizes. From planning and UI architecture to development, testing, and post-launch support, we follow a structured workflow that ensures clarity, quality, and long-term scalability.
            </p>
          </div>

          {/* STEPS */}
          <div className={styles.list}>

            <Step
              icon={<FaSearch />}
              title="Requirement Analysis & Planning"
              text="We begin by understanding your business goals, user expectations, and technical requirements. This structured discovery phase helps our React JS Development Company in Mumbai define the right application architecture and feature roadmap."
            />

            <Step
              icon={<FaPencilRuler />}
              title="UI/UX & Component Architecture"
              text="Our team designs intuitive user interfaces and plans reusable React components that ensure consistency, maintainability, and smooth user interactions across the application."
            />

            <Step
              icon={<FaCode />}
              title="React JS Development"
              text="Using modern React practices, clean code standards, and efficient state management, we build fast-loading and scalable applications that meet real-world business needs."
            />

            <Step
              icon={<FaBug />}
              title="Testing & Performance Optimization"
              text="Each application is thoroughly tested for performance, responsiveness, browser compatibility, and stability to ensure a reliable user experience."
            />

            <Step
              icon={<FaRocket />}
              title="Deployment & Ongoing Support"
              text="As a long-term React JS Development Company in Mumbai, we provide continuous support, performance monitoring, updates, and feature enhancements as your business grows."
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
