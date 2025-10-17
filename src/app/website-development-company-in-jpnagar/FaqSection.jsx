"use client";
import React, { useState } from "react";
import styles from "@/styles/FaqSection.module.css";
import Link from "next/link";

const faqs = [
  {
    question:
      "Do you provide mobile-friendly website designs?",
    answer:
      "Yes—every build is responsive and optimized for mobile, tablet, and desktop.",
  },
  {
    question:
      "Can I update the website content myself after it’s built?",
    answer:
      "Absolutely. We deliver CMS-powered sites (e.g., WordPress) so you can manage content easily.",
  },
  {
    question:
      "Do you offer SEO services along with website design?",
    answer:
      "Yes—on-page SEO is standard, and we offer full SEO programs for ranking and visibility.",
  },
  {
    question:
      "Can you redesign my existing website?",
    answer:
      "Yes—we modernize UX, improve speed, and add features while retaining brand essence.",
  },
  {
    question:
      "Can you integrate third-party tools like WhatsApp, Google Maps, or payment gateways?",
    answer:
      "Yes—integrations include WhatsApp, Maps, Razorpay/Paytm/Stripe, CRMs, analytics, and more.",
  },
  {
    question:
      "Can I see some of your past work before getting started?",
    answer:
      "Of course—share your industry and goals; we’ll provide relevant portfolio examples.",
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
