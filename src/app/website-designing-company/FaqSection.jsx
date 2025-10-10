"use client";
import { useState } from "react";
import styles from "../../styles/covered-section.module.css";

const faqs = [
   {
    q: 'Why should I choose your company for website designing?',
    a: 'We combine creativity, technology, and SEO to deliver websites that generate results and long-term value.',
  },
  {
    q: 'Do you provide custom website designing?',
    a: 'Yes, we design websites tailored to your brand, audience, and business objectives.',
  },
   {
    q: 'Can you design e-commerce websites?',
    a: 'Absolutely. We create e-commerce platforms with secure payment gateways and user-friendly layouts.',
  },
   {
    q: 'Do you provide website maintenance services?',
    a: 'Yes, we offer ongoing support including updates, security patches, and performance monitoring.',
  },
   {
    q: 'Will my website be SEO-friendly?',
    a: 'Yes, all our websites are optimized for speed, structure, and search visibility.',
  },
   {
    q: 'How much does a website designing company charge?',
    a: 'Costs vary by project complexity. A simple site costs less, while advanced e-commerce or custom platforms may require higher investment.',
  },
   {
    q: 'Which industries do you design websites for?',
    a: 'We serve businesses across healthcare, real estate, retail, education, IT, hospitality, and more.',
  },
   {
    q: 'Will my website be mobile-friendly?',
    a: 'Yes, we design with a mobile-first strategy to ensure compatibility across all devices.',
  },
   {
    q: 'Do you offer domain and hosting services?',
    a: 'Yes, we provide end-to-end solutions including domain, hosting, and SSL setup.',
  },
   {
    q: 'How do I choose the right website designing company?',
    a: 'Check their portfolio, client reviews, and SEO expertise. A reliable company offers transparent communication and aligns with your goals.',
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
