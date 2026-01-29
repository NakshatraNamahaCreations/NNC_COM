"use client";

import { useState } from "react";
import { FaQuestionCircle, FaPlus, FaMinus } from "react-icons/fa";
import styles from "../../styles/Faq1.module.css";

const faqs = [
  {
    q: "What is the cost of React Native Mobile App Development in Mumbai?",
    a: "The cost of React Native Mobile App Development in Mumbai depends on app features, UI/UX complexity, backend integrations, third-party APIs, and overall project scope. Simple apps cost less, while feature-rich cross-platform apps require higher investment. Contact us for a custom estimate.",
  },
  {
    q: "How long does React Native Mobile App Development in Mumbai usually take?",
    a: "Most React Native mobile app development projects in Mumbai are completed within 4 to 10 weeks. Timelines vary based on app complexity, features, testing requirements, and store deployment needs.",
  },
  {
    q: "Do you provide post-launch support for React Native apps?",
    a: "Yes. Our React Native Mobile App Development services in Mumbai include post-launch support such as bug fixes, performance optimization, feature enhancements, and ongoing maintenance.",
  },
  {
    q: "Can React Native apps be launched on both Android and iOS?",
    a: "Absolutely. React Native uses a single codebase to build apps for both Android and iOS, ensuring consistent performance, faster development, and reduced maintenance costs.",
  },
  {
    q: "Will I get full ownership and source code of my React Native app?",
    a: "Yes. Once the React Native mobile app development project is completed, you receive full ownership of the app, including complete source code, documentation, and intellectual property rights.",
  },
  {
    q: "Do you handle Play Store and App Store deployment for React Native apps?",
    a: "Yes. As part of our React Native Mobile App Development in Mumbai services, we manage complete deployment to Google Play Store and Apple App Store, including compliance checks and successful publishing.",
  },
];





export default function FaqSection() {
  const [active, setActive] = useState(null);

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className="text-center mb-4">
          <h2 className={styles.heading}>Frequently Asked Questions</h2>
        </div>
        <br />

        {faqs.map((item, i) => (
          <div
            key={i}
            className={`${styles.item} ${active === i ? styles.active : ""}`}
          >
            <button
              className={styles.question}
              onClick={() => setActive(active === i ? null : i)}
            >
              <span className={styles.left}>
                <FaQuestionCircle />
                {item.q}
              </span>

              <span className={styles.icon}>
                {active === i ? <FaMinus /> : <FaPlus />}
              </span>
            </button>

            <div className={styles.answer}>
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
