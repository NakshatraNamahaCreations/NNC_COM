"use client";
import { useState } from "react";
import styles from "../../styles/covered-section.module.css";

const faqs = [
   {
    q: 'What services does Nakshatra Namaha Creations provide for local businesses?',
    a: 'Nakshatra Namaha Creations offers end-to-end web development services including custom website design, CMS-based platforms, e-commerce stores, and long-term support tailored to local businesses.',
  },
 
   {
    q: 'Why should I choose Nakshatra Namaha Creations over other providers?',
    a: 'Nakshatra Namaha Creations is known for transparent communication, timely project delivery, and a dedicated team that understands both global standards and local market needs.',
  },
   {
    q: 'Does Nakshatra Namaha Creations offer maintenance and post-launch support?',
    a: 'Yes. Nakshatra Namaha Creations provides reliable maintenance plans, software updates, and performance monitoring to ensure your website continues to deliver top results.',
  },
   {
    q: 'How quickly can I get started with local website developers near me?',
    a: 'When you choose website developers near me, you can often begin within a few days thanks to faster onboarding, straightforward discussions, and local accessibility.',
  },
   {
    q: 'How does Nakshatra Namaha Creations ensure my site is optimized for SEO?',
    a: 'The team at Nakshatra Namaha Creations follows best practices such as clean coding, fast load times, responsive layouts, and optimized metadata to improve your site’s search visibility.',
  },
   {
    q: 'Can Nakshatra Namaha Creations redesign my existing website?',
    a: 'Absolutely. Nakshatra Namaha Creations specializes in modernizing outdated websites, improving design, usability, and site performance to align with current business goals.',
  },
   {
    q: 'Why should I hire website developers near me?',
    a: 'Hiring website developers near me ensures faster communication, better understanding of local markets, and a more personalized development experience.',
  },
   {
    q: 'Can website developers near me handle large or complex projects?',
    a: 'Yes. Many website developers near me have the expertise and resources to deliver enterprise-level websites, custom platforms, and feature-rich applications.',
  },
   {
    q: 'Are website developers near me more expensive than remote teams?',
    a: 'Not necessarily. Working with website developers near me can often save costs by avoiding delays, reducing miscommunication, and enabling quicker project delivery.',
  },
   {
    q: 'Do website developers near me offer SEO-friendly and mobile-responsive sites?',
    a: 'Yes. Most website developers near me use responsive designs and SEO-friendly coding to ensure your website performs well on all devices and in search rankings.',
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
