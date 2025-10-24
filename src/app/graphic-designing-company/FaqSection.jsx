"use client";
import { useState } from "react";
import styles from "../../styles/covered-section.module.css";

const faqs = [
   {
    q: 'Why should I choose Nakshatra Namaha Creations as my Graphic Designing Company?',
    a: 'We’re a creative-driven Graphic Designing Company with proven experience across multiple industries, delivering visuals that communicate effectively.',
  },
 {
    q: 'How does your Graphic Designing Company maintain brand consistency?',
    a: 'We align all assets with your brand guidelines to ensure cohesive identity across print, digital, and campaigns.',
  },
   {
    q: 'Can your Graphic Designing Company handle ongoing creative needs?',
    a: 'Yes, we provide monthly retainers for continuous brand design and creative asset management.',
  },
 {
    q: 'What makes your Graphic Designing Company different from freelancers?',
    a: 'Unlike one-time designers, our Graphic Designing Company offers strategy, scalability, and multi-platform design expertise.',
  },
 
   {
    q: 'Does your Graphic Designing Company offer consultation for rebranding?',
    a: 'Absolutely. We help analyze your current brand visuals and redesign them for better positioning and modern appeal.',
  },
 {
    q: 'How long does a typical logo design project take?',
    a: 'Our Graphic Designing Company usually completes logo design projects within 4–7 working days including revisions',
  },
 
   {
    q: 'Do you provide print-ready formats for brochures and posters?',
    a: 'Yes, our Graphic Designing Company delivers all files in high-resolution print and web formats.',
  },
 {
    q: 'Can you design graphics for social media campaigns?',
    a: 'Definitely. The Graphic Designing Company team creates engaging visuals optimized for Facebook, Instagram, and LinkedIn.',
  },
   {
    q: 'Is there a revision limit for your design projects?',
    a: 'Our Graphic Designing Company offers 2–3 revision rounds based on the package selected',
  },
 {
    q: 'Do you handle both UI and UX in web design projects?',
    a: 'Yes, our Graphic Designing Company covers complete UI/UX workflows from wireframes to final delivery.',
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
