"use client";
import { useState } from "react";
import styles from "../../styles/covered-section.module.css";

const faqs = [
   {
    q: 'Why choose Nakshatra Namaha Creations for Search Engine Optimisation?',
    a: 'We combine expertise, transparency, and measurable results to deliver top-performing Search Engine Optimisation for all industries.',
  },
   {
    q: 'Is Nakshatra Namaha Creations an ethical SEO agency?',
    a: 'Yes. Our Search Engine Optimisation strictly follows Google guidelines — no black-hat or spammy tactics.',
  },
   {
    q: 'Do you offer SEO audits before starting?',
    a: 'Absolutely. We begin every Search Engine Optimisation campaign with a detailed audit to identify technical and content gaps.',
  },
   {
    q: 'Can you manage both local and global SEO projects?',
    a: 'Yes, our Search Engine Optimisation strategies adapt to local markets and international audiences.',
  },
   {
    q: 'What industries do you specialize in for SEO?',
    a: 'We provide Search Engine Optimisation for e-commerce, healthcare, real estate, education, and tech sectors.',
  },
   {
    q: 'What makes a successful Search Engine Optimisation strategy?',
    a: 'A combination of content quality, keyword intent, backlinks, and technical optimization ensures long-term visibility.',
  },
   {
    q: 'Do you guarantee #1 rankings?',
    a: 'No ethical Search Engine Optimisation company can guarantee rankings, but we guarantee consistent growth.',
  },
   {
    q: 'Which SEO tools do you use?',
    a: 'Our Search Engine Optimisation team uses Google Search Console, Ahrefs, SEMrush, and Screaming Frog for accurate insights.',
  },
   {
    q: 'Will SEO help my local business?',
    a: 'Definitely. Local Search Engine Optimisation helps your business appear on Google Maps, directories, and “near me” searches.',
  },
   {
    q: 'Can you optimize my existing website?',
    a: 'Yes, we can enhance your current site’s performance through thorough Search Engine Optimisation audits and fixes.',
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
