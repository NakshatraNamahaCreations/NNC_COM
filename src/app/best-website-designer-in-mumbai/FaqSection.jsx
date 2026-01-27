"use client";

import { useState } from "react";
import { FaQuestionCircle, FaPlus, FaMinus } from "react-icons/fa";
import styles from "../../styles/Faq1.module.css";

const faqs = [
  {
    q: "How much does the best website designer in Mumbai typically charge?",
    a: "The cost of hiring the best website designer in Mumbai depends on factors such as design complexity, number of pages, customization level, and project requirements. We provide a transparent and detailed quote after understanding your design goals.",
  },
  {
    q: "How long does it take to design a high-quality website?",
    a: "Most professional website design projects are completed within 3–10 working days, depending on design revisions, content availability, and the overall scope of the website.",
  },
  {
    q: "Do you offer website redesign services in Mumbai?",
    a: "Yes, as one of the best website designers in Mumbai, we specialize in redesigning existing websites to improve visual appeal, usability, structure, and overall user experience while preserving your brand identity.",
  },
  {
    q: "Will my website be mobile-friendly and responsive?",
    a: "Absolutely. All websites designed by our team are fully responsive and optimized to deliver a seamless experience across mobile devices, tablets, laptops, and desktops.",
  },
  {
    q: "Do you design SEO-friendly websites?",
    a: "Yes, our website designs follow SEO-friendly best practices including clean layouts, proper heading hierarchy, fast-loading design, and mobile-first responsiveness to support better search visibility.",
  },
  {
    q: "Can I update or manage my website content after the design is completed?",
    a: "Yes, we design websites using CMS-based or easy-to-manage systems, allowing you to update content, images, and text without needing technical assistance.",
  },
  {
    q: "Will I get full ownership of my website design?",
    a: "Yes, once the project is completed, you receive complete ownership of your website design, layout files, and visual assets with no restrictions or vendor lock-in.",
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
