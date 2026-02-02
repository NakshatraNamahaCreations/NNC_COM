"use client";

import { useState } from "react";
import { FaQuestionCircle, FaPlus, FaMinus } from "react-icons/fa";
import styles from "../../styles/Faq1.module.css";

const faqs = [
  {
    q: "How much do SEO services in Mumbai cost?",
    a: "The cost of SEO services in Mumbai depends on factors such as website size, competition, target keywords, and the scope of work. We provide transparent pricing after evaluating your business goals and current website performance.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "SEO is a long-term strategy. Most websites start seeing noticeable improvements in rankings and traffic within 3 to 6 months, depending on competition and optimization efforts.",
  },
  {
    q: "Do you offer ongoing SEO maintenance and support?",
    a: "Yes, we provide continuous SEO support including keyword monitoring, content optimization, technical updates, and performance tracking to maintain and improve rankings.",
  },
  {
    q: "Is SEO suitable for small and local businesses in Mumbai?",
    a: "Absolutely. SEO is highly effective for small and local businesses in Mumbai, helping improve local search visibility, Google Maps rankings, and organic lead generation.",
  },
  {
    q: "Do you follow Google-approved SEO practices?",
    a: "Yes, all our SEO campaigns follow ethical, white-hat SEO practices aligned with Google’s guidelines to ensure long-term, risk-free results.",
  },
  {
    q: "Can you improve rankings for an existing website?",
    a: "Yes, we optimize existing websites through technical SEO, on-page improvements, content strategy, and link building to improve search visibility and rankings.",
  },
  {
    q: "Do you provide SEO services for different industries in Mumbai?",
    a: "Yes, we deliver SEO services for a wide range of industries including ecommerce, real estate, healthcare, education, SaaS, startups, and service-based businesses in Mumbai.",
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
