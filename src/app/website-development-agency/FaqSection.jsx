"use client";
import { useState } from "react";
import styles from "../../styles/covered-section.module.css";

const faqs = [
   {
    q: 'What does a Website Development Agency specialize in?',
    a: 'A Website Development Agency specializes in designing, developing, and maintaining websites that support business goals, user experience, and technical performance.',
  },
 
   {
    q: 'How is a Website Development Agency different from freelancers?',
    a: 'A Website Development Agency provides structured processes, dedicated teams, quality assurance, and long-term support that individual freelancers often cannot offer consistently.',
  },
   {
    q: 'Can a Website Development Agency handle complex projects?',
    a: 'Yes, a professional Website Development Agency is equipped to manage complex requirements, integrations, and scalable architectures for growing businesses.',
  },
   {
    q: 'Does a Website Development Agency offer post-launch support?',
    a: 'Most reliable Website Development Agency partners provide ongoing support, updates, and optimization after the website is launched.',
  },
   {
    q: 'How long does it take to build a website with a Website Development Agency?',
    a: 'Timelines vary based on scope, but a Website Development Agency follows structured phases to ensure quality and timely delivery.',
  },
   {
    q: 'Is working with a Website Development Agency suitable for small businesses?',
    a: 'A Website Development Agency can support businesses of all sizes by tailoring solutions to match goals, complexity, and future growth plans.',
  },
   {
    q: 'How does a Website Development Agency ensure website security?',
    a: 'A professional Website Development Agency follows secure coding practices, implements SSL, protects against common vulnerabilities, and regularly updates frameworks to keep websites safe and reliable.',
  },
   {
    q: 'Can a Website Development Agency redesign an existing website?',
    a: 'Yes, a Website Development Agency can revamp existing websites by improving design, performance, usability, and technology while retaining essential content and business objectives.',
  },
   {
    q: 'Will a Website Development Agency build websites that are SEO-friendly?',
    a: 'A Website Development Agency builds websites with SEO-friendly structures, clean code, optimized page speed, and proper metadata to support better visibility in search engines.',
  },
   {
    q: 'What industries does a Website Development Agency work with?',
    a: 'A Website Development Agency works across multiple industries, including startups, small businesses, enterprises, e-commerce, healthcare, education, and service-based businesses.',
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
