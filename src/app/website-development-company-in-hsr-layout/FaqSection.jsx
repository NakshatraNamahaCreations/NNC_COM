"use client";
import React, { useState } from "react";
import styles from "@/styles/FaqSection.module.css";
import Link from "next/link";

const faqs = [
  {
    question:
      "Do you provide website maintenance after development?",
    answer:
      "Yes. Our Website Development Company in HSR Layout offers post-launch maintenance and support to keep your site secure and updated.",
  },
  {
    question:
      "Will my website be mobile-friendly?",
    answer:
      "Absolutely. Every project from our Website Development Company in HSR Layout is responsive across desktop, tablet, and mobile.",
  },
  {
    question:
      "Do you help with domain and hosting?",
    answer:
      "Yes. We assist with domain registration, hosting setup, and provider recommendations — end-to-end support from a Website Development Company in HSR Layout.",
  },
  {
    question:
      "Can you integrate payment gateways on my website?",
    answer:
      "Yes. We integrate Razorpay, PayU, Stripe, and more — a core capability of our Website Development Company in HSR Layout.",
  },
  {
    question:
      "Can you develop multi-language websites?",
    answer:
      "Yes. Our Website Development Company in HSR Layout builds multilingual sites to help you reach a wider audience.",
  },
  {
    question:
      "Do you work with startups and small businesses?",
    answer:
      "Yes. We support startups, local businesses, and enterprises with flexible packages from our Website Development Company in HSR Layout.",
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
    href: "/",
  },
  {
    term: "Indiranagar",
    href: "/",
  },
  {
    term: "Jayanagar",
    href: "/",
  },
    {
    term: "Malleshwaram",
    href: "/website-development-company-in-malleshwaram",
  },
    {
    term: "Electronic City",
    href: "/",
  },
    {
    term: "Whitefield",
    href: "/",
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
