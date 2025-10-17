"use client";
import React, { useState } from "react";
import styles from "@/styles/FaqSection.module.css";
import Link from "next/link";

const faqs = [
  {
    question:
      "What makes Nakshatra Namaha Creations different from other website developers in Rajajinagar?",
    answer:
      "We are a results-focused Website Development Company in Rajajinagar offering creative, high-performing websites and dedicated post-launch support.",
  },
  {
    question:
      "Can I update my website content myself after it’s built?",
    answer:
      "Yes! Our Website Development Company in Rajajinagar provides CMS solutions like WordPress that let you edit your website content easily.",
  },
  {
    question:
      "How do you ensure my website loads quickly?",
    answer:
      "As an experienced Website Development Company in Rajajinagar, we optimize code, compress images, and use caching for lightning-fast load speeds.",
  },
  {
    question:
      "Will my website be secure from hackers?",
    answer:
      "Absolutely. Our Website Development Company in Rajajinagar implements SSL, firewalls, and regular updates to keep your website protected.",
  },
  {
    question:
      "What if I’m not sure what kind of website I need?",
    answer:
      "No worries — our Website Development Company in Rajajinagar offers free consultations to recommend the best web solution for your business goals.",
  },
  {
    question:
      "What industries does Nakshatra Namaha Creations serve?",
    answer:
      "Our Website Development Company in Rajajinagar works with a wide range of industries including healthcare, education, real estate, e-commerce, and corporate businesses. We tailor every project to suit the client’s niche and audience.",
  },
  // {
  //   question:
  //     "Will my website be mobile-friendly if developed in HSR Layout?",
  //   answer:
  //     "Yes, developers in HSR Layout focus on responsive design, ensuring your website looks and functions perfectly on all devices including mobiles and tablets.",
  // },
  // {
  //   question:
  //     "Do website developers in HSR Layout offer ongoing maintenance?",
  //   answer:
  //     "Yes, most companies offer post-launch support, including website updates, security monitoring, content changes, and performance optimization.",
  // },
  // {
  //   question:
  //     "Can developers in HSR Layout integrate e-commerce features on my site?",
  //   answer:
  //     "Absolutely. Web development firms in HSR Layout can integrate secure payment gateways, shopping carts, inventory management, and order tracking systems.",
  // },
  // {
  //   question:
  //     "How much does website development cost in HSR Layout?",
  //   answer:
  //     "Website development costs vary based on design, features, and size. On average, a small business site may cost ₹20,000–₹50,000, while advanced websites or e-commerce portals can range higher.",
  // },


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
