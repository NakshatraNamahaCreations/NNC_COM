"use client";
import { useState } from "react";
import styles from "../../styles/covered-section.module.css";

const faqs = [
   {
    q: 'Do you only work with big companies, or do you also help startups?',
    a: 'We work with both! Many of our favorite projects have been for startups. Whether you’re just starting out or already established, our team tailors the app to fit your goals.',
  },
 
   {
    q: 'Can you integrate third-party tools into my app?',
    a: 'Absolutely. From payment gateways and CRMs to social media logins and analytics, our developers specialize in smooth integrations that extend the functionality of your app.',
  },
   {
    q: 'Will I be involved during the development process?',
    a: 'Yes, we believe in collaboration. You’ll receive regular updates, review milestones, and share feedback at each stage, ensuring the final product matches your vision.',
  },
   {
    q: 'Do you provide design services too, or just coding?',
    a: 'Both! Our designers handle UI/UX, ensuring the app looks stunning and is easy to use, while our developers take care of performance, speed, and reliability.',
  },
   {
    q: 'What happens if I want to add new features after launch?',
    a: 'No problem at all. We offer post-launch support and can roll out updates or add new features as your business grows.',
  },
   {
    q: 'How secure will my app be?',
    a: 'Very secure. We use the latest security practices like data encryption, secure APIs, and compliance with industry standards to protect user information.',
  },
   {
    q: 'Can you help me publish my app on the App Store and Google Play?',
    a: 'Yes! We don’t just develop the app; we also assist with the submission process, guidelines, and optimization so your app gets approved smoothly.',
  },
   {
    q: 'Do you offer testing before launch?',
    a: ' Definitely. Every app goes through rigorous QA, including functionality, performance, and device testing, to ensure it’s bug-free before going live.',
  },
   {
    q: 'What if I don’t have a clear idea yet? Can you guide me?',
    a: 'Of course. Many clients come to us with just a rough idea. Our team helps refine your concept, plan features, and design a roadmap that makes sense for your business.',
  },
   {
    q: 'How do I get started with you?',
    a: 'It’s simple. Just reach out to us with your idea or requirements, and we’ll schedule a consultation to understand your needs and suggest the best path forward.',
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
