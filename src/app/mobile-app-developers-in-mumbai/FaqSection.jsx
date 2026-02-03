"use client";

import { useState } from "react";
import { FaQuestionCircle, FaPlus, FaMinus } from "react-icons/fa";
import styles from "../../styles/Faq1.module.css";

const faqs = [
  {
    q: "What is the cost of hiring mobile app developers in Mumbai?",
    a: "The cost of hiring mobile app developers in Mumbai depends on factors such as app features, platform requirements (Android or iOS), UI/UX design, backend integrations, security needs, and third-party APIs. Simple mobile apps require lower investment, while complex business or enterprise apps involve higher costs. Contact us for a detailed project estimate.",
  },
  {
    q: "How long does it take to build a mobile app in Mumbai?",
    a: "Most mobile app development projects take between 6 to 14 weeks. The timeline depends on app complexity, number of features, integrations, testing requirements, and platform choice. A clear development roadmap is shared before the project begins.",
  },
  {
    q: "Do you provide post-launch support for mobile apps?",
    a: "Yes. Our mobile app developers in Mumbai offer post-launch support including bug fixes, performance optimization, security updates, and feature enhancements to ensure long-term app stability.",
  },
  {
    q: "Do you develop Android, iOS, or cross-platform mobile apps?",
    a: "Our mobile app developers in Mumbai build native Android apps, native iOS apps, and cross-platform applications using frameworks such as Flutter and React Native, based on your business requirements.",
  },
  {
    q: "Will I receive full ownership and source code of my mobile app?",
    a: "Yes. Once the mobile app development project is completed, you receive complete ownership of the application, including full source code, documentation, and intellectual property rights.",
  },
  {
    q: "Do you handle App Store and Google Play submission?",
    a: "Yes. Our team manages the complete app submission process, including app store guidelines compliance, screenshots, descriptions, and successful publishing on Google Play Store and Apple App Store.",
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
