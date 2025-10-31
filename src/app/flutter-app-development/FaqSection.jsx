"use client";
import { useState } from "react";
import styles from "../../styles/covered-section.module.css";

const faqs = [
   {
    q: 'Why choose Nakshatra Namaha Creations as your Flutter App Development Company?',
    a: 'Nakshatra Namaha Creations is a trusted Flutter App Development Company with years of experience in building scalable, high-performance mobile apps that deliver measurable business outcomes.',
  },
   {
    q: 'How does your Flutter App Development Company ensure quality and performance?',
    a: 'Our Flutter App Development Company follows a rigorous testing and QA process to guarantee app reliability, security, and speed before every launch.',
  },
   {
    q: 'What makes Nakshatra Namaha Creations different from other Flutter App Development Companies?',
    a: 'Unlike generic agencies, our Flutter App Development Company provides personalized solutions, dedicated project management, and transparent communication throughout the development cycle.',
  },
   {
    q: 'Does your Flutter App Development Company provide post-launch support?',
    a: 'Yes. Our Flutter App Development Company offers ongoing maintenance, version upgrades, and performance monitoring to ensure your app runs smoothly after deployment.',
  },
   {
    q: 'Can Nakshatra Namaha Creations handle enterprise-grade Flutter projects?',
    a: 'Absolutely. As a leading Flutter App Development Company, we have successfully delivered enterprise-level applications for diverse industries, ensuring scalability and compliance. ',
  },
   {
    q: 'How long does it take a Flutter App Development Company to complete a project?',
    a: 'The timeline depends on app complexity, but typically our Flutter App Development Company delivers fully functional apps within 8–16 weeks.',
  },
    {
    q: 'What technologies does your Flutter App Development Company use for backend integration?',
    a: 'Our Flutter App Development Company integrates secure backends using Node.js, Firebase, and AWS, ensuring high performance and scalability for every project.',
  },
   {
    q: 'Can your Flutter App Development Company help with UI/UX design for mobile apps?',
    a: 'Yes, our Flutter App Development Company includes an in-house design team that crafts stunning, user-friendly interfaces aligned with your brand identity.',
  },
   {
    q: 'Does your Flutter App Development Company build apps for startups and small businesses?',
    a: '? Definitely. Our Flutter App Development Company specializes in helping startups develop MVPs and full-scale apps that are fast, cost-effective, and easy to scale.',
  },
   {
    q: 'How can I get started with your Flutter App Development Company?',
    a: 'You can contact Nakshatra Namaha Creations via our website or email to schedule a consultation. Our Flutter App Development Company will discuss your requirements, prepare a plan, and guide you through each step of the process.',
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
