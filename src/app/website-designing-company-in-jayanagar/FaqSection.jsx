"use client";
import React, { useState } from "react";
import styles from "@/styles/FaqSection.module.css";
import Link from "next/link";

const faqs = [
  {
    question:
      "Do you offer custom website design for local businesses in Jayanagar?",
    answer:
      "Yes—our Website Designing Company in Jayanagar tailors designs for startups, clinics, stores, and service providers.",
  },
  {
    question:
      "How long does it take to complete a website?",
    answer:
      "Typical timelines are 7–15 working days. As a Website Designing Company in Jayanagar, we commit to clear milestones.",
  },
  {
    question:
      "Will my website be mobile-friendly and SEO optimized?",
    answer:
      "Absolutely. Our Website Designing Company in Jayanagar ships responsive layouts and on-page SEO from day one.",
  },
  {
    question:
      "Can you help with domain registration and hosting?",
    answer:
      "Yes full setup and guidance from a Website Designing Company in Jayanagar that handles end-to-end launch.",
  },
  {
    question:
      "Do you provide website maintenance after delivery?",
    answer:
      "Yes monthly and annual plans from a Website Designing Company in Jayanagar that keeps sites secure and fast.",
  },
  {
    question:
      "What is the cost of building a website in Jayanagar?",
    answer:
      "Packages start at ₹14,499; final pricing depends on pages, features, and tech—quoted by our Website Designing Company in Jayanagar after a quick scoping call.",
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
    term: "Rajajinagar",
    href: "/website-development-company-in-rajajinagar",
  },
    {
    term: "HSR Layout",
    href: "/website-development-company-in-hsr-layout",
  },
//     {
//     term: "Electronic City",
//     href: "/",
//   },
//     {
//     term: "Whitefield",
//     href: "/",
//   },
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
