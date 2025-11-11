"use client";
import React, { useState } from "react";
import styles from "@/styles/FaqSection.module.css";
import Link from "next/link";

const faqs = [
  {
    question:
      " Why is Nakshatra Namaha Creations the best Website Development Company in RR Nagar?",
    answer:
      " We combine creativity, technology, and strategy to build websites that drive business growth and ensure long-term performance.",
  },
  {
    question:
      "Do you provide custom website design in RR Nagar?",
    answer:
      "Yes. Every project is customized to match your brand’s goals, visual identity, and functionality needs.",
  },
  {
    question:
      "Can you build e-commerce websites in RR Nagar?",
    answer:
      "Absolutely. We create secure, scalable e-commerce platforms with product management, cart systems, and payment gateways.",
  },
  {
    question:
      "Will my website be optimized for SEO?",
    answer:
      "Yes, all websites developed by us are SEO-friendly, optimized for loading speed, mobile-ready, and structured for Google indexing.",
  },
  {
    question:
      "How much does website development cost in RR Nagar?",
    answer:
      "Pricing depends on your project scope, features, and design complexity. We provide transparent quotes after a quick consultation.",
  },
  {
    question:
      "Do you offer website maintenance services?",
    answer:
      "Yes, our team provides continuous maintenance, performance monitoring, and upgrades to keep your website efficient.",
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
  //   {
  //   term: "Electronic City",
  //   href: "/",
  // },
  //   {
  //   term: "Whitefield",
  //   href: "/",
  // },
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
    <section className={styles.searchQueriesSection}>
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
    </section>
    </>
  );
}
