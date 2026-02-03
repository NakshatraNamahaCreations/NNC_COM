"use client";

import { useState } from "react";
import { FaQuestionCircle, FaPlus, FaMinus } from "react-icons/fa";
import styles from "../../styles/Faq1.module.css";

const faqs = [
  {
    q: "What is the cost of paid marketing services in Mumbai?",
    a: "The cost of paid marketing services in Mumbai depends on factors such as ad platforms, campaign objectives, targeting, competition, and monthly ad spend. Pricing varies based on whether you run Google Ads, social media ads, display campaigns, or remarketing. Contact us for a customized paid marketing plan aligned with your budget and goals.",
  },
  {
    q: "How quickly can paid marketing generate results?",
    a: "Paid marketing campaigns can start delivering traffic, leads, and conversions within days of launch. Results depend on campaign setup, targeting accuracy, ad creatives, and budget allocation.",
  },
  {
    q: "Do you provide ongoing optimization for paid ad campaigns?",
    a: "Yes. Our paid marketing services in Mumbai include continuous monitoring, bid optimization, audience refinement, A/B testing of ads, and performance tracking to maximize ROI and reduce wasted ad spend.",
  },
  {
    q: "Which paid marketing services do you offer?",
    a: "We offer comprehensive paid marketing services including Google Ads, Meta Ads (Facebook & Instagram), display advertising, remarketing campaigns, YouTube ads, and performance-driven lead generation strategies.",
  },
  {
    q: "Will I have full ownership of my ad accounts and campaign data?",
    a: "Yes. You retain complete ownership and admin access to all paid advertising accounts, analytics tools, creatives, conversion data, and reports with full transparency and no vendor lock-in.",
  },
  {
    q: "Do you handle both strategy and execution of paid marketing campaigns?",
    a: "Yes. As a paid marketing agency in Mumbai, we manage end-to-end paid advertising—from campaign strategy and setup to execution, optimization, tracking, and detailed performance reporting.",
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
