"use client";
import { useState } from "react";
import styles from "../../styles/covered-section.module.css";

const faqs = [
   {
    q: 'Do you work with startups as well as enterprises?',
    a: 'Yes! As a dynamic mobile app development company in Mumbai, we design flexible solutions for startups, SMEs, and large enterprises.',
  },
 
   {
    q: 'Can you integrate third-party APIs into my app?',
    a: 'Absolutely. Our mobile app development company in Mumbai handles payment gateways, CRMs, analytics, and social integrations.',
  },
   {
    q: 'Will I be involved during development?',
    a: 'Yes, we follow a transparent process. As your mobile app development company in Mumbai, we share regular updates and milestones.',
  },
   {
    q: 'Do you provide both design and coding?',
    a: 'Yes — from UI/UX design to backend logic, everything is managed by our in-house mobile app development company in Mumbai team.',
  },
 
   {
    q: 'What if I need new features later?',
    a: 'No problem! We offer continuous support and updates through our mobile app development company in Mumbai services.',
  },
   {
    q: 'How secure will my app be?',
    a: 'Security is our top priority. Our mobile app development company in Mumbai implements encryption, SSL, and secure APIs.',
  },
     {
    q: 'Can you help publish the app?',
    a: 'Yes, our mobile app development company in Mumbai handles app store submissions, ASO, and compliance checks.',
  },
 
   {
    q: 'Do you offer QA testing?',
    a: 'Definitely — we conduct functionality, performance, and security tests for every project at our mobile app development company in Mumbai.',
  },
   {
    q: 'I only have an idea. Can you help me plan it?',
    a: ' Of course! Our experts at Nakshatra Namaha Creations, a top mobile app development company in Mumbai, refine concepts and create actionable roadmaps.',
  },
   {
    q: 'How do I get started?',
    a: 'Contact us with your idea — our mobile app development company in Mumbai will schedule a consultation and begin the process.',
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
