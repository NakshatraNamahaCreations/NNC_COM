"use client";
import { useState } from "react";
import styles from "../../styles/covered-section.module.css";

const faqs = [
   {
    q: 'What makes puppet animation effective for storytelling?',
    a: 'Puppet animation brings characters to life with expressive movement and personality. It’s ideal for conveying emotion, humor, and narrative in a way that feels engaging and memorable to viewers.',
  },
   {
    q: 'Can I include voiceovers in multiple languages?',
    a: 'Yes, we provide multilingual voiceover options with native-speaking artists.',
  },
   {
    q: 'Do I own the rights to the final video?',
    a: 'Absolutely. Once the project is completed and paid for, full rights are handed over to you.',
  },
   {
    q: 'Can I request changes after delivery?',
    a: 'Yes, minor post-delivery edits are included. Major revisions may be discussed additionally.',
  },
   {
    q: 'Is puppet animation suitable for serious corporate topics?',
    a: 'Yes, puppet animation can be crafted with a tone that suits both playful and serious messaging.',
  },
   {
    q: 'What do I need to provide to get started?',
    a: 'Just a clear objective, a short brief, and any brand material you want incorporated—we handle the rest',
  },

{
  q: 'Can puppet animation be used for marketing and social media?',
  a: 'Yes, puppet animation works exceptionally well for marketing campaigns, social media content, and advertisements by capturing attention and improving message recall.',
},
{
  q: 'Do you help with scriptwriting and story development?',
  a: 'Absolutely. Our team assists with scriptwriting, storyboarding, and creative direction to ensure your message is clear and engaging.',
},
{
  q: 'Can puppet animation be customized to match my brand style?',
  a: 'Yes, all characters, visuals, and animation styles are customized to align with your brand identity, tone, and target audience.',
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
