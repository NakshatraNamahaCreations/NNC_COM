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
              alt="Node JS Development Company in Mumbai – Backend Development Process"
              className={styles.image}
            />
          </div>
        </div>

        {/* RIGHT – SCROLL CONTENT */}
        <div className={styles.right}>

          {/* CENTERED HEADER */}
          <div className={styles.header}>
            <h2 className={styles.heading}>
              Our Node JS <span>Development Process in Mumbai</span>
            </h2>

            <p className={styles.subText}>
              As a trusted <strong>Node JS Development Company in Mumbai</strong>, our development process is designed to build secure, scalable, and high-performance backend systems. From architecture planning and API design to development, testing, and ongoing support, we follow a structured workflow that ensures reliability and long-term scalability.
            </p>
          </div>

          {/* STEPS */}
          <div className={styles.list}>

            <Step
              icon={<FaSearch />}
              title="Requirement Analysis & Backend Planning"
              text="We begin by understanding your business logic, data flow, and technical requirements. This discovery phase helps our Node JS Development Company in Mumbai define the right backend architecture and system roadmap."
            />

            <Step
              icon={<FaPencilRuler />}
              title="API Design & System Architecture"
              text="Our team designs secure REST APIs and scalable system architecture to ensure smooth data handling, integrations, and efficient backend operations."
            />

            <Step
              icon={<FaCode />}
              title="Node JS Development"
              text="Using modern Node JS frameworks and clean coding practices, we develop high-performance backend applications capable of handling concurrent users and real-time operations."
            />

            <Step
              icon={<FaBug />}
              title="Testing & Performance Optimization"
              text="Each Node JS application undergoes thorough testing for performance, security, scalability, and stability before deployment."
            />

            <Step
              icon={<FaRocket />}
              title="Deployment & Ongoing Support"
              text="As a long-term Node JS Development Company in Mumbai, we provide continuous support including performance monitoring, updates, security enhancements, and feature improvements."
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
