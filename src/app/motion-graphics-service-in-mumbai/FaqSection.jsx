"use client";

import { useState } from "react";
import { FaQuestionCircle, FaPlus, FaMinus } from "react-icons/fa";
import styles from "../../styles/Faq1.module.css";

const faqs = [
  {
    q: "How much does a Motion Graphic Service In Mumbai charge?",
    a: "The cost of Motion Graphic Service In Mumbai depends on factors such as the type of animation, project scope, number of creatives, complexity, and revision requirements. We provide transparent pricing after understanding your motion graphic needs.",
  },
  {
    q: "Do you handle concept creation and design strategy?",
    a: "Yes, we assist with animation strategy, concept ideation, and creative direction to ensure all motion graphic assets align with your brand identity and business objectives.",
  },
  {
    q: "What Motion Graphic Service In Mumbai do you offer?",
    a: "We offer a wide range of Motion Graphic Service In Mumbai including explainer animations, promotional videos, social media motion creatives, logo animations, and custom animated visual assets.",
  },
  {
    q: "Will the visuals match our brand identity?",
    a: "Absolutely. Every motion graphic is created based on your brand guidelines, color palette, tone of voice, and communication goals to ensure visual consistency across all platforms.",
  },
  {
    q: "Are motion graphic services suitable for both digital and marketing platforms?",
    a: "Yes, our motion graphic services are optimized for websites, social media, digital advertisements, presentations, campaigns, and online marketing platforms.",
  },
  {
    q: "Can we request changes or revisions during the motion graphic process?",
    a: "Yes, our motion graphic process includes structured review stages that allow you to share feedback and request revisions during the animation and refinement stages.",
  },
  {
    q: "Will we receive full ownership of the motion graphic files?",
    a: "Yes, once the project is completed, you receive full ownership of all final motion graphic files and assets, with no usage restrictions or lock-ins.",
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
