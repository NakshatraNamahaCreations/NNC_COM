"use client";
import { useState } from "react";
import styles from "../../styles/covered-section.module.css";

const faqs = [
   {
    q: 'What makes Nakshatra Namaha Creations different from others?',
    a: 'Our Corporate Video Makers focus on storytelling with purpose, blending creativity and strategy to deliver visuals that engage and inspire.',
  },
   {
    q: 'Do you work with startups as well as enterprises? ',
    a: 'Yes. Our Corporate Video Makers cater to businesses of all sizes — from startups to established brands.',
  },
   {
    q: 'Can you help with video marketing post-production?',
    a: 'Absolutely. Our Corporate Video Makers also assist with YouTube optimization, ad campaigns, and social promotions.',
  },
   {
    q: 'Do you offer long-term partnerships?',
    a: 'Yes, many clients retain our Corporate Video Makers for ongoing content creation and visual branding.',
  },
   {
    q: 'What industries do you serve?',
    a: 'Our Corporate Video Makers have worked in technology, healthcare, retail, and education — customizing each project for its audience.',
  },
   {
    q: 'How long does a typical project take?',
    a: 'Most Corporate Video Makers projects run 2–4 weeks, including scripting, filming, and editing.',
  },
   {
    q: 'Can clients join review stages?',
    a: 'Yes. We keep our Corporate Video Makers process fully collaborative with regular review checkpoints.',
  },
   {
    q: 'Do you provide voiceovers or subtitles?',
    a: 'Definitely. Our Corporate Video Makers deliver multilingual voiceovers and subtitles for global use.',
  },
   {
    q: 'Do you shoot across India or abroad?',
    a: 'Yes, our Corporate Video Makers handle shoots nationwide and internationally based on requirements',
  },
   {
    q: 'Is aerial footage available?',
    a: 'Yes. Drone and aerial shots are available through our certified Corporate Video Makers, subject to permissions.',
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
