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
              alt="React Native Mobile App Development in Mumbai"
              className={styles.image}
            />
          </div>
        </div>

        {/* RIGHT – SCROLL CONTENT */}
        <div className={styles.right}>

          {/* HEADER */}
          <div className={styles.header}>
            <h2 className={styles.heading}>
              Our React Native <span>Mobile App Development Process in Mumbai</span>
            </h2>

            <p className={styles.subText}>
              Our React Native mobile app development process is designed to help
              Mumbai businesses build fast, scalable, and high-performing mobile
              applications. From planning and design to development, testing,
              and launch, we follow a structured approach that ensures quality,
              performance, and long-term business value.
            </p>
          </div>

          {/* STEPS */}
          <div className={styles.list}>

            <Step
              icon={<FaSearch />}
              title="Requirement Analysis"
              text="We start by understanding your business goals, target users, and app requirements. This helps us define the right React Native architecture, features, and integrations needed for a successful mobile application."
            />

            <Step
              icon={<FaPencilRuler />}
              title="Planning & App Architecture"
              text="Based on requirements, we plan the app flow, user journeys, and technical structure. This ensures smooth navigation, optimal performance, and scalability across both Android and iOS platforms."
            />

            <Step
              icon={<FaCode />}
              title="React Native Development"
              text="Our developers build the mobile app using React Native with clean, reusable code. We focus on native-like performance, secure integrations, and consistent UI across devices."
            />

            <Step
              icon={<FaBug />}
              title="Testing & Deployment"
              text="Before launch, the app is tested for performance, security, usability, and device compatibility. Once approved, we deploy the app to Google Play Store and Apple App Store."
            />

            <Step
              icon={<FaRocket />}
              title="Ongoing Support & Optimization"
              text="After launch, we provide continuous support including updates, performance optimization, bug fixes, and feature enhancements to keep your React Native app future-ready."
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
