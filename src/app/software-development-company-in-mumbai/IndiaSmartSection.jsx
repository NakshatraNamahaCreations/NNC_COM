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
              src="/media/tech/software1.png"
              alt="Software development process illustration"
              className={styles.image}
            />
          </div>
        </div>

        {/* RIGHT – SCROLL CONTENT */}
        <div className={styles.right}>

          {/* CENTERED HEADER */}
          <div className={styles.header}>
            <h2 className={styles.heading}>
              Our Software <span>Development Process in Mumbai</span>
            </h2>

            <p className={styles.subText}>
              As a trusted <strong>software development company in Mumbai</strong>,
              our process is designed to build secure, scalable, and high-performance
              software solutions. From understanding business requirements to final
              deployment, every stage focuses on reliability, usability, and long-term
              value.
            </p>
          </div>

          {/* STEPS */}
          <div className={styles.list}>

            <Step
              icon={<FaSearch />}
              title="Requirement Analysis & Discovery"
              text="We begin by understanding your business objectives, operational challenges, and technical requirements. This helps define the right software features, workflows, and solution approach."
            />

            <Step
              icon={<FaPencilRuler />}
              title="System Planning & Architecture Design"
              text="Our team designs the software architecture, database structure, and system workflows to ensure scalability, performance, and seamless integration with existing systems."
            />

            <Step
              icon={<FaCode />}
              title="Software Development & Implementation"
              text="Using modern technologies and clean coding practices, we develop secure and reliable software solutions focused on performance, functionality, and maintainability."
            />

            <Step
              icon={<FaBug />}
              title="Testing & Quality Assurance"
              text="Each software solution undergoes rigorous testing for functionality, performance, security, and usability to ensure stability before deployment."
            />

            <Step
              icon={<FaRocket />}
              title="Deployment & Ongoing Support"
              text="After deployment, we provide continuous support, updates, and optimizations to ensure your software remains reliable, secure, and ready for future growth."
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
