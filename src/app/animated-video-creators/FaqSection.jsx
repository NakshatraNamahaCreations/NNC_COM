"use client";
import { useState } from "react";
import styles from "../../styles/covered-section.module.css";

const faqs = [
   {
    q: 'Why choose Nakshatra Namaha Creations for animated videos?',
    a: 'We combine design expertise, storytelling, and marketing knowledge to deliver Animated Video Production that captivates audiences and drives engagement.',
  },
 
   {
    q: 'Do you work with clients outside India?',
    a: 'Yes. Our Animated Video Production process supports international collaboration through online meetings and shared review tools.',
  },
   {
    q: 'Can you match our existing brand style and color palette?',
    a: 'Absolutely. Every Animated Video Production aligns with your brand guidelines for consistent visuals.',
  },
 
   {
    q: 'Do you create branding elements like logo animations or intro/outro clips?',
    a: 'Yes, we include logo reveals, intros, and outros as part of our Animated Video Production offerings.',
  },
 
   {
    q: 'Do you offer bundled services like video marketing or social media promotion?',
    a: 'Yes. Alongside Animated Video Production, we also handle video marketing and promotional distribution.',
  },
 
   {
    q: 'How do you price animated video projects?',
    a: 'Pricing depends on duration, style, and complexity — ensuring value for every Animated Video Production.',
  },
 
   {
    q: 'Can I provide my own script or voiceover?',
    a: 'Of course! You can share your materials, and we’ll integrate them seamlessly into your Animated Video Production.',
  },
 
   {
    q: 'Do you support revisions?',
    a: 'Yes, we provide revision rounds as part of our Animated Video Production process to ensure satisfaction.',
  },
 
   {
    q: 'Will the animation be suitable for both mobile and desktop?',
    a: 'Definitely. Every Animated Video Production is optimized for multiple formats and platforms',
  },
   {
    q: 'Can we track progress during development?',
    a: 'Yes. We provide updates, preview links, and progress reports for full transparency during Animated Video Production.',
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
