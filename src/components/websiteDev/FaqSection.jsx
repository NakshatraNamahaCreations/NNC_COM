"use client";
import React, { useState } from "react";
import styles from "@/styles/FaqSection.module.css";
import Link from "next/link";

const faqs = [
  {
    question:
      "Why should I hire a website development company in HSR Layout?",
    answer:
      "HSR Layout is a growing tech hub in Bangalore, home to skilled web developers who deliver professional, responsive, and SEO-friendly websites tailored to your business goals.",
  },
  {
    question:
      "What services do website development companies in HSR Layout provide?",
    answer:
      "Most companies offer complete web solutions including website design, development, e-commerce sites, SEO optimization, hosting, and regular maintenance.",
  },
  {
    question:
      "How long does it take to build a website in HSR Layout?",
    answer:
      "The timeline depends on the project’s size and complexity. A basic business website may take 2–3 weeks, while a custom or e-commerce site can take 4–8 weeks or more.",
  },
  {
    question:
      "Can I get an SEO-friendly website developed in HSR Layout?",
    answer:
      "Yes, top website development companies in HSR Layout integrate SEO best practices like fast loading speed, mobile responsiveness, and keyword optimization into every project.",
  },
  {
    question:
      "Do website developers in HSR Layout provide website redesign services?",
    answer:
      "Yes, many companies specialize in redesigning outdated websites with modern layouts, better UI/UX, and improved performance for better conversions.",
  },
  {
    question:
      "What industries do web development companies in HSR Layout serve?",
    answer:
      "They cater to various sectors including healthcare, education, real estate, IT, retail, hospitality, startups, and manufacturing businesses.",
  },
  {
    question:
      "Will my website be mobile-friendly if developed in HSR Layout?",
    answer:
      "Yes, developers in HSR Layout focus on responsive design, ensuring your website looks and functions perfectly on all devices including mobiles and tablets.",
  },
  {
    question:
      "Do website developers in HSR Layout offer ongoing maintenance?",
    answer:
      "Yes, most companies offer post-launch support, including website updates, security monitoring, content changes, and performance optimization.",
  },
  {
    question:
      "Can developers in HSR Layout integrate e-commerce features on my site?",
    answer:
      "Absolutely. Web development firms in HSR Layout can integrate secure payment gateways, shopping carts, inventory management, and order tracking systems.",
  },
  {
    question:
      "How much does website development cost in HSR Layout?",
    answer:
      "Website development costs vary based on design, features, and size. On average, a small business site may cost ₹20,000–₹50,000, while advanced websites or e-commerce portals can range higher.",
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
