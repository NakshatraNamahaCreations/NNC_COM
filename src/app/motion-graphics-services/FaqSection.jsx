"use client";
import { useState } from "react";
import styles from "../../styles/covered-section.module.css";

const faqs = [
   {
    q: 'What are Motion Graphics Services and how can they help my brand?',
    a: 'Motion Graphics Services use animated visuals, text, and graphics to explain ideas clearly and attractively, helping brands communicate faster and more effectively.',
  },
  {
    q: 'How do Motion Graphics Services improve marketing performance?',
    a: 'Motion Graphics Services boost engagement by turning complex information into easy-to-understand animations, increasing conversions on websites, ads, and social media.',
  },
    {
    q: 'What types of videos can be created using Motion Graphics Services?',
    a: 'Motion Graphics Services can produce explainer videos, product demos, brand intro videos, kinetic typography, UI animations, social media reels, and training visuals.',
  },
  {
    q: 'How long does it take to complete a project using Motion Graphics Services?',
    a: 'Most Motion Graphics Services projects take 1–3 weeks depending on script length, design complexity, voiceovers, and revision cycles.',
  },
    {
    q: 'Are Motion Graphics Services suitable for startups and small businesses?',
    a: 'Yes, Motion Graphics Services are perfect for startups because they explain ideas quickly, improve pitch presentations, and make marketing content more engaging.',
  },
   {
    q: 'Do Motion Graphics Services include voiceovers and background music?',
    a: 'Many Motion Graphics Services packages include professional voiceovers, sound effects, and licensed background music for a complete production.',
  },
 {
    q: 'Can Motion Graphics Services be customized to match my brand identity?',
    a: 'Absolutely Motion Graphics Services allow full customization of colors, fonts, style, characters, and visuals to reflect your brand personality.',
  },
   {
    q: 'Are Motion Graphics Services useful for social media promotions?',
    a: 'Yes, Motion Graphics Services perform exceptionally well on platforms like Instagram, Facebook, LinkedIn, and YouTube due to their high visual engagement.',
  },
  {
    q: 'What do I need to provide before starting Motion Graphics Services?',
    a: 'To begin Motion Graphics Services, you typically need to share your script, brand guidelines, references, and any specific messaging goals.',
  },
  {
    q: 'Do Motion Graphics Services support multiple languages?',
    a: 'Yes, Motion Graphics Services can be produced in any language using multilingual voiceovers and region-friendly visual styles.',
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
