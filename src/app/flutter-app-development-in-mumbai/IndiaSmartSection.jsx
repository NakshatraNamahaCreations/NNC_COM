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
              alt="Flutter App Development in Mumbai"
              className={styles.image}
            />
          </div>
        </div>

        {/* RIGHT – SCROLL CONTENT */}
        <div className={styles.right}>

          {/* HEADER */}
          <div className={styles.header}>
            <h2 className={styles.heading}>
              Our Flutter <span>App Development Process in Mumbai</span>
            </h2>

            <p className={styles.subText}>
              Our Flutter app development process helps Mumbai businesses build
              fast, scalable, and high-performing mobile applications using a
              single codebase for Android and iOS. From planning and design to
              development, testing, and store launch, we follow a structured
              approach focused on quality and long-term growth.
            </p>
          </div>

          {/* STEPS */}
          <div className={styles.list}>

            <Step
              icon={<FaSearch />}
              title="Requirement Analysis"
              text="We start by understanding your business goals, target users, and app requirements. This allows us to choose the right Flutter architecture, features, and integrations for a successful cross-platform application."
            />

            <Step
              icon={<FaPencilRuler />}
              title="Planning & App Architecture"
              text="Based on requirements, we plan the app flow, UI structure, and technical architecture to ensure smooth navigation, consistent performance, and scalability across Android and iOS devices."
            />

            <Step
              icon={<FaCode />}
              title="Flutter App Development"
              text="Our developers build the application using Flutter and Dart with clean, reusable code. We focus on native-like performance, secure integrations, and visually consistent UI across platforms."
            />

            <Step
              icon={<FaBug />}
              title="Testing & Store Deployment"
              text="Before launch, the Flutter app is tested for performance, security, responsiveness, and device compatibility. Once approved, we deploy the app to Google Play Store and Apple App Store."
            />

            <Step
              icon={<FaRocket />}
              title="Ongoing Support & Optimization"
              text="After launch, we provide continuous support including updates, performance optimization, bug fixes, and feature enhancements to keep your Flutter app future-ready."
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
