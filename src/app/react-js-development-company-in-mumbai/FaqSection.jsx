"use client";

import { useState } from "react";
import { FaQuestionCircle, FaPlus, FaMinus } from "react-icons/fa";
import styles from "../../styles/Faq1.module.css";

const faqs = [
  {
    q: "How much does React JS development cost in Mumbai?",
    a: "The cost of React JS development depends on application complexity, features, integrations, and timelines. We provide clear estimates after understanding your requirements.",
  },
  {
    q: "How long does it take to develop a React JS application?",
    a: "Most React JS applications are developed within 3–6 weeks, depending on the scope, UI complexity, and required integrations.",
  },
  {
    q: "Do you provide React JS maintenance and support services?",
    a: "Yes, we offer ongoing React JS maintenance, performance optimization, updates, and long-term technical support.",
  },
  {
    q: "Are React JS applications mobile-friendly and SEO-ready?",
    a: "Yes, React JS applications are built to be fully responsive. SEO readiness is achieved using best practices and frameworks like Next.js where required.",
  },
  {
    q: "Will I get full ownership of the React JS source code?",
    a: "Yes, you receive complete ownership of the React JS application source code and intellectual property after project delivery.",
  },
  {
    q: "Can you upgrade or rebuild an existing website using React JS?",
    a: "Yes, we modernize existing websites by rebuilding or upgrading them with React JS to improve performance, usability, and scalability.",
  },
  {
    q: "Do you develop React JS applications for specific industries in Mumbai?",
    a: "Yes, we build React JS applications for industries such as SaaS, fintech, healthcare, real estate, ecommerce, startups, and enterprise businesses in Mumbai.",
  }
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
