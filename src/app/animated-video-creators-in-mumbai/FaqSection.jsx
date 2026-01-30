"use client";

import { useState } from "react";
import { FaQuestionCircle, FaPlus, FaMinus } from "react-icons/fa";
import styles from "../../styles/Faq1.module.css";

const faqs = [
  {
    q: "How much do animated video creators in Mumbai charge?",
    a: "The cost of animated video creation in Mumbai depends on factors such as animation style, video length, complexity, scripting requirements, and revision cycles. We provide clear and transparent pricing after understanding your project needs.",
  },
  {
    q: "Do you handle scripting and concept development for animated videos?",
    a: "Yes, we assist with concept development, scripting, and storyboarding to ensure the animated video communicates your message clearly and aligns with your business objectives.",
  },
  {
    q: "What types of animated videos do you create?",
    a: "We create a variety of animated videos including explainer videos, motion graphics, promotional animations, product demos, training videos, and brand storytelling content.",
  },
  {
    q: "Will the animated video match our brand identity?",
    a: "Absolutely. Every animated video is developed based on your brand guidelines, visual style, tone, and communication goals to maintain consistency.",
  },
  {
    q: "Are animated videos suitable for websites and digital platforms?",
    a: "Yes, animated videos are optimized for websites, social media platforms, landing pages, presentations, digital advertisements, and internal communication channels.",
  },
  {
    q: "Can we request changes or revisions during the animation process?",
    a: "Yes, our animation process includes structured review stages that allow you to share feedback and request revisions during storyboarding, animation, and final delivery.",
  },
  {
    q: "Will we receive full ownership of the animated video content?",
    a: "Yes, once the project is completed, you receive full ownership of all animated video files and final outputs, with no usage restrictions or lock-ins.",
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
