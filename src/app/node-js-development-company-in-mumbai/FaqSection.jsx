"use client";

import { useState } from "react";
import { FaQuestionCircle, FaPlus, FaMinus } from "react-icons/fa";
import styles from "../../styles/Faq1.module.css";

const faqs = [
  {
    q: "How much does Node JS development cost in Mumbai?",
    a: "The cost of Node JS development depends on backend complexity, features, integrations, and scalability requirements. We provide clear pricing estimates after understanding your project needs.",
  },
  {
    q: "How long does it take to develop a Node JS application?",
    a: "Most Node JS backend applications are developed within 4–8 weeks, depending on the project scope, APIs, and required integrations.",
  },
  {
    q: "Do you provide Node JS maintenance and support services?",
    a: "Yes, we offer ongoing Node JS maintenance, performance optimization, security updates, and long-term technical support.",
  },
  {
    q: "Are Node JS applications secure and scalable?",
    a: "Yes, Node JS applications are built with strong security practices and scalable architectures to handle high traffic and growing business needs.",
  },
  {
    q: "Will I get full ownership of the Node JS source code?",
    a: "Yes, you receive complete ownership of the Node JS backend source code and intellectual property after project delivery.",
  },
  {
    q: "Can you upgrade or rebuild an existing backend using Node JS?",
    a: "Yes, we modernize existing backend systems by rebuilding or migrating them to Node JS to improve performance, scalability, and maintainability.",
  },
  {
    q: "Do you develop Node JS applications for specific industries in Mumbai?",
    a: "Yes, we build Node JS applications for industries such as SaaS, fintech, healthcare, real estate, ecommerce, startups, and enterprise businesses in Mumbai.",
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
