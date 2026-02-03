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
              src="/media/tech/27.jpg"
              alt="Mobile App Developers in Mumbai"
              className={styles.image}
            />
          </div>
        </div>

        {/* RIGHT – SCROLL CONTENT */}
        <div className={styles.right}>

          {/* HEADER */}
          <div className={styles.header}>
            <h2 className={styles.heading}>
              Our Mobile App <span>Development Process in Mumbai</span>
            </h2>

            <p className={styles.subText}>
              Our mobile app developers in Mumbai follow a structured process to
              build secure, scalable, and high-performance mobile applications.
              From strategy and design to development, testing, and app store
              launch, every stage is focused on usability, reliability, and
              long-term business value.
            </p>
          </div>

          {/* STEPS */}
          <div className={styles.list}>

            <Step
              icon={<FaSearch />}
              title="Requirement Discovery"
              text="We begin by understanding your business objectives, target users, and mobile app requirements. This helps us define the right features, platforms, and technical approach for your application."
            />

            <Step
              icon={<FaPencilRuler />}
              title="Planning & App Architecture"
              text="Our team plans the app flow, UI structure, and system architecture to ensure smooth navigation, performance stability, and scalability across devices and platforms."
            />

            <Step
              icon={<FaCode />}
              title="Mobile App Development"
              text="Our mobile app developers in Mumbai build applications using modern frameworks and clean code practices, focusing on performance, security, and a seamless user experience."
            />

            <Step
              icon={<FaBug />}
              title="Testing & App Store Launch"
              text="Each mobile app is thoroughly tested for functionality, performance, security, and device compatibility before being published on the Google Play Store or Apple App Store."
            />

            <Step
              icon={<FaRocket />}
              title="Post-Launch Support & Optimization"
              text="After launch, we provide ongoing support including updates, performance optimization, bug fixes, and feature enhancements to keep your mobile app reliable and future-ready."
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
