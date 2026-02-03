"use client";

import { useState } from "react";
import { FaQuestionCircle, FaPlus, FaMinus } from "react-icons/fa";
import styles from "../../styles/Faq1.module.css";

const faqs = [
  {
    q: "How much does a software development company in Mumbai charge?",
    a: "The cost of software development in Mumbai depends on factors such as project scope, features, technology stack, integrations, security requirements, and timelines. A detailed estimate is shared after understanding your business requirements.",
  },
  {
    q: "How long does software development usually take?",
    a: "Software development timelines vary based on complexity and functionality. Most custom software projects take between 6 to 16 weeks, with clear milestones defined before development begins.",
  },
  {
    q: "Do you provide custom software development services?",
    a: "Yes, as a professional software development company in Mumbai, we specialize in building custom software solutions tailored to your business workflows, operational needs, and long-term growth goals.",
  },
  {
    q: "Can you integrate software with our existing systems?",
    a: "Yes, we develop software solutions that integrate seamlessly with your existing systems, third-party tools, APIs, and databases to ensure smooth operations and data flow.",
  },
  {
    q: "Is the software secure and scalable?",
    a: "Yes, our software development approach focuses on security, performance, and scalability. We follow best practices for data protection, access control, and system architecture to support future growth.",
  },
  {
    q: "Will we get full ownership of the software?",
    a: "Yes, once the software development project is completed, you receive full ownership of the software, including complete source code and intellectual property rights.",
  },
  {
    q: "Do you develop software for specific industries in Mumbai?",
    a: "Yes, we build software solutions for various industries including healthcare, finance, ecommerce, real estate, education, logistics, and service-based businesses in Mumbai.",
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
