"use client";
import { useState } from "react";
import styles from "../../styles/covered-section.module.css";

const faqs = [
   {
    q: 'Why choose Node.js for backend development?',
    a: 'Node.js is fast, lightweight, and handles concurrent requests efficiently. It’s perfect for real-time apps, APIs, and scalable platforms.',
  },
 
   {
    q: 'What’s the process to hire NodeJS developers from your team?',
    a: 'You can contact us with your project needs. Based on the scope, we’ll share developer profiles or assemble a custom team for you. You can hire hourly, monthly, or per project.',
  },
   {
    q: 'Do you offer post-launch support?',
    a: 'Absolutely. We provide maintenance, monitoring, bug fixes, and performance tuning as part of our post-launch services.',
  },
 
   {
    q: 'Can you migrate my existing backend to Node.js?',
    a: 'Yes, we specialize in migration projects and will ensure minimal downtime and data integrity during the process.e ',
  },
   {
    q: 'What industries do you serve with Node.js development?',
    a: 'We’ve delivered solutions in eCommerce, healthcare, fintech, SaaS, logistics, and more.',
  },
 
   {
    q: 'Are your Node.js developers available for remote work?',
    a: 'Yes, our developers work in hybrid and remote models, depending on your preference and project requirements.',
  },
 
   {
    q: 'Do you provide end-to-end Node.js development services?',
    a: 'Yes, we handle everything from concept and architecture design to coding, testing, deployment, and long-term maintenance — ensuring your Node.js application runs efficiently and scales smoothly.',
  },
 
   {
    q: 'Can Node.js be used for enterprise-grade applications?',
    a: 'Absolutely. Node.js is ideal for enterprise-level systems due to its scalability, microservices architecture, and ability to handle high volumes of traffic with low latency.',
  },
   {
    q: 'Will you integrate third-party APIs into my Node.js project?',
    a: 'Yes, we have extensive experience integrating RESTful and GraphQL APIs, payment gateways, cloud services, and other third-party tools into Node.js applications.',
  },
 
   {
    q: 'How do you ensure the security of Node.js applications?',
    a: 'We follow best practices such as input validation, authentication, encryption, and regular code audits to safeguard your Node.js application from vulnerabilities and threats.',
  },

];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Frequently Asked Questions</h2>

        <div className={styles.faqBox}>
          {faqs.map((item, i) => (
            <div className={styles.aligned} key={i}>
              <div className={styles.content} onClick={() => toggle(i)}>
                <div className={styles.question}>{item.q}</div>
                <div className={styles.iconWrap}>
                  <span className={styles.icon}>
                    {openIndex === i ? "–" : "+"}
                  </span>
                </div>
              </div>

              {openIndex === i && (
                <div className={styles.answer}>{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
