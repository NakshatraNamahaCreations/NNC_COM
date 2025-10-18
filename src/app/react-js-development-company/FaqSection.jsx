"use client";
import { useState } from "react";
import styles from "../../styles/covered-section.module.css";

const faqs = [
   {
    q: 'What types of websites do you build using React JS?',
    a: 'We build everything from landing pages and corporate websites to complex web applications, dashboards, and portals—all using React JS.',
  },
   {
    q: 'How is React JS different from other front-end technologies?',
    a: 'React JS uses a component-based architecture, which makes development faster, more scalable, and easier to maintain. It also ensures better performance and user experience.',
  },
   {
    q: 'Do you also offer backend development?',
    a: 'Yes, we provide full-stack support and can integrate your React front-end with backend technologies like Node.js, Firebase, or REST/GraphQL APIs.',
  },
   {
    q: 'Can you redesign my existing website using React?',
    a: 'Absolutely! We specialize in migrating or redesigning existing websites to React for better speed, flexibility, and user experience.',
  },
   {
    q: 'Is React JS SEO-friendly?',
    a: 'With the right setup—especially using frameworks like Next.js—React websites can be made SEO-friendly through server-side rendering and optimized routing.',
  },
   {
    q: 'What’s your typical project timeline?',
    a: 'Timelines vary depending on the project’s size and complexity. A basic website might take 2–3 weeks, while larger web apps can take a few months. We’ll always provide a clear estimate up front.',
  },
 
   {
    q: 'Do you develop React JS applications for both web and mobile?',
    a: 'Yes, we build React JS web applications and also create cross-platform mobile apps using React Native, ensuring consistent performance and design across devices.',
  },
   {
    q: 'Can you integrate third-party APIs or tools into a React JS project?',
    a: 'Absolutely. We integrate APIs, analytics tools, payment gateways, and other third-party services to enhance your React JS application’s functionality and user experience.',
  },
   {
    q: 'Do you provide ongoing maintenance and support for React JS websites?',
    a: 'Yes, we offer continuous support, performance optimization, and feature updates to keep your React JS website or app secure, fast, and up to date',
  },
   {
    q: 'Why should I choose React JS for my business website?',
    a: 'React JS is ideal for businesses that want fast-loading, scalable, and dynamic web applications. It allows for reusable components, improved performance, and a smoother development process that saves time and cost.',
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
