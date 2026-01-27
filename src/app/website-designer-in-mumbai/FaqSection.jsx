"use client";

import { useState } from "react";
import { FaQuestionCircle, FaPlus, FaMinus } from "react-icons/fa";
import styles from "../../styles/Faq1.module.css";

const faqs = [
  {
    q: "How much does a website designer in Mumbai typically charge?",
    a: "The cost of hiring a website designer in Mumbai depends on the design scope, number of pages, layout complexity, and customization required. We provide a transparent quote after understanding your design needs.",
  },
  {
    q: "How long does it take to design a professional website?",
    a: "Most website design projects are completed within 3–10 working days, depending on design revisions, content readiness, and the number of pages involved.",
  },
  {
    q: "Do you redesign existing websites in Mumbai?",
    a: "Yes, we offer complete website redesign services to improve visual appeal, usability, structure, and user experience while maintaining your brand identity.",
  },
  {
    q: "Will my website be mobile-friendly and responsive?",
    a: "Absolutely. All websites we design are fully responsive and optimized to work seamlessly across mobiles, tablets, laptops, and desktops.",
  },
  {
    q: "Do you design SEO-friendly websites?",
    a: "Yes, our website designs follow SEO-friendly practices such as clean layouts, proper heading structure, fast loading design, and mobile responsiveness.",
  },
  {
    q: "Can I manage or update my website content after design is completed?",
    a: "Yes, we design websites using CMS-based or easy-to-manage structures, allowing you to update text, images, and content without technical help.",
  },
  {
    q: "Will I get full ownership of my website design?",
    a: "Yes, once the project is completed, you receive full ownership of the website design, layout files, and visual assets with no restrictions or lock-ins.",
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
