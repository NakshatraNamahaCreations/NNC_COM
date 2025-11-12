"use client";
import React, { useState } from "react";
import styles from "@/styles/FaqSection.module.css";
import Link from "next/link";

const faqs = [
  {
    question:
      "Why choose Nakshatra Namaha Creations as your Mobile App Development Company in RR Nagar?",
    answer:
      "We provide full-cycle app development  from design to deployment  ensuring high-quality, scalable apps that meet business goals.",
  },
  {
    question:
      "Do you build both Android and iOS mobile apps?",
    answer:
      "Yes. Our Mobile App Development Company in RR Nagar develops Android, iOS, and cross-platform apps using the latest technologies.",
  },
  {
    question:
      "What industries do you serve?",
    answer:
      "We serve industries like healthcare, e-commerce, education, real estate, and travel with tailor-made app solutions",
  },
  {
    question:
      "Can you redesign my existing mobile app?",
    answer:
      "Absolutely. We revamp outdated apps to improve design, speed, and performance while maintaining your brand identity.",
  },
  {
    question:
      "How long does mobile app development take?",
    answer:
      "Timeline depends on app complexity  usually 4–10 weeks for standard apps and longer for enterprise projects",
  },
  {
    question:
      "Do you offer post-launch maintenance?",
    answer:
      "Yes, our Mobile App Development Company in RR Nagar provides continuous support, updates, and performance enhancements.",
  },



];

const searchLinks = [
  {
    term: "JP Nagar",
    href: "/website-development-company-in-jpnagar",
  },
  {
    term: "Indiranagar",
    href: "/website-development-company-in-indiranagar",
  },
  {
    term: "Jayanagar",
    href: "/website-designing-company-in-jayanagar",
  },
    {
    term: "HSR Layout",
    href: "/website-development-company-in-hsr-layout",
  },
    {
    term: "Malleshwaram",
    href: "/website-development-company-in-malleshwaram",
  },
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
    {/* <section className={styles.searchQueriesSection}>
      <div className={styles.searchQueriesContainer}>
        <h2 className={styles.searchQueriesHeading}>
          Other Website Development Company Localities
        </h2>

    <ul className={styles.searchQueriesList}>
  {searchLinks.map((item) => (
    <li key={item.term} className={styles.searchQueriesItem}>
      <Link
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.searchQueriesLink}
      >
        {item.term}
      </Link>
    </li>
  ))}
</ul>
      </div>
    </section> */}
    </>
  );
}
