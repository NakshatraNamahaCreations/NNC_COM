"use client";

import { useState } from "react";
import { FaQuestionCircle, FaPlus, FaMinus } from "react-icons/fa";
import styles from "../../styles/Faq1.module.css";

const faqs = [
  {
    q: "How much does a graphic design company in Mumbai charge?",
    a: "The cost of graphic design services in Mumbai depends on factors such as the type of design, project scope, number of creatives, complexity, and revision requirements. We provide transparent pricing after understanding your design needs.",
  },
  {
    q: "Do you handle concept creation and design strategy?",
    a: "Yes, we assist with design strategy, concept ideation, and creative direction to ensure all visual assets align with your brand identity and business objectives.",
  },
  {
    q: "What graphic design services do you offer?",
    a: "We offer a wide range of graphic design services including logo design, branding, social media creatives, marketing collaterals, brochures, posters, digital ads, and custom visual assets.",
  },
  {
    q: "Will the designs match our brand identity?",
    a: "Absolutely. Every design is created based on your brand guidelines, color palette, tone of voice, and communication goals to ensure visual consistency across all platforms.",
  },
  {
    q: "Are graphic design services suitable for both digital and print platforms?",
    a: "Yes, our graphic designs are optimized for websites, social media, digital advertisements, presentations, and print materials such as brochures, flyers, banners, and packaging.",
  },
  {
    q: "Can we request changes or revisions during the design process?",
    a: "Yes, our graphic design process includes structured review stages that allow you to share feedback and request revisions during the design and refinement stages.",
  },
  {
    q: "Will we receive full ownership of the design files?",
    a: "Yes, once the project is completed, you receive full ownership of all final design files and assets, with no usage restrictions or lock-ins.",
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
