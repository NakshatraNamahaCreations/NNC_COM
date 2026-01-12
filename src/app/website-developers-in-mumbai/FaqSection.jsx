"use client";

import { useState } from "react";
import { FaQuestionCircle, FaPlus, FaMinus } from "react-icons/fa";
import styles from "../../styles/Faq1.module.css";

const faqs = [
  {
    q: "How much does website development cost in Mumbai?",
    a: "Website development costs vary based on design complexity, features, and integrations. We provide detailed estimates after requirement analysis.",
  },
   {
    q: "How long does it take to develop a website?",
    a: "Most business websites are completed within 3–6 weeks, depending on scope.",
  },
   {
    q: "Do you provide website maintenance services?",
    a: "Yes, we offer long-term support, updates, and technical maintenance.",
  },
  {
    q: "Is the website mobile-friendly and SEO-ready?",
    a: "Yes, all websites are fully responsive and developed using SEO best practices.",
  },
  {
    q: "Will I get full ownership of the website?",
    a: "Yes, you receive complete ownership and full source code access.",
  },
   {
    q: "Can you redesign an existing website?",
    a: "Yes, we offer website redesign and revamp services to improve design, performance, usability, and overall user experience while retaining your brand identity.",
  },
    {
    q: "Do you build websites for specific industries in Mumbai?",
    a: "Yes, we develop websites for a wide range of industries including healthcare, real estate, ecommerce, education, startups, and service-based businesses.",
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
