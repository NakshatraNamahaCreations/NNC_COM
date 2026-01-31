"use client";

import { useState } from "react";
import { FaQuestionCircle, FaPlus, FaMinus } from "react-icons/fa";
import styles from "../../styles/Faq1.module.css";

const faqs = [
  {
    q: "How much does Social Media Marketing In Mumbai charge?",
    a: "The cost of Social Media Marketing In Mumbai depends on factors such as campaign scope, platforms, content volume, complexity, and revision requirements. We provide transparent pricing after understanding your social media marketing needs.",
  },
  {
    q: "Do you handle strategy creation and campaign planning?",
    a: "Yes, we assist with social media strategy, content planning, and creative direction to ensure all campaigns align with your brand identity and business objectives.",
  },
  {
    q: "What Social Media Marketing In Mumbai do you offer?",
    a: "We offer a wide range of Social Media Marketing In Mumbai including content creation, social media management, paid campaigns, brand promotions, and custom social media solutions.",
  },
  {
    q: "Will the content match our brand identity?",
    a: "Absolutely. Every social media campaign is created based on your brand guidelines, color palette, tone of voice, and communication goals to ensure consistency across platforms.",
  },
  {
    q: "Are social media marketing services suitable for different platforms?",
    a: "Yes, our social media marketing services are optimized for platforms such as Instagram, Facebook, LinkedIn, Twitter, and other digital marketing channels.",
  },
  {
    q: "Can we request changes or revisions during the social media marketing process?",
    a: "Yes, our social media marketing process includes structured review stages that allow you to share feedback and request revisions during content creation and campaign optimization.",
  },
  {
    q: "Will we receive full ownership of social media accounts and content?",
    a: "Yes, clients retain full ownership and control over all social media accounts, content, and campaign data, with no lock-ins.",
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
