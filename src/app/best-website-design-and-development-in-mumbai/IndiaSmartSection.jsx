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
              alt="Best Website Design and Development In Mumbai Process"
              className={styles.image}
            />
          </div>
        </div>

        {/* RIGHT – CONTENT */}
        <div className={styles.right}>

          {/* HEADER */}
          <div className={styles.header}>
            <h2 className={styles.heading}>
              Our Website <span>Design and Development Process in Mumbai</span>
            </h2>

            <p className={styles.subText}>
              As a provider of the best website design and development in Mumbai,
              we follow a structured, result-driven process to build websites
              that are visually engaging, technically sound, and optimized for
              performance, usability, and long-term business growth.
            </p>
          </div>

          {/* STEPS */}
          <div className={styles.list}>
            <Step
              icon={<FaSearch />}
              title="Business Analysis & Requirement Discovery"
              text="We start by understanding your business goals, target audience, competitors, and technical requirements to define a clear website design and development roadmap."
            />

            <Step
              icon={<FaPencilRuler />}
              title="Website Structure, UX & Wireframe Planning"
              text="Our team plans the site architecture, user flow, and wireframes to ensure intuitive navigation, logical content structure, and a smooth user experience."
            />

            <Step
              icon={<FaCode />}
              title="UI Design & Website Development"
              text="We design modern, responsive user interfaces and develop the website using clean, scalable code to ensure performance, security, and cross-device compatibility."
            />

            <Step
              icon={<FaBug />}
              title="Testing, Optimization & Quality Assurance"
              text="Each website goes through thorough testing for speed, responsiveness, browser compatibility, and functionality to deliver a stable, high-quality final product."
            />

            <Step
              icon={<FaRocket />}
              title="Website Launch & Ongoing Support"
              text="After launch, we provide ongoing support, updates, and enhancements to ensure your website remains secure, up-to-date, and aligned with your evolving business needs."
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
