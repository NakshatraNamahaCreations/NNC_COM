"use client";
import { useState } from "react";
import styles from "../../styles/covered-section.module.css";

const faqs = [
   {
    q: 'Why should I choose Nakshatra Namaha Creations for 2D animation services?',
    a: 'At Nakshatra Namaha Creations, we combine creativity, storytelling, and technical expertise to deliver animations that are not just visually appealing but also strategically impactful for your brand. ',
  },
 
   {
    q: 'Does Nakshatra Namaha Creations offer complete animation production?',
    a: 'Yes! Nakshatra Namaha Creations handles everything from scriptwriting, storyboarding, and illustration to voice-over, sound design, and final delivery.',
  },
   {
    q: 'What industries does Nakshatra Namaha Creations serve with 2D animation?',
    a: 'Nakshatra Namaha Creations has worked with education, healthcare, e-commerce, entertainment, finance, and corporate clients to deliver animations tailored to their needs.',
  },
   {
    q: 'How does Nakshatra Namaha Creations ensure animation quality?',
    a: 'Every project at Nakshatra Namaha Creations goes through a detailed review process, including script approvals, visual style checks, and multiple quality tests to ensure professional results.',
  },
   {
    q: ' I have only a rough idea—can you help me turn it into a full animation?',
    a: 'Definitely! Many clients start with just an idea, and our team guides them through script development, storyboarding, and final animation to bring it to life.',
  },
   {
    q: 'Will I be involved in the creative process?',
    a: 'Yes, we believe collaboration is key. You’ll have the chance to review drafts, share feedback, and make changes at every stage of the project.',
  },
   {
    q: 'Can animations be customized to match my brand’s colors and tone?',
    a: 'Of course. We tailor every animation to your brand’s personality, ensuring the visuals, characters, and overall style reflect your identity.',
  },
   {
    q: 'How do you handle revisions if I need changes?',
    a: 'We include revision rounds as part of our process. Your feedback is welcomed, and we make necessary adjustments to ensure you’re completely satisfied.',
  },
   {
    q: 'Can Nakshatra Namaha Creations create custom characters for my brand?',
    a: 'Absolutely! Our creative team at Nakshatra Namaha Creations designs unique characters and styles that align with your brand identity and storytelling goals.',
  },
   {
    q: 'Do you offer different pricing options for startups or small businesses?',
    a: 'Yes, we understand different budgets. We offer flexible packages so that startups, SMEs, and enterprises can all benefit from professional 2D animation services.',
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
