"use client";
import { useState } from "react";
import styles from "../../styles/covered-section.module.css";

const faqs = [
   {
    q: 'Why should I choose Nakshatra Namaha Creations as my website development company?',
    a: ' Nakshatra Namaha Creations combines creativity, technical expertise, and SEO knowledge to deliver websites that drive measurable business results. We provide long-term support and reliable solutions for all industries.',
  },
 
   {
    q: 'Does Nakshatra Namaha Creations provide customized website development services?',
    a: 'Yes. Our team at Nakshatra Namaha Creations develops custom websites tailored to your brand’s identity, target audience, and specific business goals.',
  },
   {
    q: 'Can Nakshatra Namaha Creations help my business with e-commerce website development?',
    a: 'Absolutely. We specialize in building e-commerce platforms with secure payment gateways, product management systems, and responsive design to increase sales and customer engagement.',
  },
   {
    q: 'Does Nakshatra Namaha Creations provide ongoing website maintenance?',
    a: 'Yes, we do. Nakshatra Namaha Creations offers regular updates, bug fixes, security checks, and performance monitoring to keep your website running smoothly.',
  },
   {
    q: 'Will Nakshatra Namaha Creations optimize my website for SEO during development?',
    a: 'Yes. Every project we deliver at Nakshatra Namaha Creations is SEO-friendly, ensuring faster loading speed, clean coding, and better chances of ranking higher on Google.',
  },
   {
    q: 'How much does it cost to hire a website development company?',
    a: 'The cost depends on project requirements. A simple business website may be affordable, while advanced e-commerce or custom applications require a higher investment.',
  },
   {
    q: 'What industries can a website development company serve?',
    a: 'A website development company can build websites for almost every sector including healthcare, real estate, retail, education, IT, hospitality, and manufacturing.',
  },
   {
    q: 'Will my website be mobile-friendly if I hire a website development company?',
    a: 'Yes, most professional website development companies focus on mobile-first design, ensuring your site works seamlessly on smartphones and tablets.',
  },
   {
    q: 'Do website development companies provide domain and hosting services too?',
    a: 'Yes, many companies offer complete packages including domain registration, hosting, SSL certificates, and ongoing support.',
  },
   {
    q: 'How do I know if a website development company is right for my business?',
    a: 'Check their portfolio, client reviews, industry experience, and whether they provide SEO-ready solutions. A reliable website development company should align with your goals and offer transparent communication.',
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
