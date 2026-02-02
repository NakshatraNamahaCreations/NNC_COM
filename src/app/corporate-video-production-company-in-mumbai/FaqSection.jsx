"use client";

import { useState } from "react";
import { FaQuestionCircle, FaPlus, FaMinus } from "react-icons/fa";
import styles from "../../styles/Faq1.module.css";

const faqs = [
  {
    q: "How much does a corporate video production company in Mumbai charge?",
    a: "The cost of corporate video production in Mumbai depends on factors such as video type, duration, filming requirements, locations, and post-production needs. We share a clear and transparent quote after understanding your project scope.",
  },
{
  q: "Do you handle scripting and concept development for corporate videos?",
  a: "Yes, we assist with concept development, scripting, and content planning to ensure your corporate video delivers a clear message and aligns with your business objectives."
},

  {
    q: "Do you produce different types of corporate videos?",
    a: "Yes, we create a wide range of corporate videos including company profile videos, brand films, promotional videos, training videos, and internal communication content.",
  },
  {
    q: "Will the corporate video match our brand identity?",
    a: "Absolutely. Every corporate video is planned around your brand guidelines, messaging style, and communication goals to ensure consistency and clarity.",
  },
  {
    q: "Are your corporate videos suitable for websites and digital platforms?",
    a: "Yes, all videos are optimized for use on websites, social media platforms, presentations, and internal communication channels.",
  },
  {
    q: "Can we request changes or revisions during production?",
    a: "Yes, we include structured review stages that allow for feedback and revisions during scripting, editing, and final delivery phases.",
  },
  {
    q: "Will we receive full ownership of the corporate video content?",
    a: "Yes, once the project is completed, you receive full ownership of all video files and final edits, with no usage restrictions or lock-ins.",
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
