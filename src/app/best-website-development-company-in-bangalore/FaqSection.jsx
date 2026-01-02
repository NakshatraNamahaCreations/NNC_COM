"use client";
import { useState } from "react";
import styles from "../../styles/covered-section.module.css";

const faqs = [
   {
    q: 'Is this suitable for small and mid-sized businesses?',
    a: 'Yes. The best website development company in Bangalore builds scalable websites suitable for businesses at every stage.',
  },
   {
    q: 'Can you redesign my existing website?',
    a: 'Yes. Website revamp services focus on improving performance, usability, and enquiry generation.',
  },
   {
    q: 'Will the website help generate leads?',
    a: 'Websites are structured with conversion-focused layouts and clear calls-to-action.',
  },
   {
    q: 'Do you provide ongoing support?',
    a: 'Yes. Continued support ensures long-term performance and security. ',
  },
     {
    q: 'Is this service suitable for small and mid-sized businesses?',
    a: 'Yes. The best website development company in Bangalore builds scalable websites that suit startups, small businesses, and growing companies at every stage of their journey',
  },
   {
    q: 'Can you redesign or improve my existing website?',
    a: 'Absolutely. Website redesign services focus on improving performance, usability, structure, and overall user experience while aligning the site with current business goals.',
  },
     {
    q: 'Will the website help generate leads for my business?',
    a: 'Yes. Websites are designed with conversion-focused layouts, clear calls-to-action, and user-friendly navigation to encourage enquiries and lead generation.',
  },
   {
    q: 'Do you provide ongoing website support and maintenance?',
    a: 'Yes. Ongoing support ensures your website remains secure, updated, and performs reliably over time, with technical assistance available whenever required.',
  },
     {
    q: 'How long does it take to develop a business website?',
    a: 'The timeline depends on the scope and features of the website. A standard business website typically takes a few weeks, while more complex projects may take longer.',
  },
   {
    q: 'Will my website be mobile-friendly and SEO-ready?',
    a: 'Yes. All websites are developed using a responsive, mobile-first approach and follow SEO-friendly structure to support search visibility and user experience.',
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
