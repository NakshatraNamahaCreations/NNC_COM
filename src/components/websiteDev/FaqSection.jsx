"use client";
import React, { useState } from "react";
import styles from "@/styles/FaqSection.module.css";
import Link from "next/link";

const faqs = [
  {
    question:
      "What are the benefits of hiring a mobile app development company in Bangalore?",
    answer:
      "Bangalore offers skilled developers, advanced infrastructure, and innovative solutions for businesses of all sizes.",
  },
  {
    question:
      "What industries do mobile app development companies in Bangalore cater to?",
    answer:
      "They serve industries like healthcare, e-commerce, education, logistics, real estate, fintech, and more.",
  },
  {
    question:
      "Do mobile app development companies in Bangalore offer post-launch support?",
    answer:
      "Yes, most companies provide regular updates, bug fixes, maintenance, and performance monitoring.",
  },
  {
    question: "How can I ensure my app idea remains confidential?",
    answer:
      "Sign an NDA (Non-Disclosure Agreement) with the company before sharing your project details.",
  },
  {
    question:
      "Can app development companies in Bangalore integrate advanced features like AI and IoT?",
    answer:
      "Yes, leading companies specialize in implementing AI, IoT, AR/VR, and other emerging technologies.",
  },
];

const terms = [
  "Web Development Services",
  "Web Development Company",
  "Web Designing Company in Bangalore",
  "Website Designers in Bangalore",
  "Best Website Developers in Bangalore",
  "Website Developer",
  "Website Redesign Services",
  "Website Designer Near Me",
  "Website Development Agency in Bangalore",
  "Web Development Company in Bangalore",
  "Top Web Development Services in Bangalore",
  "Web Design",
  "Web Development",
  "Best Website Redesign Services",
  "CMS Web Designer",
  "Website Designers",
  "Web Development Agency in Bangalore",
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <section className={styles.faqSection}>
        <div className={styles.faqSection2}>
      <div className={styles.faqSection1}>
        <h3>FREQUENTLY ASKED QUESTION'S</h3>
      </div>
      <div className={styles.faqRight}>
        {faqs.map((faq, i) => (
          <div key={i} className={styles.faqItem}>
            <div className={styles.faqHeader} onClick={() => toggleFAQ(i)}>
              <h3>
                <span className={styles.number}>
                  {String(i + 1).padStart(2, "0")}.
                </span>{" "}
                {faq.question}
              </h3>
              <span className={styles.icon}>
                {activeIndex === i ? "−" : "+"}
              </span>
            </div>

            {activeIndex === i && (
              <p className={styles.faqAnswer}>{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
      </div>
    </section>
    <section className={styles.searchQueriesSection}>
      <div className={styles.searchQueriesContainer}>
        <h2 className={styles.searchQueriesHeading}>
          WHAT PEOPLE ARE SEARCHING FOR
        </h2>

        <ul className={styles.searchQueriesList}>
          {terms.map((t) => (
       <li key={t} className={styles.searchQueriesItem}>
  <span className={styles.searchQueriesLink}>{t}</span>
</li>

          ))}
        </ul>
      </div>
    </section>
    </>
  );
}
