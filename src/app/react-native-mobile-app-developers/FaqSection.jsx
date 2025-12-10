"use client";
import { useState } from "react";
import styles from "../../styles/covered-section.module.css";

const faqs = [
   {
    q: 'Why choose React Native for mobile app development?',
    a: 'React Native allows cross-platform app development with a single codebase. It offers fast performance, reduced costs, and a native-like user experience.',
  },
   {
    q: 'Is React Native good for both Android and iOS apps?',
    a: 'Yes. React Native enables shared development for Android and iOS with performance close to native apps.',
  },
   {
    q: 'Can you help us with app design too?',
    a: ' Absolutely. Our UI/UX team designs every screen from scratch with a focus on user flow and brand alignment.',
  },
   {
    q: 'Do you offer maintenance after the app is live ?',
    a: 'Yes. We provide ongoing maintenance, updates, and support plans post-launch.',
  },
   {
    q: 'Will the app work on tablets as well?',
    a: ' Yes. We build responsive apps optimized for both smartphones and tablets.',
  },
   {
    q: 'Can we migrate our existing app to React Native?',
    a: 'Definitely. We’ve handled multiple app migrations and ensure your data and functionality remain intact.',
  },
   {
    q: 'How long does it take to build a React Native app?',
    a: 'Timelines depend on features and complexity, but React Native generally speeds up development since most of the code works across both platforms.',
  },
   {
    q: 'Can you integrate third-party APIs and backend systems?',
    a: 'Yes. We integrate APIs, payment gateways, CRM systems, and any custom backend you use.',
  },
   {
    q: 'Will my React Native app be scalable as my user base grows?',
    a: 'Absolutely. We follow best practices, modular architecture, and optimized code to ensure your app scales smoothly with increasing traffic.',
  },
   {
    q: 'Do you assist with publishing the app to the App Store and Play Store?',
    a: 'Yes. We handle the entire deployment process, including build preparation, compliance checks, and submission to both stores.',
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
