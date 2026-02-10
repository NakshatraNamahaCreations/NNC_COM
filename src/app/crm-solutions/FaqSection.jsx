"use client";

import { useState } from "react";
import { FaQuestionCircle, FaPlus, FaMinus } from "react-icons/fa";
import styles from "../../styles/Faq1.module.css";

const faqs = [
  {
    q: "How long does CRM implementation take?",
    a: "Implementation timelines depend on customization, integrations, and workflow complexity. Most CRM setups are completed in structured phases after requirement analysis.",
  },
  {
    q: "Can CRM improve lead conversion rates?",
    a: "Yes, CRM systems help track leads, automate follow-ups, and improve response time, which directly supports better conversion rates.",
  },
  {
    q: "Do you provide CRM customization?",
    a: "Yes, CRM systems are customized to match your business workflows, sales processes, and customer management requirements.",
  },
  {
    q: "Can CRM integrate with our existing tools?",
    a: "Yes, CRM systems can integrate with websites, email platforms, marketing tools, and other business software.",
  },
  {
    q: "Is CRM suitable for small and growing businesses?",
    a: "Yes, CRM helps businesses of all sizes organize customer data and improve operational efficiency.",
  },
  {
    q: "Do you provide support after CRM implementation?",
    a: "Yes, ongoing optimization and support services are available to ensure long-term CRM performance.",
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
