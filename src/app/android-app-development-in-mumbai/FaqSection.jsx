"use client";

import { useState } from "react";
import { FaQuestionCircle, FaPlus, FaMinus } from "react-icons/fa";
import styles from "../../styles/Faq1.module.css";

const faqs = [
  {
    q: "What is the cost of Android App Development in Mumbai?",
    a: "The cost of Android App Development in Mumbai depends on factors such as app features, UI/UX design, backend integrations, security requirements, and third-party APIs. Basic Android apps cost less, while complex enterprise-grade apps require higher investment. Contact us for a customized estimate.",
  },
  {
    q: "How long does Android App Development in Mumbai usually take?",
    a: "Most Android app development projects in Mumbai take between 4 to 12 weeks. The timeline varies based on app complexity, number of screens, integrations, and testing requirements. We provide a clear development schedule before starting.",
  },
  {
    q: "Do you offer post-launch support for Android apps?",
    a: "Yes. Our Android app development services in Mumbai include post-launch maintenance such as bug fixes, performance optimization, security updates, and feature enhancements to keep your app running smoothly.",
  },
  {
    q: "Do you develop native Android apps or cross-platform apps as well?",
    a: "We primarily specialize in native Android app development using Kotlin and Java. Based on project requirements, we also offer cross-platform app development using Flutter and React Native.",
  },
  {
    q: "Will I get complete ownership and source code of my Android app?",
    a: "Absolutely. Once the Android app development project is completed, you receive full ownership of the app, including complete source code, documentation, and intellectual property rights.",
  },
  {
    q: "Do you handle Google Play Store submission for Android apps?",
    a: "Yes. As part of our Android App Development in Mumbai services, we manage the entire Google Play Store publishing process, including app listing setup, screenshots, compliance checks, and successful submission.",
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
