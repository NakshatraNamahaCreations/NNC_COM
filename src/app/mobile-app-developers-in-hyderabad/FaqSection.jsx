"use client";
import { useState } from "react";
import styles from "../../styles/covered-section.module.css";

const faqs = [
   {
    q: 'Why should I choose Nakshatra Namaha Creations for my app project?',
    a: 'At Nakshatra Namaha Creations, we combine creativity, technical expertise, and industry knowledge to deliver apps that are secure, scalable, and designed for growth.',
  },
 
   {
    q: 'Does Nakshatra Namaha Creations build both iOS and Android apps?',
    a: 'Yes! Our team at Nakshatra Namaha Creations specializes in both native iOS and Android apps, as well as cross-platform solutions using Flutter and React Native.',
  },
   {
    q: 'What industries does Nakshatra Namaha Creations serve?',
    a: 'Nakshatra Namaha Creations has worked across healthcare, retail, e-commerce, finance, education, and more. Our apps are tailored to match each industry’s unique needs.',
  },
  {
    q: 'How does Nakshatra Namaha Creations ensure app quality?',
    a: 'Every app developed by Nakshatra Namaha Creations goes through rigorous QA and testing, ensuring high performance, strong security, and bug-free user experiences.',
  },
 
   {
    q: 'Can Nakshatra Namaha Creations provide long-term app support?',
    a: 'Absolutely. Nakshatra Namaha Creations offers ongoing maintenance, updates, and feature enhancements to keep your app relevant and future-ready.',
  },
   {
    q: 'I only have an idea—can you help me shape it into a full app?',
    a: 'Yes! Many clients come to us with just a rough concept. We’ll guide you through planning, design, development, and launch, turning your idea into a working app.',
  },
 {
    q: 'How do I get started with your team?',
    a: 'It’s simple—just reach out to us. We’ll set up a consultation to understand your needs and suggest the best development approach for your project.',
  },
 
   {
    q: 'Will I be updated during the development process?',
    a: 'Definitely. We believe in collaboration. You’ll receive regular updates, review milestones, and share feedback to ensure the app matches your vision. ',
  },
   {
    q: 'Can I request new features after the app is launched?',
    a: 'Of course. Many clients continue working with us to add features, enhance designs, and roll out updates as their business grows.',
  },
  {
    q: 'What makes your team different from other developers?',
    a: 'Beyond coding, we act as your strategic partner. We focus on innovation, scalability, and business outcomes, ensuring your app delivers real results—not just downloads.',
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
