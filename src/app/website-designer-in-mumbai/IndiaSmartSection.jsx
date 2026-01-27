"use client";

import {
  FaSearch,
  FaPencilRuler,
  FaCode,
  FaBug,
  FaRocket,
} from "react-icons/fa";
import styles from "../../styles/IndiaSmart.module.css";

export default function WebsiteDesignersMumbai() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* LEFT – STICKY IMAGE */}
        <div className={styles.left}>
          <div className={styles.stickyImage}>
            <img
              src="/media/tech/website-mumbai5.png"
              alt="Website Designers in Mumbai Process"
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
              As professional website designers in Mumbai, we follow a clear and
              structured design process to create visually engaging, user-friendly,
              and conversion-focused websites. Each stage is planned to ensure
              clarity, consistency, and long-term usability.
            </p>
          </div>

          {/* STEPS */}
          <div className={styles.list}>
            <Step
              icon={<FaSearch />}
              title="Understanding Business & Design Goals"
              text="We begin by understanding your brand, business objectives, target audience, and design preferences. This helps us define the visual direction and user experience for your website."
            />

            <Step
              icon={<FaPencilRuler />}
              title="Website Structure & Layout Planning"
              text="Our designers plan the sitemap, page layout, and content flow to ensure intuitive navigation, clear hierarchy, and a smooth user journey across all sections."
            />

            <Step
              icon={<FaCode />}
              title="Visual Design & UI Implementation"
              text="We design clean, responsive layouts that reflect your brand identity while focusing on usability, accessibility, and modern design standards."
            />

            <Step
              icon={<FaBug />}
              title="Design Review & Quality Testing"
              text="Each design is reviewed for consistency, responsiveness, and visual accuracy across devices and browsers to ensure a polished and professional look."
            />

            <Step
              icon={<FaRocket />}
              title="Launch & Design Support"
              text="Once approved, we assist with launch and provide ongoing design support, updates, and enhancements to keep your website fresh and effective."
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
