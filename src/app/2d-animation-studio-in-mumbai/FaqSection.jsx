"use client";
import { useState } from "react";
import styles from "../../styles/covered-section.module.css";

const faqs = [
   {
    q: 'Why choose Nakshatra Namaha Creations as your 2D animation studio in Mumbai?',
    a: 'Because we combine storytelling, creativity, and technology to produce visually compelling and strategically impactful animations.',
  },
 
     {
    q: 'Do you handle complete production?',
    a: 'Yes! Our 2D animation studio in Mumbai manages everything — scriptwriting, storyboarding, voice-overs, sound design, and final delivery.',
  },
     {
    q: 'Which industries do you serve?',
    a: 'Our 2D animation studio in Mumbai has experience in education, healthcare, e-commerce, finance, and entertainment sectors.',
  },
    {
    q: 'How do you maintain quality?',
    a: 'Every animation goes through detailed reviews and quality checks at our 2D animation company in Mumbai before final approval.',
  },
 
     {
    q: 'Can you create custom animated characters?',
    a: 'Absolutely. Our creative team designs unique characters that reflect your brand’s personality.',
  },
     {
    q: 'I have just an idea. Can you help me develop it?',
    a: 'Yes, our 2D animation studio in Mumbai assists in script development, concept design, and full production to bring your idea to life.',
  },
   {
    q: 'Will I be involved during the process?',
    a: 'Definitely. Collaboration is key — our 2D animation studio in Mumbai involves clients at every stage for feedback and approval.',
  },
 
     {
    q: 'Can animations be tailored to brand colors?',
    a: 'Yes. Every project from our 2D animation studio in Mumbai is customized to your brand’s tone, colors, and identity.',
  },
     {
    q: 'What if I need revisions?',
    a: 'We include multiple revision rounds. Your satisfaction is our top priority at Nakshatra Namaha Creations, a trusted 2D animation company in Mumbai.',
  },
       {
    q: 'Do you offer packages for startups or small businesses?',
    a: 'Yes, our 2D animation studio in Mumbai offers flexible pricing suitable for startups, SMEs, and large enterprises alike.',
  }

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
