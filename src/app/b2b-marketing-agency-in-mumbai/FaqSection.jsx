"use client";

import { useState } from "react";
import { FaQuestionCircle, FaPlus, FaMinus } from "react-icons/fa";
import styles from "../../styles/Faq1.module.css";

const faqs = [
  {
    q: "How much does a B2B marketing agency in Mumbai charge?",
    a: "The cost of hiring a B2B marketing agency in Mumbai depends on the scope of services such as lead generation, account-based marketing, SEO, LinkedIn advertising, content marketing, and campaign scale. Pricing is shared transparently after understanding your business goals and sales requirements.",
  },
  {
    q: "Do you provide complete B2B marketing strategy and execution?",
    a: "Yes, we handle end-to-end B2B marketing including strategy development, campaign planning, execution, optimization, and performance reporting aligned with your sales objectives.",
  },
  {
    q: "What B2B marketing services do you offer?",
    a: "We offer B2B lead generation, account-based marketing (ABM), LinkedIn Ads, Google Ads, SEO, content marketing, demand generation, and conversion-focused performance campaigns.",
  },
  {
    q: "Will your B2B marketing approach align with our brand and sales process?",
    a: "Absolutely. All B2B marketing strategies are built around your brand positioning, target accounts, buyer personas, and sales funnel to ensure consistency and measurable outcomes.",
  },
  {
    q: "Are B2B marketing campaigns suitable for different industries?",
    a: "Yes, our B2B marketing services are designed for industries such as IT, SaaS, manufacturing, logistics, healthcare, real estate, and professional services.",
  },
  {
    q: "Do you provide regular reporting and performance insights?",
    a: "Yes, we provide structured reports, analytics dashboards, and actionable insights so you can track lead quality, conversions, and ROI throughout the engagement.",
  },
  {
    q: "Will we have full ownership of our B2B marketing accounts and data?",
    a: "Yes, you receive complete ownership of all marketing assets including ad accounts, analytics, creatives, campaign data, and reports with full transparency and no vendor lock-in.",
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
