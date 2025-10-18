"use client";
import { useState } from "react";
import styles from "../../styles/covered-section.module.css";

const faqs = [
   {
    q: 'How long does it take to build an iOS app?',
    a: 'It depends on the app’s complexity. A basic app may take 4–6 weeks, while advanced apps with backend systems or integrations can take 10–14 weeks.',
  },
 
  {
    q: 'Can you update an existing iOS app?',
    a: 'Yes, we can improve, redesign, or re-engineer existing apps to meet new goals or align with newer iOS standards.',
  },
   {
    q: 'Will the app be compatible with the latest iPhones and iPads?',
    a: 'Yes. We test for the latest devices and iOS versions, and ensure backwards compatibility when needed.',
  },
 
  {
    q: 'What happens if Apple rejects my app during review?',
    a: 'We handle the submission process and address any rejections with prompt fixes or clarifications.',
  },
 
   {
    q: 'Do I need to host the app?',
    a: 'The app itself is hosted on the App Store. However, if it connects to a backend, we help you set up cloud or server hosting for databases, APIs, and admin panels.',
  },
 
  {
    q: 'How much does it cost to develop an iOS app?',
    a: 'Costs vary based on scope. We offer free consultations to understand your needs and provide a realistic quote.',
  },
 
   {
    q: 'Do you provide end-to-end iOS app development services?',
    a: 'Yes, we handle the entire iOS app development process—from strategy, design, and coding to testing, App Store submission, and post-launch maintenance.',
  },
 
  {
    q: 'Can you integrate third-party APIs into an iOS app?',
    a: 'Absolutely. We can integrate APIs for payment gateways, maps, analytics, social media, and more to extend your app’s functionality and enhance user experience.',
  },
   {
    q: 'Will my iOS app be optimized for performance and battery life?',
    a: 'Yes. Our iOS developers follow best practices in memory management, background processing, and UI optimization to ensure smooth performance and efficient battery usage.',
  },
 
  {
    q: 'Do you offer maintenance and updates after launch?',
    a: 'Yes, we provide ongoing support and updates to keep your app compatible with the latest iOS versions and devices, ensuring long-term stability and performance.',
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
