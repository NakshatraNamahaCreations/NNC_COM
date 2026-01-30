"use client";

import { useState } from "react";
import { FaQuestionCircle, FaPlus, FaMinus } from "react-icons/fa";
import styles from "../../styles/Faq1.module.css";

const faqs = [
  {
    q: "What is the cost of hiring a digital marketing agency in Mumbai?",
    a: "The cost of hiring a digital marketing agency in Mumbai depends on the scope of services such as SEO, Google Ads, social media marketing, content creation, and performance campaigns. Pricing varies based on business goals, competition, and campaign scale. Contact us for a customized digital marketing quote.",
  },
  {
    q: "How long does it take to see results from digital marketing?",
    a: "Digital marketing timelines depend on the chosen strategy. SEO typically shows measurable improvements within 3 to 6 months, while Google Ads and social media campaigns can generate leads and traffic within a few weeks of launch.",
  },
  {
    q: "Do you provide ongoing support and campaign optimization?",
    a: "Yes. Our digital marketing services in Mumbai include continuous campaign monitoring, performance optimization, reporting, and strategy refinement to ensure consistent growth and better ROI.",
  },
  {
    q: "Which digital marketing services do you offer?",
    a: "We offer a full range of digital marketing services including SEO, Google Ads, social media marketing, content marketing, lead generation, conversion rate optimization, and integrated performance marketing solutions.",
  },
  {
    q: "Will I have full ownership of my marketing accounts and data?",
    a: "Yes. Clients receive complete ownership and admin access to all marketing assets including ad accounts, analytics tools, creatives, campaign data, and reports with full transparency.",
  },
  {
    q: "Do you handle both strategy and execution of digital campaigns?",
    a: "Yes. As a digital marketing agency in Mumbai, we handle end-to-end digital marketing including strategy planning, campaign execution, tracking, optimization, and performance reporting to ensure effective results.",
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
