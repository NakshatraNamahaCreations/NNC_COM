"use client";
import { useState } from "react";
import styles from "../../styles/covered-section.module.css";

const faqs = [
   {
    q: 'Why​‍​‌‍​‍‌​‍​‌‍​‍‌ choose Nakshatra Namaha Creations for Social Media Marketing?',
    a: 'It is because of the blend of creativity, analytics, and strategy that we do to give you the desired results through our Social Media Marketing services.',
  },
   {
    q: 'Is Nakshatra Namaha Creations a full-service Social Media Marketing company?',
    a: 'Indeed, we are. We take up the entire management from strategy, content, paid campaigns, and reporting.',
  },
   {
    q: 'By what means do you judge the effectiveness of Social Media Marketing?',
    a: 'By means of the engagement metrics, conversions, and ROI tracking dashboards.',
  },
   {
    q: 'Can Nakshatra Namaha Creations handle both local and international campaigns?',
    a: 'Definitely. Our Social Media Marketing is open to different languages and international audiences.',
  },
  {
    q: 'Before promoting Social Media Marketing, do you supply brand audits?',
    a: 'Yes. We do an in-depth analysis of your profiles, competitors, and audience before preparing a strategy.',
  },
   {
    q: 'Do you provide content to all social media platforms?',
    a: 'Yes, through our Social Media Marketing, one can access services from Instagram, Facebook, LinkedIn, Twitter (X), and YouTube.',
  },
  {
    q: 'Is it possible for you to manage ads alongside organic posts?',
    a: 'Indeed, we are to integrate both organic and paid strategies within our Social Media Marketing plans.',
  },
   {
    q: 'How often do you post for clients?',
    a: 'Our Social Media Marketing is at your disposal to offer 12, 20, or 30+ posts monthly based on your plan.',
  },
   {
    q: 'Are you in charge of community management and DMs?',
    a: 'Yes, engagement and customer response are parts of our Social Media Marketing services.',
  },
   {
    q: 'Do you make reels and video content?',
    a: 'Indeed. Under the Social Media Marketing plan, we provide high-quality video content that is ​‍​‌‍​‍‌​‍​‌‍​‍‌platform-friendly.',
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
