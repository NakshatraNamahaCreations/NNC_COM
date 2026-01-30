"use client";

import { useState } from "react";
import { FaQuestionCircle, FaPlus, FaMinus } from "react-icons/fa";
import styles from "../../styles/Faq1.module.css";

const faqs = [
  {
    q: "How much does a website designing company in Mumbai charge?",
    a: "Website designing costs in Mumbai depend on factors such as design complexity, number of pages, UI/UX requirements, responsiveness, and custom visuals. We provide clear pricing after understanding your design goals and brand requirements.",
  },
  {
    q: "How long does it take to design a website?",
    a: "Most website designing projects are completed within 5–10 working days, depending on the design scope, revisions, and approval timelines.",
  },
  {
    q: "Do you provide website redesign services?",
    a: "Yes, as a professional website designing company in Mumbai, we offer website redesign and revamp services to improve visual appeal, usability, and overall user experience while retaining your brand identity.",
  },
  {
    q: "Are the website designs mobile-friendly and responsive?",
    a: "Yes, all our website designs are fully responsive and optimized for mobile, tablet, and desktop devices to ensure a consistent user experience.",
  },
  {
    q: "Will the website design be SEO-friendly?",
    a: "Yes, our website designs follow SEO-friendly design practices including clean layouts, optimized structure, and performance-focused design elements.",
  },
  {
    q: "Will I get full ownership of the website design?",
    a: "Yes, once the website design project is completed, you receive full ownership of all design files, assets, and visual elements with no restrictions.",
  },
  {
    q: "Do you design websites for specific industries in Mumbai?",
    a: "Yes, we design websites for a wide range of industries including healthcare, real estate, ecommerce, education, startups, and service-based businesses in Mumbai.",
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
