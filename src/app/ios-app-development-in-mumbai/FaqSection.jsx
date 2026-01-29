"use client";

import { useState } from "react";
import { FaQuestionCircle, FaPlus, FaMinus } from "react-icons/fa";
import styles from "../../styles/Faq1.module.css";

const faqs = [
  {
    q: "What is the cost of iOS App Development in Mumbai?",
    a: "The cost of iOS App Development in Mumbai depends on app complexity, UI/UX design, backend integrations, security standards, and App Store requirements. Simple apps cost less, while enterprise-grade iOS apps require higher investment. Contact us for an accurate quote.",
  },
  {
    q: "How long does iOS App Development in Mumbai usually take?",
    a: "Most iOS app development projects in Mumbai are completed within 4 to 12 weeks. The timeline depends on features, design complexity, testing cycles, and Apple App Store approval processes.",
  },
  {
    q: "Do you provide post-launch support for iOS apps?",
    a: "Yes. Our iOS App Development in Mumbai services include post-launch support such as bug fixes, performance optimization, security updates, and iOS version upgrades.",
  },
  {
    q: "Do you build native iOS apps or cross-platform apps as well?",
    a: "We specialize in native iOS app development using Swift, SwiftUI, and UIKit. When required, we also build cross-platform applications using Flutter and React Native.",
  },
  {
    q: "Will I get full ownership and source code of my iOS app?",
    a: "Absolutely. After project completion, you receive complete ownership of your iOS app, including full source code, documentation, and intellectual property rights.",
  },
  {
    q: "Do you handle Apple App Store submission for iOS apps?",
    a: "Yes. As part of our iOS App Development in Mumbai offering, we manage the entire App Store submission process, including compliance checks, screenshots, metadata, and successful publishing.",
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
