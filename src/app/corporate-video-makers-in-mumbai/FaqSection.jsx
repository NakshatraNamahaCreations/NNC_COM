"use client";

import { useState } from "react";
import { FaQuestionCircle, FaPlus, FaMinus } from "react-icons/fa";
import styles from "../../styles/Faq1.module.css";

const faqs = [
  {
    q: "How much do corporate video makers in Mumbai charge?",
    a: "The pricing for corporate video makers in Mumbai depends on the type of video, duration, filming complexity, locations, and post-production requirements. After understanding your brief, we provide a clear and transparent quote with no hidden costs.",
  },
  {
    q: "Do you help with concept creation and scripting for corporate videos?",
    a: "Yes, our corporate video makers in Mumbai assist with concept development, scripting, storyboarding, and planning to ensure your corporate video communicates the right message effectively.",
  },
  {
    q: "What types of corporate videos do you produce?",
    a: "We produce a wide range of corporate videos including company profile videos, brand videos, promotional corporate videos, training videos, internal communication videos, and product explainer videos.",
  },
  {
    q: "Will the corporate video reflect our brand identity?",
    a: "Yes. Every corporate video is created based on your brand tone, visual guidelines, and communication goals to ensure it represents your business accurately and professionally.",
  },
  {
    q: "Are your corporate videos suitable for websites and digital platforms?",
    a: "Absolutely. Our corporate video makers in Mumbai deliver videos optimized for websites, social media platforms, presentations, exhibitions, and internal communication channels.",
  },
  {
    q: "Can we review and suggest changes during the corporate video production process?",
    a: "Yes, we follow a structured review process that allows you to share feedback and request revisions during scripting, editing, and final output stages.",
  },
  {
    q: "Do we get complete ownership of the corporate video after delivery?",
    a: "Yes, once the corporate video is delivered and approved, you receive full ownership rights to the final video and all associated deliverables without any usage restrictions.",
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
