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
              src="/media/tech/website-mumbai5.png"
              alt="Website designing process illustration"
              className={styles.image}
            />
          </div>
        </div>

        {/* RIGHT – SCROLL CONTENT */}
        <div className={styles.right}>

          {/* CENTERED HEADER */}
          <div className={styles.header}>
            <h2 className={styles.heading}>
              Our Website <span>Designing Process in Mumbai</span>
            </h2>

            <p className={styles.subText}>
              As a professional <strong>website designing company in Mumbai</strong>,
              our process focuses on creating visually appealing, user-friendly,
              and responsive websites. From understanding your brand to final
              design delivery, each step is planned to ensure clarity, usability,
              and long-term value.
            </p>
          </div>

          {/* STEPS */}
          <div className={styles.list}>

            <Step
              icon={<FaSearch />}
              title="Design Requirement Discovery"
              text="We start by understanding your brand identity, business goals, target audience, and design expectations. This helps us define the right visual direction and user experience strategy."
            />

            <Step
              icon={<FaPencilRuler />}
              title="Wireframing & Layout Planning"
              text="Our team creates wireframes and layout structures to plan page hierarchy, navigation flow, and content placement for an intuitive and engaging user journey."
            />

            <Step
              icon={<FaCode />}
              title="UI Design & Responsive Implementation"
              text="We design modern, responsive interfaces that reflect your brand personality while ensuring consistency, accessibility, and smooth performance across all devices."
            />

            <Step
              icon={<FaBug />}
              title="Design Review & Quality Testing"
              text="Before launch, every design goes through detailed reviews and testing for responsiveness, visual consistency, usability, and browser compatibility."
            />

            <Step
              icon={<FaRocket />}
              title="Final Delivery & Design Support"
              text="Once approved, we deliver the final website design and provide ongoing support for updates, refinements, and future design enhancements."
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
