"use client";

import { useState } from "react";
import { FaQuestionCircle, FaPlus, FaMinus } from "react-icons/fa";
import styles from "../../styles/Faq1.module.css";

const faqs = [
  {
    q: "How much does a B2B marketing company in Mumbai charge?",
    a: "The cost of hiring a B2B marketing company in Mumbai depends on the scope of services such as lead generation, account-based marketing, SEO, LinkedIn advertising, content marketing, and campaign scale. Pricing is shared transparently after understanding your business goals, target audience, and sales requirements.",
  },
  {
    q: "Do you provide complete B2B marketing strategy and execution?",
    a: "Yes, we provide end-to-end B2B marketing services including strategy development, campaign planning, execution, optimization, and performance reporting aligned with your business and sales objectives.",
  },
  {
    q: "What services does a B2B marketing company in Mumbai offer?",
    a: "Our services include B2B lead generation, account-based marketing (ABM), LinkedIn advertising, Google Ads, SEO, content marketing, demand generation, and performance-driven campaigns focused on generating qualified leads.",
  },
  {
    q: "Will your B2B marketing approach align with our brand and sales process?",
    a: "Yes, every B2B marketing strategy is built around your brand positioning, target accounts, buyer journey, and sales funnel to ensure consistent messaging and measurable business outcomes.",
  },
  {
    q: "Are B2B marketing campaigns suitable for different industries?",
    a: "Yes, our B2B marketing services are suitable for industries such as IT, SaaS, manufacturing, logistics, healthcare, real estate, and professional services, with strategies adapted to each industry's buying process.",
  },
  {
    q: "Do you provide regular reporting and performance insights?",
    a: "Yes, we provide structured performance reports, analytics insights, and regular updates so you can clearly track lead quality, conversions, and return on marketing investment.",
  },
  {
    q: "Will we have full ownership of our B2B marketing accounts and data?",
    a: "Yes, you retain complete ownership of all marketing assets including ad accounts, analytics data, creatives, and campaign reports, ensuring full transparency and long-term control.",
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
