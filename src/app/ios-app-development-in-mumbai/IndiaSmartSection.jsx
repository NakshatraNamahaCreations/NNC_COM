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
              alt="iOS App Development in Mumbai"
              className={styles.image}
            />
          </div>
        </div>

        {/* RIGHT – SCROLL CONTENT */}
        <div className={styles.right}>

          {/* HEADER */}
          <div className={styles.header}>
            <h2 className={styles.heading}>
              Our iOS <span>App Development Process in Mumbai</span>
            </h2>

            <p className={styles.subText}>
              Our iOS app development process is designed to help Mumbai
              businesses build secure, high-performance, and user-focused iPhone
              and iPad applications. From planning and design to development,
              testing, and App Store launch, we follow a structured approach that
              ensures quality, scalability, and long-term business value.
            </p>
          </div>

          {/* STEPS */}
          <div className={styles.list}>

            <Step
              icon={<FaSearch />}
              title="Requirement Analysis"
              text="We begin by understanding your business objectives, target audience, and app requirements. This helps us define the right iOS architecture, features, and integrations aligned with Apple’s ecosystem."
            />

            <Step
              icon={<FaPencilRuler />}
              title="Planning & App Architecture"
              text="Based on the requirements, we plan the app flow, user journeys, and technical structure to ensure smooth navigation, optimal performance, and scalability on iPhone and iPad devices."
            />

            <Step
              icon={<FaCode />}
              title="iOS App Development"
              text="Our developers build the application using Swift, SwiftUI, and UIKit with clean, maintainable code. We focus on performance, security, and seamless user experience across all iOS versions."
            />

            <Step
              icon={<FaBug />}
              title="Testing & App Store Launch"
              text="Before launch, the iOS app is tested for performance, security, usability, and Apple guideline compliance. Once approved, we handle submission to the Apple App Store."
            />

            <Step
              icon={<FaRocket />}
              title="Ongoing Support & Optimization"
              text="After launch, we provide continuous support including updates, performance optimization, bug fixes, and feature enhancements to keep your iOS app future-ready."
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
