"use client";
import { useState } from "react";
import styles from "../../styles/covered-section.module.css";
const faqs = [
  {
    q: "What does Nakshatra Namaha Creations offer in website development?",
    a: "Nakshatra Namaha Creations provides end-to-end website development services, from strategy and design to coding, testing, and launch, ensuring every project is aligned with your business goals.",
  },
  {
    q: "Why should I choose Nakshatra Namaha Creations over other agencies?",
    a: "With years of experience and a proven track record, Nakshatra Namaha Creations focuses on quality, timely delivery, and long-term support, making it a trusted partner for businesses of all sizes.",
  },
  {
    q: "Does Nakshatra Namaha Creations offer support after the website goes live?",
    a: "Yes. Nakshatra Namaha Creations provides dedicated post-launch support, including updates, security patches, and performance monitoring to keep your website running smoothly.",
  },
  {
    q: "How does Nakshatra Namaha Creations ensure my website is mobile-friendly?",
    a: "The team at Nakshatra Namaha Creations uses responsive design techniques and rigorous testing to ensure your website works seamlessly across all devices and screen sizes.",
  },
  {
    q: "Can Nakshatra Namaha Creations redesign my existing website?",
    a: "Yes. Nakshatra Namaha Creations specializes in redesigning outdated websites, modernizing the design, enhancing usability, and improving performance to match current market trends.",
  },
  {
    q: "What technologies do website developers use?",
    a: "Modern website developers often work with technologies like HTML5, CSS3, JavaScript, React, Next.js, PHP, WordPress, and various backend frameworks to deliver robust solutions.",
  },
  {
    q: "How do website developers ensure mobile responsiveness?",
    a: "Professional website developers use responsive design techniques, flexible grids, and testing across devices to guarantee your website looks and functions well on all screens.",
  },
  {
    q: "Do website developers handle website redesign projects?",
    a: "Yes, expert website developers specialize in redesigning outdated websites by improving design, usability, speed, and functionality to meet modern business requirements.",
  },
  {
    q: "Can website developers integrate third-party tools into a site?",
    a: "Experienced website developers can integrate CRMs, payment gateways, analytics tools, and other third-party services to enhance your website’s capabilities.",
  },
  {
    q: "Why should I choose professional website developers over DIY builders?",
    a: "Hiring professional website developers ensures your site is secure, scalable, and optimized for performance—benefits often missing in DIY website builders.",
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
