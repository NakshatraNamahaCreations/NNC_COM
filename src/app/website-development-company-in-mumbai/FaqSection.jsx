"use client";
import { useState } from "react";
import styles from "../../styles/covered-section.module.css";

const faqs = [
   {
    q: 'Why choose Nakshatra Namaha Creations as your website development company in Mumbai?',
    a: 'Nakshatra Namaha Creations combines creativity, technology, and SEO expertise to deliver results-oriented websites that boost visibility and conversions.',
  },
 
{
    q: 'Do you offer customized website development in Mumbai?',
    a: 'Yes. Our website development company in Mumbai creates custom designs based on your brand, industry, and target audience.',
  },
 {
    q: 'Can you build e-commerce websites in Mumbai?',
    a: 'Absolutely! As a full-service e-commerce website development company in Mumbai, we build secure, scalable online stores that convert visitors into buyers.',
  },
{
    q: 'Do you provide ongoing website maintenance in Mumbai?',
    a: 'Yes. Our website development company in Mumbai offers continuous maintenance, updates, and performance monitoring.',
  },

 {
    q: 'Are your websites SEO-optimized during development?',
    a: 'Every site built by our website development company in Mumbai is SEO-friendly with clean code and optimized metadata.',
  },
    {
    q: 'What is the cost of hiring a website development company in Mumbai?',
    a: 'Pricing depends on the project scope — basic business sites are affordable, while custom web apps require higher investment.',
  },
 
{
    q: 'Which industries do you serve?',
    a: 'Our website development company in Mumbai serves healthcare, real estate, retail, education, manufacturing, and more.',
  },
 {
    q: 'Will my website be mobile-friendly?',
    a: 'Yes, as a mobile-first website development company in Mumbai, we ensure perfect functionality on all devices.',
  },
{
    q: 'Do you also handle domain and hosting?',
    a: 'Yes, we offer domain registration, hosting, and SSL setup — everything under one roof at our website development company in Mumbai.',
  },
 {
    q: 'How do I know Nakshatra Namaha Creations is right for me?',
    a: 'Our portfolio, transparent communication, and proven results make us a trusted website development company in Mumbai.',
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
