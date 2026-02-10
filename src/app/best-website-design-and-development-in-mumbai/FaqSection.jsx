"use client";

import { useState } from "react";
import { FaQuestionCircle, FaPlus, FaMinus } from "react-icons/fa";
import styles from "../../styles/Faq1.module.css";

const faqs = [
  {
    q: "How much does website design and development in Mumbai cost?",
    a: "The cost of website design and development in Mumbai depends on factors such as design complexity, number of pages, features, technology stack, and customization requirements. We provide transparent pricing after understanding your business goals and project scope.",
  },
  {
    q: "How long does it take to design and develop a website?",
    a: "Most website design and development projects are completed within 2–6 weeks. Timelines vary based on design revisions, development complexity, integrations, and content readiness.",
  },
  {
    q: "Do you offer website redesign and redevelopment services in Mumbai?",
    a: "Yes, we provide complete website redesign and redevelopment services in Mumbai to improve UI/UX, performance, responsiveness, and backend functionality while maintaining your brand identity.",
  },
  {
    q: "Will my website be mobile-friendly and responsive?",
    a: "Absolutely. All websites we design and develop are fully responsive and optimized to deliver a consistent user experience across mobile phones, tablets, laptops, and desktop devices.",
  },
  {
    q: "Do you build SEO-friendly websites?",
    a: "Yes, our website design and development process follows SEO best practices such as clean code structure, fast loading speed, proper heading hierarchy, and mobile-first optimization.",
  },
  {
    q: "Can I manage or update my website content after development?",
    a: "Yes, we build websites using CMS-based or easy-to-manage systems that allow you to update content, images, and pages without requiring technical expertise.",
  },
  {
    q: "Will I receive full ownership of my website after completion?",
    a: "Yes, once the project is completed, you receive full ownership of your website design files, source code, and digital assets with no vendor lock-in or usage restrictions.",
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
