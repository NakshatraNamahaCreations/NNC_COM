"use client";

import { useState } from "react";
import { FaQuestionCircle, FaPlus, FaMinus } from "react-icons/fa";
import styles from "../../styles/Faq1.module.css";

const faqs = [
  {
    q: "How much does app development cost in Bangalore?",
    a: "App development costs depend on the features, design complexity, and technology used. Simple apps require less time, while advanced apps with integrations cost more. Contact us for a tailored estimate based on your requirements",
  },
   {
    q: "How long does it take to build a mobile app?",
    a: "Most apps are completed within 4–12 weeks, depending on the number of features, screens, and backend needs. We provide a clear project timeline before development begins.",
  },
   {
    q: "Do you provide maintenance after launch?",
    a: "Yes. We offer continuous maintenance, updates, bug fixes, and feature enhancements to keep your app stable and up to date",
  },
   {
    q: "Can you build apps for both Android and iOS?",
    a: "Absolutely. We develop native apps and cross-platform apps using React Native and Flutter, ensuring smooth performance on both platforms.",
  },
   {
    q: " Will I get full ownership and source code access?",
    a: "Yes. Once the project is completed, you receive full ownership of the app along with complete source code and documentation",
  },
   {
    q: "Can you help with app publishing on Play Store and App Store?",
    a: "Yes. We handle the entire deployment process, including app listing, store guidelines, screenshots, and submission, ensuring a smooth launch.",
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
            className={`${styles.item} ${
              active === i ? styles.active : ""
            }`}
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
