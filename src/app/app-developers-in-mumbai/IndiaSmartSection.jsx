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
              alt="Android App Development in Mumbai"
              className={styles.image}
            />
          </div>
        </div>

        {/* RIGHT – SCROLL CONTENT */}
        <div className={styles.right}>

          {/* HEADER */}
          <div className={styles.header}>
            <h2 className={styles.heading}>
              Our Android <span>App Development Process in Mumbai</span>
            </h2>

            <p className={styles.subText}>
              Our Android app development process helps Mumbai businesses build
              secure, scalable, and high-performance mobile applications. From
              strategy and design to development, testing, and Play Store launch,
              we follow a structured approach that ensures quality, usability,
              and long-term business value.
            </p>
          </div>

          {/* STEPS */}
          <div className={styles.list}>

            <Step
              icon={<FaSearch />}
              title="Requirement Analysis"
              text="We start by understanding your business goals, target audience, and Android app requirements. This helps us define the right features, technology stack, and integrations for a successful Android application."
            />

            <Step
              icon={<FaPencilRuler />}
              title="Planning & App Architecture"
              text="Based on requirements, we plan the app flow, UI structure, and technical architecture to ensure smooth navigation, optimal performance, and scalability across multiple Android devices and screen sizes."
            />

            <Step
              icon={<FaCode />}
              title="Android App Development"
              text="Our developers build Android apps using Kotlin and Java with clean, maintainable code. We focus on performance, security, and seamless user experience across different Android versions."
            />

            <Step
              icon={<FaBug />}
              title="Testing & Play Store Deployment"
              text="Before launch, the Android app is tested for performance, security, usability, and device compatibility. Once approved, we manage deployment to the Google Play Store."
            />

            <Step
              icon={<FaRocket />}
              title="Ongoing Support & Optimization"
              text="After launch, we provide continuous support including updates, performance optimization, bug fixes, and feature enhancements to keep your Android app competitive and future-ready."
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
