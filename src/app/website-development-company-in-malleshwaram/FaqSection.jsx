"use client";
import React, { useState } from "react";
import styles from "@/styles/FaqSection.module.css";
import Link from "next/link";

const faqs = [
  {
    question:
      "What is the typical timeline for building a website with Nakshatra Namaha Creations?",
    answer:
      "Our Website Development Company in Malleshwaram typically takes 3–8 weeks, depending on project complexity and required features.",
  },
  {
    question:
      "Do you offer post-launch website support and updates?",
    answer:
      "Yes. Our Website Development Company in Malleshwaram provides continuous maintenance, security checks, and content updates.",
  },
   {
    question:
      "Can Nakshatra Namaha Creations assist in improving my site’s search engine rankings?",
    answer:
      "Definitely! As a professional Website Development Company in Malleshwaram, we offer complete SEO services to boost visibility and traffic.",
  },
  {
    question:
      "Are your websites optimized for mobile devices?",
    answer:
      "Absolutely. Every site designed by our Website Development Company in Malleshwaram is fully responsive for a smooth user experience.",
  },
  {
    question:
      "Is it possible to develop an online store with Nakshatra Namaha Creations?",
    answer:
      "Yes, our Website Development Company in Malleshwaram specializes in secure, high-performing e-commerce websites that drive sales.",
  },
  {
    question:
      "How satisfied are your clients with your website development services?",
    answer:
      "Our clients in Malleshwaram consistently praise Nakshatra Namaha Creations for delivering visually appealing, fast-loading, and result-driven websites. Most highlight our transparent process, timely delivery, and ongoing technical support that keeps their sites performing at their best.",
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
    term: "Rajajinagar",
    href: "/website-development-company-in-rajajinagar",
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
